import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type {} from 'redux-thunk/extend-redux'
import { Section } from '../../hoc/Section/Section'
import { RootState } from '../../store'
import {
  setPlayer,
  nextRound,
  removeRound,
} from '../../store/actions/mafiaActions'
import { NoteControlButton } from '../NoteControlButton/NoteControlButton'
import { RoundsList } from '../RoundsList/RoundsList'
import classes from './Notations.module.scss'
import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri'

export const Notations: React.FC = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState(1)
  const nextRoundNumber = useSelector((state: RootState) => state.rounds.length)
  const playersAmount = useSelector((state: RootState) => state.playersAmount)

  const setPlayerNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
    dispatch(setPlayer({ player: Number(event.target.value) }))
  }

  const setNextRound = () => {
    dispatch(nextRound({ round: nextRoundNumber }))
  }

  const removeLastRound = () => {
    dispatch(removeRound())
  }

  const removePlayerNumber = () => {
    if (value - 1 >= 1) {
      setValue(value - 1)
      dispatch(setPlayer({ player: value - 1 }))
    }
  }

  const addPlayerNumber = () => {
    if (value + 1 <= playersAmount) {
      setValue(value + 1)
      dispatch(setPlayer({ player: value + 1 }))
    }
  }

  return (
    <Section>
      <div className={classes.notations}>
        <div className={classes.noteControls}>
          <div className={classes.noteControlsPlayer}>
            <button
              className={classes.noteControlsPlayerButton}
              onClick={() => removePlayerNumber()}
            >
              <RiArrowLeftSFill />
            </button>
            <input
              className={classes.noteControlsPlayerNumber}
              type='text'
              value={value}
              onChange={(event) => setPlayerNumber(event)}
            ></input>
            <button
              className={classes.noteControlsPlayerButton}
              onClick={() => addPlayerNumber()}
            >
              <RiArrowRightSFill />
            </button>
          </div>
          <NoteControlButton type={'vote'} />
          <NoteControlButton type={'kick'} />
          <NoteControlButton type={'kill'} />
          <NoteControlButton type={'don'} />
          <NoteControlButton type={'sheriff'} />
          <NoteControlButton type={'medic'} />
          <NoteControlButton type={'fouls'} />
        </div>
        <RoundsList />
        <div className={classes.roundControls}>
          <button
            className={classes.roundControlsButton}
            onClick={() => setNextRound()}
          >
            Наступне коло
          </button>
          <button
            className={classes.roundControlsButton}
            onClick={() => removeLastRound()}
          >
            Видалити коло
          </button>
        </div>
      </div>
    </Section>
  )
}
