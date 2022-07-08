import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addPlayerNote} from '../../store/actions/mafiaActions'
import type {} from 'redux-thunk/extend-redux'
import {RootState} from '../../store'
import classes from './NoteButton.module.scss'

interface Props {
  label: string
}

export const NoteButton: React.FC<Props> = props => {
  const dispatch = useDispatch()
  const player = useSelector((state: RootState) => state.player)
  const round = useSelector((state: RootState) => state.round)

  const onClick = () => {
    dispatch(addPlayerNote({round, data: {player, note: props.label}}))
  }

  return (
    <button className={classes.option} onClick={() => onClick()}>{props.label}</button>
  )
}
