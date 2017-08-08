const initialState = {
  quests: []
}

const quest = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUEST_SUCCESS":
      return Object.assign({}, state, {
        quests: action.payload.items
      })
    default:
      return state
  }
}

export default quest