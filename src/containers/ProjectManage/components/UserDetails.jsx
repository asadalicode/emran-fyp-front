// import React ,{useState}from 'react';
// import { useTranslation } from 'react-i18next';
// import { Badge, Table } from 'reactstrap';
// import Panel from '@/shared/components/Panel';

// const header = [
//   { id: 0, title: '#' },
//   { id: 1, title: 'USERNAME' },
//   { id: 2, title: 'ROLE' },
//   { id: 3, title: 'FIRST NAME' },
//   { id: 4, title: 'LAST NAME' },
//   { id: 5, title: 'EMAIL' },
//   { id: 6, title: 'STATUS' },
  
// ];

// const rows = [
//   {
//     id: 1,
//     userName: 'Administrator',
//     userId: '123',
//     firstName: 'Admin',
//     lastName: 'User',
//     email: 'admin@gmail.com',
//     password: '123123',
//     role: 'admin',
//     status: 'active',
//   },
//   {
//     id: 2,
//     userName: 'EmaanUser',
//     userId: '124',
//     firstName: 'Emaan',
//     lastName: 'Saqib',
//     email: 'emaan@gmail.com',
//     password: '123123',
//     role: 'CEO',
//     status: 'active',
//   },
//   {
//     id: 3,
//     userName: 'AnsaUser',
//     userId: '125',
//     firstName: 'Ansa',
//     lastName: 'Azka',
//     email: 'ansa@gmail.com',
//     password: '123123',
//     role: 'Project Manager',
//     status: 'active',
//   },
//   {
//     id: 4,
//     userName: 'Humaira',
//     userId: '126',
//     firstName: 'Humaira',
//     lastName: 'shakeel',
//     email: 'humaira@gmail.com',
//     password: '123123',
//     role: 'Team Lead',
//     status: 'success',
//   },
//   {
//     id: 5,
//     userName: 'Ali',
//     userId: '127',
//     firstName: 'Ali',
//     lastName: 'mujtaba',
//     email: 'aliahmed@gmail.com',
//     password: '123123',
//     role: 'Team Member',
//     status: 'active',
//   },
//   {
//     id: 6,
//     userName: 'Salman',
//     userId: '128',
//     firstName: 'Salman',
//     lastName: 'khan',
//     email: 'salma@gmail.com',
//     password: '123123',
//     role: 'Team Member',
//     status: 'inactive',
//   },
// ];

// const UserDetails = () => {
//   const { t } = useTranslation('common');
  
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
//         <tbody lg={12}>
//           {rows.map(item => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.userName}</td>
//               <td>{item.userId}</td>
//               <td>{item.firstName}</td>
//               <td>{item.lastName}</td>
//               <td>{item.email}</td>
//               <td>{item.role}</td>
//               <td>{item.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Panel>
//   );
// };

// export default UserDetails;
