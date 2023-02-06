// import React, {useState} from 'react';
// import { useTranslation } from 'react-i18next';
// import { Badge, Table } from 'reactstrap';
// import Panel from '@/shared/components/Panel';


// const header = [
//   { id: 0, title: '#' },
//   { id: 1, title: 'ROLE ID' },
//   { id: 2, title: 'ROLE NAME' },
//   // { id: 3, title: 'ACTIONS' },
 
  
// ];

// // const rows = [
// //   {
// //     id: 1,
// //     roleId: '1',
// //     roleName: 'CEO',
    
   
// //   },
// //   {
// //     id: 2,
// //     roleId: '2',
// //     roleName: 'Project Manager',
    
// //   },
// //   {
// //     id: 3,
// //     roleId: '3',
// //     roleName: 'Team Lead',
   
// //   },
// //   {
// //     id: 4,
// //     roleId: '4',
// //     roleName: 'Team Member',
// //   }
// // ];

// const Roles= (user) => {
//   const { t } = useTranslation('common');
//   const [users, setusers] = useState([
//     {
//             id: 1,
//             roleId: '1',
//             roleName: 'CEO',
            
           
//          },
//           {
//           id: 2,
//             roleId: '2',
//             roleName: 'Project Manager',
            
//           },
    
// ]);
//   return (
//     <Panel lg={12} title={t('dashboard_commerce.recent_orders')}>
//       <Table responsive className="table--bordered">
//         <thead>
//           <tr>
//             {header.map(item => (
//               <th key={item.id}>{item.title}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {user.map(item => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.roleId}</td>
//               <td>{item.roleName}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Panel>
//   );
// };

// export default Roles;
