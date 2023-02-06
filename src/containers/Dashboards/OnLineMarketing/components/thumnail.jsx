import React from 'react';

import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { Card, CardBody, Col,Row, Container} from 'reactstrap';
import HeartOutlineIcon from 'mdi-react/HeartOutlineIcon';

const data = [{ value: 68, fill: '#ff4861' },
  { value: 32, fill: '#eeeeee' }];

const modules = () => {
 

  return (
    <Container>

   
    <Row>

   
    <Col>
      <Card>
        <CardBody className="dashboard__health-chart-card">
          <div className="card__title">
            <h5 className="bold-text card__title-center">{('Roles')}</h5>
          </div>
          <div className="dashboard__health-chart">
            <ResponsiveContainer height={180}>
              <PieChart>
                <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
              </PieChart>
            </ResponsiveContainer>
            <div className="dashboard__health-chart-info">
              {/* <HeartOutlineIcon style={{ fill: '#ff4861' }} /> */}
              <p className="dashboard__health-chart-number">. .</p>
              <p className="dashboard__health-chart-units">--</p>
            </div>
          </div>
          <p className="dashboard__goal">...</p>
        </CardBody>
      </Card>
    </Col>
    <Col>
      <Card>
        <CardBody className="dashboard__health-chart-card">
          <div className="card__title">
            <h5 className="bold-text card__title-center">{('Users')}</h5>
          </div>
          <div className="dashboard__health-chart">
            <ResponsiveContainer height={180}>
              <PieChart>
                <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
              </PieChart>
            </ResponsiveContainer>
            <div className="dashboard__health-chart-info">
              {/* <HeartOutlineIcon style={{ fill: '#ff4861' }} /> */}
              <p className="dashboard__health-chart-number">. .</p>
              <p className="dashboard__health-chart-units">--</p>
            </div>
          </div>
          <p className="dashboard__goal">...</p>
        </CardBody>
      </Card>
    </Col>
    <Col>
      <Card>
        <CardBody className="dashboard__health-chart-card">
          <div className="card__title">
            <h5 className="bold-text card__title-center">{('Projects')}</h5>
          </div>
          <div className="dashboard__health-chart">
            <ResponsiveContainer height={180}> ,
              <PieChart>
                <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
              </PieChart>
            </ResponsiveContainer>
            <div className="dashboard__health-chart-info">
              {/* <HeartOutlineIcon style={{ fill: '#ff4861' }} /> */}
              <p className="dashboard__health-chart-number">. .</p>
              <p className="dashboard__health-chart-units">--</p>
            </div>
          </div>
          <p className="dashboard__goal">...</p>
        </CardBody>
      </Card>
    </Col>
<Col xs={5} >
      <Card>
        <CardBody className="dashboard__health-chart-card">
          <div className="card__title">
            <h5 className="bold-text card__title-center">{('Tasks')}</h5>
          </div>
          <div className="dashboard__health-chart">
            <ResponsiveContainer height={180}>
              <PieChart>
                <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
              </PieChart>
            </ResponsiveContainer>
            <div className="dashboard__health-chart-info">
              {/* <HeartOutlineIcon style={{ fill: '#ff4861' }} /> */}
              <p className="dashboard__health-chart-number">. .</p>
              <p className="dashboard__health-chart-units">--</p>
            </div>
          </div>
          <p className="dashboard__goal">...</p>
        </CardBody>
      </Card>
    </Col>
    </Row>
    </Container>
  );
};

export default modules;
