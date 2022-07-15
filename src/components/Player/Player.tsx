import React, {useState} from 'react'
import classes from './Player.module.scss'
import {FiMinus, FiPlus} from 'react-icons/fi'
import {MdArrowRightAlt} from 'react-icons/md'

interface Props {
  number: number
  role: string
  slot: any
  compactMode: boolean
}

export const Player: React.FC<Props> = props => {
  const [fouls, setFouls] = useState<number>(0)
  const [value, setValue] = useState<string>('')
  const active = props.slot !== null ? classes.active : ''
  const compact = props.compactMode ? classes.compact : ''

  const setRole = () => {
    switch(props.role) {
      case 'Мирний': return classes.peaceful
      case 'Мафія': return classes.mafia
      case 'Дон': return classes.don
      case 'Комісар': return classes.commisar
      case 'Лікар': return classes.medic
    }
  }

  const role = setRole()

  const removeFoul = () => {
    if (fouls - 1 >= 0) setFouls(fouls - 1)
  }

  const addFoul = () => {
    if (fouls + 1 <= 4) setFouls(fouls + 1)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(String(event.target.value))
  }

  return (
    <li className={classes.player + ' ' + compact + ' ' + active}>
      {props.slot !== null
          ? <div className={classes.playerSlot + ' ' + active}>
              <span className={classes.playerSlotNumber}>{props.number}</span>
              <span className={classes.playerSlotIcon}>
                <MdArrowRightAlt />
              </span>
              <span className={classes.playerSlotNumber}>{props.slot}</span>
            </div>
          : <div className={classes.playerSlot}>
              <span className={classes.playerSlotNumber}>{props.number}</span>
            </div>
      }
      {!props.compactMode
          ? <input className={classes.playerInput} type="text" value={value} onChange={event => onChange(event)} placeholder={'...'} />
          : ''
      }
      <span className={classes.playerRole + ' ' + role}>{props.role}</span>
      <span className={classes.playerFouls}>
        <button className={classes.playerFoulsButton} onClick={removeFoul}>
          <FiMinus />
        </button>
        <span className={classes.playerFoulsAmount}>{fouls}</span>
        <button className={classes.playerFoulsButton} onClick={addFoul}>
          <FiPlus />
        </button>
      </span>
    </li>
  )
}
