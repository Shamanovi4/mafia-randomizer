import React, {useMemo, useState} from 'react'
import {Player} from '../Player/Player'
import {useSelector} from 'react-redux'
import {RootState} from '../../store'
import type {} from 'redux-thunk/extend-redux'
import classes from './Players.module.scss'
import {OptionsList} from '../OptionsList/OptionsList'
import {Section} from '../../hoc/Section/Section'

function randomPlayers(playersAmount: number, donAmount: number, mafiaAmount: number, commissarAmount: number, medicAmount: number) {
  const playersList = new Array(playersAmount)
  const playersWithoutRoles = new Array(playersAmount)

  for (let i = 0; i < playersAmount; i++) {
    playersWithoutRoles[i] = i
    playersList[i] = 'Мирний'
  } 

  for (let i = 1; i <= playersAmount; i++) {
    const playerId = Math.floor(Math.random() * playersWithoutRoles.length)

    if (donAmount >= 1) {
      playersList[playersWithoutRoles[playerId]] = 'Дон'
      donAmount--
    }
    else if (mafiaAmount >= 1) {
      playersList[playersWithoutRoles[playerId]] = 'Мафія'
      mafiaAmount--
    }
    else if (commissarAmount >= 1) {
      playersList[playersWithoutRoles[playerId]] = 'Комісар'
      commissarAmount--
    }
    else if (medicAmount >= 1) {
      playersList[playersWithoutRoles[playerId]] = 'Лікар'
      medicAmount--
    }

    playersWithoutRoles.splice(playerId, 1)
  }

  return playersList
}

function randomSlots(playersAmount: number) {
  const slotsList = new Array(playersAmount)
  const playersList = new Array(playersAmount)

  for (let i = 0; i < playersAmount; i++) {
    playersList[i] = i
  } 

  for (let i = 0; i < playersAmount; i++) {
    const playerId = Math.floor(Math.random() * playersList.length)

    if (playersAmount > 2) {
      slotsList[i] = playersList[playerId] + 1
      playersList.splice(playerId, 1)
    }
    else {
      slotsList[i] = playersList[i + 1]
      slotsList[i + 1] = playersList[i]
      playersList.splice(playerId, 2)
    }
  }

  return slotsList
}

export const Players: React.FC = () => {
  const [shouldRenderPlayers, setShouldRenderPlayers] = useState<boolean>(false)
  const [shouldRenderSlots, setShouldRenderSlots] = useState<boolean>(false)
  const playersAmount = useSelector((state: RootState) => state.playersAmount)
  let donAmount = useSelector((state: RootState) => state.donAmount)
  let mafiaAmount = useSelector((state: RootState) => state.mafiaAmount)
  let commissarAmount = useSelector((state: RootState) => state.commissarAmount)
  let medicAmount = useSelector((state: RootState) => state.medicAmount)

  const playersList = useMemo(() => randomPlayers(playersAmount, donAmount, mafiaAmount, commissarAmount, medicAmount
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    ), [playersAmount, donAmount, mafiaAmount, commissarAmount, medicAmount, shouldRenderPlayers])
  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  const slotsList = useMemo(() => randomSlots(playersAmount), [playersAmount, shouldRenderSlots])

  function renderPlayers() {
    return playersList.map((player, index) => {
      return <Player key={String(index)} number={index + 1} role={playersList[index]} slot={shouldRenderSlots ? slotsList[index] : null} />
    })
  }

  return (
    <Section>
      <div className={classes.players}>
        <div className={classes.playersControls}>
          <button className={classes.playersControlsButton} onClick={() => setShouldRenderPlayers(!shouldRenderPlayers)}>Генерація ролей</button>
          <button className={classes.playersControlsButton} onClick={() => setShouldRenderSlots(!shouldRenderSlots)}>Зміна слотів</button>
        </div>
        <div className={classes.flexWrapper}>
          <div className={classes.flexWrapperItem}>
            <ul className={classes.playersList}>
              {shouldRenderPlayers ? renderPlayers() : ''}
            </ul>
          </div>
          <div className={classes.flexWrapperItem}>
            <OptionsList />
          </div>
        </div>
      </div>
    </Section>
  )
}
