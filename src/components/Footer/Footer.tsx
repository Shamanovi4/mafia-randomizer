import React from 'react'
import classes from './Footer.module.scss'

export const Footer: React.FC = () => {

  return (
    <div className={classes.footer}>
      <a className={classes.footerLink} target='_blank' rel='noreferrer' href='https://docs.google.com/document/d/1YSIlKIHziDbruy13KUJQM6DkuBzVt2cJtJ34OoWOPA4/edit?usp=sharing'>Правила</a>
    </div>
  )
}
