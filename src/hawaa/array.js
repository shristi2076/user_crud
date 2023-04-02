let users = [
    {
      name: "alex Doe",
      age: 14
    },
    {
      name: "Elon Doe",
      age: 27
    },
    {
      name: "John Doe",
      age: 17
    }
  ];
      
  users.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  
  console.log(users);