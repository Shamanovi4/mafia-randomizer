import React, { useEffect, useRef, useState } from 'react'
import classes from './Timer.module.scss'
import { MdPlayArrow, MdReplay, MdPause } from 'react-icons/md'

export const Timer: React.FC = () => {
  const [time, setTime] = useState(60000)
  const [timerOn, setTimerOn] = useState(false)
  const [timerRunning, setTimerRunning] = useState(false)
  const [value, setValue] = useState(60)
  const warning = time <= 10000 && time !== 0 ? classes.warning : ''

  function Timer(this: any, callback: any, interval: number) {
    this.interval = interval

    this.start = () => {
      this.expected = Date.now() + this.interval
      this.timeout = setTimeout(this.round, this.interval)
    }

    this.stop = () => {
      clearTimeout(this.timeout)
    }

    this.round = () => {
      let drift = Date.now() - this.expected
      callback()
      this.expected += this.interval
      this.timeout = setTimeout(this.round, this.interval - drift)
    }
  }

  const timer = useRef(
    new (Timer as any)(() => setTime((prevTime) => prevTime - 10), 10)
  )

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
  }

  const changeTimer = (value: number) => {
    setTimerOn(false)
    setTime(value * 1000)
    setValue(value)
  }

  useEffect(() => {
    if (timerOn) {
      if (time > 0 && !timerRunning) {
        timer.current.start()
        setTimerRunning(true)
      } else if (time <= 0 && timerRunning) {
        timer.current.stop()
        setTimerOn(false)
        setTimerRunning(false)
      }
    } else {
      timer.current.stop()
      setTimerRunning(false)
    }
  }, [time, timer, timerOn, timerRunning])

  return (
    <div className={classes.timer}>
      <div className={classes.timerCounter + ' ' + warning}>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className={classes.timerOptions}>
        <button
          className={classes.timerOptionsButton}
          onClick={() => setTimerOn(!timerOn)}
        >
          {timerOn ? <MdPause /> : <MdPlayArrow />}
        </button>
        <button
          className={classes.timerOptionsButton}
          onClick={() => changeTimer(value)}
        >
          <MdReplay />
        </button>
        <input
          className={classes.timerOptionsTime}
          type='text'
          value={value}
          onChange={(event) => onChange(event)}
        />
        <button
          className={classes.timerOptionsButton + ' ' + classes.number}
          onClick={() => changeTimer(30)}
        >
          30
        </button>
        <button
          className={classes.timerOptionsButton + ' ' + classes.number}
          onClick={() => changeTimer(60)}
        >
          60
        </button>
      </div>
    </div>
  )
}
