import { Layout } from 'antd';

const { Footer } = Layout;

export default function PageFooter() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      © Greenit 2021{' '}
      <a href="https://github.com/hack-central/greenit-client">&lt;/&gt;</a>
    </Footer>
  );
}
