import { useEffect, useState } from 'react';
import { Layout, Col, Row, Input, AutoComplete, Empty, List } from 'antd';
import HEREMap, { Marker } from 'here-maps-react';
import Navbar from '../components/Navbar/Navbar';
import Event from '../components/Event/Event';
import PageFooter from '../components/PageFooter/PageFooter';

const { Content } = Layout;

const getRandomInt = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const searchResult = (query) => {
  return new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });
};

export default function Events() {
  const [options, setOptions] = useState([]);
  const [res, setResponse] = useState({});

  useEffect(() => {
    const fetchReq = async () => {
      const eventsRes = await fetch('https://earthy.sauravmh.com/api/events');
      const usersRes = await fetch('https://earthy.sauravmh.com/api/users');
      const eventsData = await eventsRes.json();
      const usersData = await usersRes.json();
      setResponse({ events: eventsData, users: usersData });
    };

    fetchReq();
  }, []);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  const GenerateEvents = () => {
    if (res === {}) {
      return <Empty />;
    }

    return (
      <List
        itemLayout="horizontal"
        size="large"
        pagination={{ pageSize: 5 }}
        dataSource={res.events}
        renderItem={(event) => {
          console.log(event);
          return (
            <Event
              key={event.id}
              eventDate={event.startTime}
              eventImage={`https://placeimg.com/400/200/nature?q=${
                Math.random() * 11
              }`}
              eventDescription={event.description}
              eventLocation={`${event.location.street}, ${event.location.city}`}
              eventName={event.name}
              eventOrganizer={res.users[event.createdBy].firstName}
              eventOrganizerImage={`https://placeimg.com/480/480/people?q=${Math.random()}`}
            />
          );
        }}
      />
    );
  };

  return (
    <Layout>
      <Navbar />

      <Layout
        style={{
          maxHeight: '80vh',
          overflowY: 'scroll',
          overflowX: 'hidden',
          marginTop: '10px',
        }}
      >
        <Content>
          <Row justify="center">
            <Col sm={14}>
              <AutoComplete
                dropdownMatchSelectWidth={252}
                style={{
                  width: '80%',
                  marginBottom: '20px',
                }}
                options={options}
                onSelect={onSelect}
                onSearch={handleSearch}
              >
                <Input.Search
                  size="large"
                  placeholder="Search for an event or place"
                  enterButton
                />
              </AutoComplete>
              <GenerateEvents />
            </Col>
            <Col sm={9} style={{ height: '80vh' }}>
              <HEREMap
                apikey={process.env.REACT_APP_HERE_API_KEY || ''}
                center={{ lat: 19.076, lng: 72.8777 }}
                animateCenter
                animateZoom
                interactive
                hidpi
                zoom={6}
              >
                <Markers events={res.events} />
              </HEREMap>
            </Col>
          </Row>
        </Content>
      </Layout>
      <PageFooter />
    </Layout>
  );
}

const Markers = ({ events }) => {
  if (!events) return null;

  if (events.length <= 0) return null;

  console.log(events);

  const points = events.map((v) => {
    return { lat: v.location.latitude, lng: v.location.longitude, id: v.id };
  });
  return points.map(({ lat, lng, id }) => {
    if (lat && lng) return <Marker lat={lat} lng={lng} data="demo1" key={id} />;
    return null;
  });
};
