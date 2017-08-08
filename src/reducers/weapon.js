const initialState = {
  weapons: []
}

const weapon = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WEAPON_SUCCESS":
      return Object.assign({}, state, {
        weapons: action.payload.weapons
      })
    default:
      return state
  }
}

export default weapon