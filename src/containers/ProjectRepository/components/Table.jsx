import React,{useState} from "react";
import { Button, Table, Col, Row,  Badge,  } from 'reactstrap';
import Panel from '@/shared/components/Panel';
import {
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  CardBody,
  

  Container,
 
 

} from "reactstrap";
const ProjectTable=({ projects }) =>
{

    const [userUpdate, setUserUpdate] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [formModal, setformModal] = useState(false);
    const [editProjectData, seteditProjectData] = useState({});
    const [editProjectModal, seteditProjectModal] = useState(false);
    const [deleteProjectModal, setdeleteProjectModal] = useState(false);
    const [toDeleteId, settoDeleteId] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    let [userStatus, setprojectStatus] = useState("Add User");
    let [currentRole, setcurrentRole] = useState("");
    let [userRole, setuserRole] = useState("");
    const header = [
  { id: 0, title: '#' },
  { id: 1, title: 'USERNAME' },
  { id: 2, title: 'ROLE' },
  { id: 3, title: 'FIRST NAME' },
  { id: 4, title: 'LAST NAME' },
  { id: 5, title: 'EMAIL' },
  { id: 6, title: 'STATUS' },
  
];
    // const headers = [
    //     { name: "No#", sortable: true },
    //     { name: "Name", field: "userName", sortable: true },
    //     { name: "Description", field: "userId", sortable: true },
    //     { name: "Status", field: "role", sortable: false },
    //     { name: "Start Date", field: "firstName", sortable: false },
    //     { name: "End Date", field: "lastName", sortable: false },
    //     { name: "Assignees", field: "email", sortable: false },
    //     { name: "Actions", sortable: false },
    //   ];
    const toggleDeleteProjectModal = (id) => {
        setdeleteProjectModal(!deleteProjectModal);
        settoDeleteId(id);
      };
    const editProject = (project) => {
        seteditProjectData(project);
        seteditProjectModal(!editProjectModal);
      };
      const getBadgeColor = (userRole) => {
        if (userRole == "Project Manager") return "info";
        else if (userRole == "Team Lead") return "danger";
        else if (userRole == "CEO") return "warning";
        else return "success";
      };
      const ITEMS_PER_PAGE = 30;
      let i = 0;
  return (
    <div>
      <Panel lg={12} title={('dashboard_commerce.recent_orders')}>
     <Table responsive className="table--bordered">
        <thead>
        <tr>
                {header.map(project => (
              <th key={project.id}>{project.  title}</th>
            ))}
          </tr>
        </thead>
        
        <tbody>
          {projects.map((project) => (
            <tr key={project?._id}>
            <th scope="row">{++i}</th>
            <td>{project?.projectName}</td>
            <td>{project?.description}</td>
            <td>
              <Badge
                style={{ fontSize: "12px" }}
                color={getBadgeColor(project?.role)}
              >
                {project?.status}
              </Badge>
            </td>
            <td>{project?.startDate}</td>
            <td>{project?.endDate}</td>
            <td>{project?.Members}</td>

            <td className="text-right">
              <UncontrolledDropdown>
                <DropdownToggle
                  className="btn-icon-only text-light"
                  href="#pablo"
                  role="button"
                  size="sm"
                  color=""
                //   onClick={(e) => e.preventDefault()}
                >
                  <i className="fas fa-ellipsis-v" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem onClick={() => editProject(project)}>
                    Edit
                  </DropdownItem>

                  <DropdownItem
                    onClick={() =>
                      toggleDeleteProjectModal(project.projectId)
                    }
                  >
                    Delete
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </td>
          </tr>
          ))}
        </tbody>
      </Table>
      </Panel>
    </div>
  );
}

export default ProjectTable;
