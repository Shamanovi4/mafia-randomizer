export const SET_OPTION = 'SET_OPTION'
export const SET_PLAYER = 'SET_PLAYER'
export const SET_ROUND = 'SET_ROUND'
export const NEXT_ROUND = 'NEXT_ROUND'
export const REMOVE_ROUND = 'REMOVE_ROUND'
export const ADD_PLAYER_NOTE = 'ADD_PLAYER_NOTE'
export const REMOVE_PLAYER_NOTE = 'REMOVE_PLAYER_NOTE'

export interface MafiaState {
  playersAmount: number
  donAmount: number
  mafiaAmount: number
  sheriffAmount: number
  medicAmount: number
  player: number
  rounds: any[][]
  round: number
}

export interface OptionData {
  option: string
  amount: number
}

export interface PlayerData {
  player: number
}

export interface PlayerNoteData {
  round: number
  data: {
    player: number
    type: string
  }
}

export interface RemovePlayerNoteData {
  round: number
  player: number
  type: string
}

export interface RoundData {
  round: number
}

interface SetOptionAction {
  type: typeof SET_OPTION
  payload: OptionData
}

interface SetPlayerAction {
  type: typeof SET_PLAYER
  payload: PlayerData
}

interface AddPlayerNoteAction {
  type: typeof ADD_PLAYER_NOTE
  payload: PlayerNoteData
}

interface RemovePlayerNoteAction {
  type: typeof REMOVE_PLAYER_NOTE
  payload: RemovePlayerNoteData
}

interface SetRound {
  type: typeof SET_ROUND
  payload: RoundData
}

interface NextRound {
  type: typeof NEXT_ROUND
  payload: RoundData
}

interface RemoveRound {
  type: typeof REMOVE_ROUND
}

export type MafiaAction =
  | SetOptionAction
  | SetPlayerAction
  | AddPlayerNoteAction
  | RemovePlayerNoteAction
  | SetRound
  | NextRound
  | RemoveRound
