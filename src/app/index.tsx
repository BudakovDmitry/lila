import Dice from 'src/components/Dice'
import * as Styled from 'src/app/styles'
import Card from 'src/components/Card'
import Field from 'src/components/Field'
import MoveList from 'src/components/MoveList'
import { useApp } from 'src/app/useApp'

const App = () => {
  const {
    viewedList,
    toggleViewList,
    handleViewCard,
    isOpenCard,
    card,
    closeCard,
  } = useApp()
  const cardTest = {
    id: 0,
    title: 'test',
    description: 'tsadgsfsg',
  }

  return (
    <Styled.AppContainer>
      <Field />
      <Styled.RightField>
        {viewedList ? (
          <MoveList />
        ) : isOpenCard ? (
          <Card card={card} closeCard={closeCard} />
        ) : (
          <Dice handleViewCard={handleViewCard} />
        )}
        {/* <Card card={cardTest} closeCard={closeCard} /> */}
        <Styled.Button onClick={toggleViewList}>
          {viewedList ? 'Hide all moves' : 'Show all moves'}
        </Styled.Button>
      </Styled.RightField>
    </Styled.AppContainer>
  )
}

export default App
