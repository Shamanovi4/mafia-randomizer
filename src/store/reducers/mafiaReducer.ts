import {
  SET_OPTION,
  ADD_PLAYER_NOTE,
  MafiaAction,
  MafiaState,
  SET_PLAYER,
  SET_ROUND,
  REMOVE_PLAYER_NOTE
} from '../types'

const initialState: MafiaState = {
  playersAmount: 10,
  donAmount: 1,
  mafiaAmount: 2,
  commissarAmount: 1,
  medicAmount: 0,
  player: 1,
  rounds: [],
  round: 0
}

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action: MafiaAction) => {
  switch (action.type) {
    case SET_OPTION:
      return {
        ...state,
        [action.payload.option]: action.payload.amount
      }
    case SET_PLAYER:
      return {
        ...state,
        player: action.payload.player
      }
    case SET_ROUND:
      return {
        ...state,
        round: action.payload.round
      }
    case ADD_PLAYER_NOTE:
      const rounds = [...state.rounds]

      rounds[action.payload.round]
          ? rounds[action.payload.round] = [...rounds[action.payload.round], {...action.payload.data}]
          : rounds[action.payload.round] = [{...action.payload.data}]

      return {
        ...state,
        rounds
      }
    case REMOVE_PLAYER_NOTE:
      return {
        ...state,
        rounds: [...state.rounds.slice(0, action.payload.round),
          state.rounds[action.payload.round].filter(note => !(note.player === action.payload.player && note.note === action.payload.note)),
          ...state.rounds.slice(action.payload.round + 1, state.rounds.length)]
      }
    default:
      return state
  }
}
