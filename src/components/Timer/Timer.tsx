import React, {useEffect, useState} from 'react'
import classes from './Timer.module.scss'
import {MdPlayArrow, MdReplay, MdPause} from 'react-icons/md'

export const Timer: React.FC = () => {
  const [time, setTime] = useState(60000)
  const [timerOn, setTimerOn] = useState(false)
  const [value, setValue] = useState(60)

  const warning = time <= 10000 && time !== 0 ? classes.warning : ''

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
  }

  const changeTimer = (value: number) => {
    setTimerOn(false)
    setTime(value * 1000)
    setValue(value)
  }

  useEffect(() => {
    let interval: any = null

    if (timerOn) {
      if (time > 0) {
        interval = setInterval(() => {
          setTime(prevTime => prevTime - 1000)
        }, 1000)
      }
      else {
        setTimerOn(!timerOn)
      } 
    }
    else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [time, timerOn])

  return (
    <div className={classes.timer}>
      <div className={classes.timerCounter + ' ' + warning}>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div className={classes.timerOptions}>
        <button className={classes.timerOptionsButton} onClick={() => setTimerOn(!timerOn)}>
          {timerOn ? <MdPause /> : <MdPlayArrow />}
        </button>
        <button className={classes.timerOptionsButton} onClick={() => changeTimer(value)}>
          <MdReplay />
        </button>
        <input className={classes.timerOptionsTime} type='text' value={value} onChange={event => onChange(event)} />
        <button className={classes.timerOptionsButton + ' ' + classes.number} onClick={() => changeTimer(30)}>30</button>
        <button className={classes.timerOptionsButton + ' ' + classes.number} onClick={() => changeTimer(60)}>60</button>
      </div>
    </div>
  )
}
