const authreducers = (user = [], action) => {
    switch (action.type) {
<<<<<<< HEAD
=======
     
>>>>>>> 2f299135a1ed1ae0763017f1159069fb19e7db48
     case "ADD":
        return [...user, action.payload];
      default:
        return user;
    }
  };
<<<<<<< HEAD
=======
  
>>>>>>> 2f299135a1ed1ae0763017f1159069fb19e7db48
  export default authreducers;