// import { connect } from 'react-redux';
// import doStuff from '../actions/doStuff';
// import { SubmissionForm } from '../components/submission/SubmissionForm';

const initialState = {
  stuff: []
}

const stuff = (state = initialState, action) => {
  switch (action.type) {
    case 'DO_STUFF':
      return Object.assign({}, state, {
        stuff: [
          ...state.stuff,
          action.payload
        ]
      })
    default:
      return state
  }
}



export default stuff