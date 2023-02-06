import React from "react";
import { Button, Table, Col, Row, Card, Badge } from "reactstrap";
import Panel from "@/shared/components/Panel";
import { async } from "@firebase/util";
import { useState, useEffect } from "react";
import "../../../App.css";
// import {db} from '../../../firebase'
// import {collection,addDoc,getDocs,updateDoc,doc,deleteDoc} from "@firebase/firestore"
import UserRoleService from "../../../services/rolesService";

const RolesTable = () => {
  const [newName, setNewName] = useState("");
  const [newId, setNewId] = useState("");
  const [roles, setroles] = useState([]);

  useEffect(() => {
    getroles();
  }, []);

  const getroles = async () => {
    setroles(UserRoleService.getAllRoles());
  };
  // const deleteHandler = async (id) => {
  //   const res = await UserRoleService.deleteRole(id);
  //   console.log(res);
  //   getroles();
  // };

  return (
    <div>
      {/* <Panel lg={12} title={"dashboard_commerce.recent_orders"}> */}
      <Table responsive className="table--bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {/* {roles.map((role) =>
            role.role_name == "admin" ? (
              <></>
            ) : (
              <tr>
                <td>{role.role_id}</td>
                <td>{role.role_name}</td>
                <td>
                  <Button
                    onClick={() => deleteHandler(role.id)}
                    color="danger"
                    size="sm"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            )
          )} */}

          {Object.keys(roles).map((id, index) => {
            return roles[id].role_name == "admin" ? (
              <></>
            ) : (
              <tr>
                <td>{index + 1}</td>
                <td>{roles[id].role_name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* </Panel> */}
    </div>
  );
};

export default RolesTable;
