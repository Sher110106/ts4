interface Userr {
    id: string;
    name: string;
  }
  
  type Userss = { [key: string]: Userr };
  
  const users: Userss = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  //records and maps
  users['']