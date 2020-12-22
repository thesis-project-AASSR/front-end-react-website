const authInreducers = (saveduser = [], action) => {
    switch (action.type) {

     case "CHECK":
        return [...saveduser, action.payload];
      default:
        return saveduser;
    }
  };

  export default authInreducers;