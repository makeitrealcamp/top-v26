const initialState = {

}

const ramReducer = (state, action) => {
  switch (action.type) {
    case "getAllCharacters":
      return { ...state, name: action.payload };
    case "updateLastName":
      return { ...state, lastName: action.payload };
    case "updateAge":
      return { ...state, age: action.payload };
    default:
      return state;
  }
}
