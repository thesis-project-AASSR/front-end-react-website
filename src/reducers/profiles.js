const Profiles = (Profiles = [], action) => {
    switch (action.type) {
    
         case "AdminInfo":
        return action.payload;
        default:
        return Profiles;

    }
  };

  export default Profiles;