import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setRound } from '../../store/actions/mafiaActions'
import { Note } from '../Note/Note'
import classes from './Round.module.scss'

interface Props {
  notes: any[]
  round: number
}

export const Round: React.FC<Props> = (props) => {
  const dispatch = useDispatch()
  const notesList = useSelector((state: RootState) => [
    ...state.rounds[props.round],
  ])
  const round = useSelector((state: RootState) => state.round)

  const onClick = () => {
    dispatch(setRound({ round: props.round }))
  }

  function renderNotes() {
    return Object.keys(notesList).map((_, index) => {
      return (
        <Note
          key={String(index)}
          player={notesList[index].player}
          type={notesList[index].type}
          round={props.round}
        />
      )
    })
  }

  return (
    <li
      className={
        props.round === round
          ? classes.round + ' ' + classes.active
          : classes.round
      }
      onClick={() => onClick()}
    >
      <ul className={classes.roundNotes}>{renderNotes()}</ul>
    </li>
  )
}
