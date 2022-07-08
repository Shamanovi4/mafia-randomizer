import {PlayerNoteData, OptionData, PlayerData, RoundData, RemovePlayerNoteData, REMOVE_PLAYER_NOTE} from './../types'
import {ThunkAction} from 'redux-thunk'
import {
  ADD_PLAYER_NOTE,
  MafiaAction,
  SET_OPTION,
  SET_PLAYER,
  SET_ROUND
} from '../types'
import {RootState} from '..'

export const setOption = (data: OptionData): ThunkAction<void, RootState, null, MafiaAction> => {
  return dispatch => {
    dispatch({
      type: SET_OPTION,
      payload: data
    })
  }
}

export const setPlayer = (data: PlayerData): ThunkAction<void, RootState, null, MafiaAction> => {
  return dispatch => {
    dispatch({
      type: SET_PLAYER,
      payload: data
    })
  }
}

export const addPlayerNote = (data: PlayerNoteData): ThunkAction<void, RootState, null, MafiaAction> => {
  return dispatch => {
    dispatch({
      type: ADD_PLAYER_NOTE,
      payload: data
    })
  }
}

export const removePlayerNote = (data: RemovePlayerNoteData): ThunkAction<void, RootState, null, MafiaAction> => {
  return dispatch => {
    dispatch({
      type: REMOVE_PLAYER_NOTE,
      payload: data
    })
  }
}

export const setRound = (data: RoundData): ThunkAction<void, RootState, null, MafiaAction> => {
  return dispatch => {
    dispatch({
      type: SET_ROUND,
      payload: data
    })
  }
}
