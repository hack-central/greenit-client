import { useState } from 'react';
import {
  Layout,
  Card,
  Divider,
  Row,
  Col,
  Modal,
  Typography,
  Avatar,
  Button,
  Input,
  AutoComplete,
} from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar/Navbar';
import Event from '../components/Event/Event';
import PageFooter from '../components/PageFooter/PageFooter';

import mapBg from '../assets/mapbg.png';

const { Sider, Content } = Layout;

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

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  return (
    <Layout>
      <Navbar />

      <Layout style={{ maxHeight: '80vh', overflowY: 'scroll', overflowX: 'hidden', marginTop: '10px' }}>
        <Content>
          <Col className="event-col">
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
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
          </Col>
        </Content>
        <Sider className="event-sidebar" width="40%">
          <img className="event-map-image" alt='map' src={mapBg} />
        </Sider>
      </Layout>
      <PageFooter />
    </Layout>
  );
}
