import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Round } from '../Round/Round'
import classes from './RoundsList.module.scss'

export const RoundsList: React.FC = () => {
  const roundsList = useSelector((state: RootState) => state.rounds)
  const roundsKeys = useSelector((state: RootState) =>
    Object.keys(state.rounds)
  )

  function renderRounds() {
    return roundsList.map((_, index) => {
      return (
        <Round
          key={String(index)}
          notes={[...roundsList[index]]}
          round={Number(roundsKeys[index])}
        />
      )
    })
  }

  return <ul className={classes.roundsList}>{renderRounds()}</ul>
}
