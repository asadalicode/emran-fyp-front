import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import HeartRate from './components/Tasks';
import TaskTable from './components/TaskTable';

const TaskManagement = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
        <h2>Tasks</h2>
        </Col>
      </Row>
      <Row>
      
    
        <TaskTable />
      </Row>
    </Container>
  );
};

export default TaskManagement;
