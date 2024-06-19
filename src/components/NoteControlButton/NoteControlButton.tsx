import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPlayerNote } from '../../store/actions/mafiaActions'
import type {} from 'redux-thunk/extend-redux'
import { RootState } from '../../store'
import {
  FaCheckDouble,
  FaRedhat,
  FaCrosshairs,
  FaStar,
  FaHeartPulse,
  FaThumbsUp,
  FaHandcuffs,
} from 'react-icons/fa6'
import classes from './NoteControlButton.module.scss'

interface Props {
  type: string
}

export const NoteControlButton: React.FC<Props> = (props) => {
  const dispatch = useDispatch()
  const player = useSelector((state: RootState) => state.player)
  const round = useSelector((state: RootState) => state.round)

  const setButtonClass = () => {
    switch (props.type) {
      case 'kill':
        return classes.black
      case 'sheriff':
        return classes.red
      case 'don':
        return classes.black
      case 'medic':
        return classes.red
    }
  }

  const buttonClass = setButtonClass()

  const setButtonIcon = () => {
    switch (props.type) {
      case 'vote':
        return <FaThumbsUp />
      case 'kick':
        return <FaHandcuffs />
      case 'kill':
        return <FaCrosshairs />
      case 'fouls':
        return <FaCheckDouble />
      case 'sheriff':
        return <FaStar />
      case 'don':
        return <FaRedhat />
      case 'medic':
        return <FaHeartPulse />
    }
  }

  const buttonIcon = setButtonIcon()

  const onClick = () => {
    dispatch(addPlayerNote({ round, data: { player, type: props.type } }))
  }

  return (
    <button
      className={classes.noteControlButton + ' ' + buttonClass}
      onClick={() => onClick()}
    >
      {buttonIcon}
    </button>
  )
}
