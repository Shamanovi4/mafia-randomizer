import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removePlayerNote } from '../../store/actions/mafiaActions'
import {
  FaCheckDouble,
  FaRedhat,
  FaCrosshairs,
  FaStar,
  FaHeartPulse,
  FaThumbsUp,
  FaHandcuffs,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa6'
import classes from './Note.module.scss'

interface Props {
  round: number
  player: number
  type: string
}

export const Note: React.FC<Props> = (props) => {
  const dispatch = useDispatch()
  const [votes, setVotes] = useState(0)

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

  const addVote = () => {
    setVotes(votes + 1)
  }

  const removeVote = () => {
    if (votes - 1 >= 0) setVotes(votes - 1)
  }

  const removeNote = () => {
    dispatch(
      removePlayerNote({
        round: props.round,
        player: props.player,
        type: props.type,
      })
    )
  }

  return (
    <li className={classes.note}>
      <span className={classes.notePlayer}>{props.player}</span>
      <button
        className={classes.noteButton + ' ' + buttonClass}
        onClick={() => removeNote()}
      >
        {buttonIcon}
      </button>
      {props.type === 'vote' ? (
        <div className={classes.noteVotes}>
          <button className={classes.noteVotesButton} onClick={removeVote}>
            <FaChevronLeft />
          </button>
          <span className={classes.noteVotesAmount}>{votes}</span>
          <button className={classes.noteVotesButton} onClick={addVote}>
            <FaChevronRight />
          </button>
        </div>
      ) : (
        ''
      )}
    </li>
  )
}
