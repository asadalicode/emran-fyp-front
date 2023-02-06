import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import Modal from './Modal';


const RoleAdd = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xl={4} xs={12}>
      <Card>
        <CardBody >
        
          <ButtonToolbar className="text-right" style={{float:"right"}}>
          <div  >
            <Modal 
            
           
              color="primary"
              title="Add Role"
              btn="Add Role"
              message="...."
               
            />
            
            </div>
          </ButtonToolbar>
         
        </CardBody>
      </Card>
    </Col>
  );
};

export default RoleAdd;
