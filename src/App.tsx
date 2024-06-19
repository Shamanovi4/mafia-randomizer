import React from 'react'
import { Layout } from './hoc/Layout/Layout'
import { GamePage } from './pages/GamePage/GamePage'

export const App: React.FC = () => {
  return (
    <Layout>
      <GamePage />
    </Layout>
  )
}
