const TaskTableData = () => {
    const header = [
      { id: 1, title: '#' },
      { id: 2, title: 'First Name' },
      { id: 3, title: 'Last Name' },
      { id: 4, title: 'Username' },
      { id: 5, title: 'Status' },
    ];
  
    const headerResponsive = [
      { id: 1, title: '#' },
      { id: 2, title: 'First Name' },
      { id: 3, title: 'Last Name' },
      { id: 4, title: 'Username' },
      { id: 5, title: 'Age' },
      { id: 7, title: 'Date' },
      { id: 8, title: 'Location' },
      { id: 9, title: 'Status' },
    ];
  
    const rows = [{
      id: 1,
      first: 'Maria',
      last: 'Morisson',
      username: '@dragon',
      status: 'success',
      badge: 'Work',
      age: '21',
      date: '1990/12/01',
      location: 'Melbourne',
      status_resp: 'success',
      badge_resp: 'In Progress',
    }, {
      id: 2,
      first: 'Bobby',
      last: 'Brown',
      username: '@boboby',
      status: 'warning',
      badge: 'Vacation',
      age: '35',
      date: '1992/12/01',
      location: 'Tokio',
      status_resp: 'primary',
      badge_resp: 'Completed',
    }, {
      id: 3,
      first: 'Alexander',
      last: 'Medinberg',
      username: '@medimedi',
      status: 'warning',
      badge: 'Vacation',
      age: '21',
      date: '1975/12/01',
      location: 'Moscow',
      status_resp: 'success',
      badge_resp: 'In Progress',
    }, {
      id: 4,
      first: 'Vera',
      last: 'Lori',
      username: '@lori',
      status: 'success',
      badge: 'Work',
      age: '44',
      date: '1978/12/01',
      location: 'Melbourne',
      status_resp: 'primary',
      badge_resp: 'Completed',
    }, {
      id: 5,
      first: 'Maria',
      last: 'Morisson',
      username: '@dragon',
      status: 'success',
      badge: 'Work',
      age: '25',
      date: '1992/12/01',
      location: 'London',
      status_resp: 'primary',
      badge_resp: 'Completed',
    }, {
      id: 6,
      first: 'Bobby',
      last: 'Brown',
      username: '@boboby',
      status: 'warning',
      badge: 'Vacation',
      age: '29',
      date: '1988/12/01',
      location: 'Rome',
      status_resp: 'primary',
      badge_resp: 'Completed',
    }, {
      id: 7,
      first: 'Alexander',
      last: 'Medinberg',
      username: '@medimedi',
      status: 'warning',
      badge: 'Vacation',
      age: '38',
      date: '1984/12/01',
      location: 'Vienna',
      status_resp: 'success',
      badge_resp: 'In Progress',
    }];
  
    const basicTableData = { tableHeaderData: header, tableHeaderResponsiveData: headerResponsive, tableRowsData: rows };
    return basicTableData;
  };
  
  export default TaskTableData;
  