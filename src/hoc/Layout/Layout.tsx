import React from 'react'
import {Footer} from '../../components/Footer/Footer'
import {Timer} from '../../components/Timer/Timer'
import classes from './Layout.module.scss'

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = props => {
  return (
		<div className={classes.layout}>
			<header>
				<Timer />
			</header>		
			<main>
				{props.children}
			</main>
      <footer>
        <Footer />
      </footer>
		</div>
	)
}
