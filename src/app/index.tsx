import Dice from 'src/components/Dice'
import * as Styled from 'src/app/styles'
import Card from 'src/components/Card'
import Field from 'src/components/Field'
import MoveList from 'src/components/MoveList'
import { useApp } from 'src/app/useApp'

const App = () => {
  const { viewedList, toggleViewList } = useApp()

  return (
    <Styled.AppContainer>
      <Field />
      <Styled.RightField>
        {viewedList ? <MoveList /> : <Dice />}
        <Styled.Button onClick={toggleViewList}>
          {viewedList ? 'Hide all moves' : 'Show all moves'}
        </Styled.Button>
      </Styled.RightField>
    </Styled.AppContainer>
  )
}

export default App
