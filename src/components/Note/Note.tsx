import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {removePlayerNote} from '../../store/actions/mafiaActions'
import classes from './Note.module.scss'
import {BsHandThumbsUp, BsCheckAll} from 'react-icons/bs'
import {BiExit} from 'react-icons/bi'
import {FiMinus, FiPlus} from 'react-icons/fi'
import {TbMedicalCross} from 'react-icons/tb'
import {GiSkullCrossedBones, GiSkullRing, GiAlliedStar} from 'react-icons/gi'

interface Props {
  round: number
  player: number
  note: string
}

export const Note: React.FC<Props> = props => {
  const dispatch = useDispatch()
  const [votes, setVotes] = useState(0)

  const setNote = () => {
    switch(props.note) {
      case 'Перевірений комісаром': return classes.commisarCheck
      case 'Перевірений доном': return classes.donCheck
      case 'Вилікуваний': return classes.medicHeal
    }
  }

  const note = setNote()

  const setIcon = () => {
    switch(props.note) {
      case 'Виставлений': return <BsHandThumbsUp />
      case 'Вигнаний': return <BiExit />
      case 'Вбитий': return <GiSkullCrossedBones />
      case 'По фолах': return <BsCheckAll />
      case 'Перевірений комісаром': return <GiAlliedStar />
      case 'Перевірений доном': return <GiSkullRing />
      case 'Вилікуваний': return <TbMedicalCross />
    }
  }

  const icon = setIcon()

  const addVote = () => {
    setVotes(votes + 1)
  }

  const removeVote = () => {
    if (votes - 1 >= 0) setVotes(votes - 1)
  }

  const onClick = () => {
    dispatch(removePlayerNote({round: props.round, player: props.player, note: props.note}))
  }

  return (
    <li className={classes.note}>
      <span className={classes.notePlayer}>{props.player}</span>
      <button className={classes.noteButton + ' ' + note} onClick={() => onClick()}>
        {icon}
      </button>
      {props.note === 'Виставлений'
          ? <div className={classes.noteVotes}>
              <button className={classes.noteVotesButton} onClick={removeVote}>
                <FiMinus />
              </button>
              <span className={classes.noteVotesAmount}>{votes}</span>
              <button className={classes.noteVotesButton} onClick={addVote}>
                <FiPlus />
              </button>
            </div>
          : ''
      }
    </li>
  )
}
