import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setOption } from '../../store/actions/mafiaActions'
import type {} from 'redux-thunk/extend-redux'
import classes from './Option.module.scss'

interface Props {
  label: string
  optionType: string
  value: number
}

export const Option: React.FC<Props> = (props) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState<number>(props.value)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
    dispatch(
      setOption({
        option: props.optionType,
        amount: Number(event.target.value),
      })
    )
  }

  return (
    <div className={classes.option}>
      <p className={classes.optionName}>{props.label}</p>
      <input
        className={classes.optionAmount}
        type='text'
        value={value}
        onChange={(event) => onChange(event)}
      />
    </div>
  )
}
