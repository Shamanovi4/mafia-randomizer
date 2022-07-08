import React from 'react'
import {Option} from '../Option/Option'
import classes from './OptionsList.module.scss'

export const OptionsList: React.FC = () => {
  return (
    <ul className={classes.optionsList}>
      <Option
        label={'Кількість гравців:'}
        optionType={'playersAmount'}
        value={10}
      />
      <Option
        label={'Дон:'}
        optionType={'donAmount'}
        value={1}
      />
      <Option
        label={'Мафія:'}
        optionType={'mafiaAmount'}
        value={2}
      />
      <Option
        label={'Комісар:'}
        optionType={'commisarAmount'}
        value={1}
      />
      <Option
        label={'Лікар:'}
        optionType={'medicAmount'}
        value={0}
      />
    </ul>
  )
}
