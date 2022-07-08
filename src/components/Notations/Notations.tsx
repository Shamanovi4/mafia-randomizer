import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import type {} from 'redux-thunk/extend-redux'
import {Section} from '../../hoc/Section/Section'
import {RootState} from '../../store'
import {setPlayer, setRound} from '../../store/actions/mafiaActions'
import {NoteButton} from '../NoteButton/NoteButton'
import {RoundsList} from '../RoundsList/RoundsList'
import classes from './Notations.module.scss'
import {RiArrowLeftSFill, RiArrowRightSFill} from 'react-icons/ri'

export const Notations: React.FC = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState(1)
  const nextRound = useSelector((state: RootState) => state.rounds.length)
  const playersAmount = useSelector((state: RootState) => state.playersAmount)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
    dispatch(setPlayer({player: Number(event.target.value)}))
  }

  const onClick = () => {
    dispatch(setRound({round: nextRound}))
  }

  const removePlayerNumber = () => {
    if (value - 1 >= 1) {
      setValue(value - 1)
      dispatch(setPlayer({player: value - 1}))
    }
  }

  const addPlayerNumber = () => {
    if (value + 1 <= playersAmount) {
      setValue(value + 1)
      dispatch(setPlayer({player: value + 1}))
    }
  }

  return (
    <Section>
      <div className={classes.notations}>
        <div className={classes.controls}>
          <div className={classes.controlsPlayer}>
            <button className={classes.controlsPlayerButton} onClick={() => removePlayerNumber()}><RiArrowLeftSFill /></button>
            <input className={classes.controlsPlayerNumber} type='text' value={value} onChange={(event) => onChange(event)}></input>
            <button className={classes.controlsPlayerButton} onClick={() => addPlayerNumber()}><RiArrowRightSFill /></button>
          </div>
          <NoteButton label={'Виставлений'}/>
          <NoteButton label={'Вигнаний'}/>
          <NoteButton label={'Вбитий'}/>
          <NoteButton label={'По фолах'}/>
          <NoteButton label={'Перевірений комісаром'}/>
          <NoteButton label={'Перевірений доном'}/>
          <NoteButton label={'Вилікуваний'}/>
        </div>
        <RoundsList />
        <button className={classes.nextRoundButton} onClick={() => onClick()}>Наступне коло</button>
      </div>
    </Section>
  )
}
