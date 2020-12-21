const authInreducers = (saveduser = [], action) => {
    switch (action.type) {
<<<<<<< HEAD
=======
     
>>>>>>> 2f299135a1ed1ae0763017f1159069fb19e7db48
     case "CHECK":
        return [...saveduser, action.payload];
      default:
        return saveduser;
    }
  };
<<<<<<< HEAD
=======
  
>>>>>>> 2f299135a1ed1ae0763017f1159069fb19e7db48
  export default authInreducers;