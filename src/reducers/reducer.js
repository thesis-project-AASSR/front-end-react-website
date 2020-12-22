 const Items = (state = [], action) => {
    switch (action.type) {
      case "FETCH_ALL":
       return action.payload;
      case "CREATE":
        return [...state, action.payload];
      case "FETCH_PRICE":
        return action.payload;
      default:
        return state;
    }
  };

  export default Items;

