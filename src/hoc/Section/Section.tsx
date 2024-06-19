import React from 'react'
import classes from './Section.module.scss'

interface Props {
  children: React.ReactNode
}

export const Section: React.FC<Props> = (props) => {
  return (
    <section className={classes.section}>
      <div className={classes.sectionWrapper}>{props.children}</div>
    </section>
  )
}
