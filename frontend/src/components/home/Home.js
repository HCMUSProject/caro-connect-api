import React from 'react';
import { Menu, Icon, Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item>
          <Link to='/'>
            <Icon type='home' />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/game'>
            <Icon type='coffee' />
            Game
          </Link>
        </Menu.Item>

        <Menu.Item className='float-right'>
          <Link to='/login'>
            <Icon type='login' />
            Login
          </Link>
        </Menu.Item>
      </Menu>

      <Row type='flex' justify='center' style={{ marginTop: '20px' }}>
        <Col xs={20} md={12}>
          <Card title='User infomation' loading>
            <p>Id: </p>
            <p>Email: </p>
            <p>Name: </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
