import React from 'react'
import {Notations} from '../../components/Notations/Notations'
import {Players} from '../../components/Players/Players'
import {Page} from '../../hoc/Page/Page'

export const GamePage: React.FC = () => {
  return (
    <Page>
      <Players />
      <Notations />
    </Page>
  )
}
