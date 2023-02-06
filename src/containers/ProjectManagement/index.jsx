import React,{useState} from 'react';
// import { useTranslation } from 'react-i18next';
import { Col, Container, Row,Button, Modal, Card,CardBody,ButtonToolbar} from 'reactstrap';
import BasicHookForm from '../Form/ReactHookForm/BasikHookForm';
import ProjectTable from './components/ProjectTable';
import AddProject from './components/Projects'; 
// import AddProject from './components/Projects';
// import ProjectManagement from '../App/Router/WrappedRoutes/ProjectManagement';

const ProjectManagement = () => {
    // const { t } = useTranslation('common');
    const [projects, setprojects] = useState([
        {
            "projectId": "123",
            "projectName": "Zameen Website",
            "startDate": "20-07-2020",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "scope": "adipisicing elit",
            "functionalReqs": [
                {
                    "id": "1",
                    "description": "Admin shall be able to login to the system"
                },
                {
                    "id": "2",
                    "description": "Admin shall be able to view unsold properties"
                }
            ],
            "endDate": "20-07-2022",
            "TeamLead": "User",
            "Members": "User",
            "status": "In Progress"
        },
        {
            "projectId": "456",
            "projectName": "CUST Website",
            "startDate": "20-07-2020",
            "scope": "sit amet consectetur",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "functionalReqs": [
                {
                    "id": "1",
                    "description": "Teacher shall be able to view registered students"
                },
                {
                    "id": "2",
                    "description": "Teacher shall be able to upload students marks"
                }
            ],
            "endDate": "20-07-2022",
            "Members": "User",
            "status": "Completed"
        },
        {
            "projectId": "789",
            "projectName": "Mobile App",
            "startDate": "20-07-2020",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "scope": "Lorem ipsum dolor",
            "functionalReqs": [
                {
                    "id": "1",
                    "description": "User shall be able to message other registered users"
                },
                {
                    "id": "2",
                    "description": "User shall be able to login to application"
                }
            ],
            "endDate": "20-07-2022",
            "Members": "User",
            "status": "Testing"
        }
    ]);
 
    return (
     
      <Container className="dashboard">
        <div className="clearfix" style={{ marginTop: "20px" }}></div>
        <Row>
          <Col md={12}>
            <h2>projects</h2>
            
          </Col>
        </Row>
     
        <CardBody>
          
         <Row>
          <AddProject/>
         
          <div>
          <ProjectTable projects={projects} />
     
      </div>
        
        </Row>
   
      </CardBody>
      </Container>
    );
};
export default ProjectManagement;