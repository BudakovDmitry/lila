import Dice from 'src/components/Dice'
import * as Styled from 'src/app/styles'
import Card from 'src/components/Card'
import Field from 'src/components/Field'

const App = () => {
  return (
    <Styled.AppContainer>
      <Field />
      <Styled.RightField>
        <Dice />
        {/* <Card /> */}
        <Styled.Button>All moves</Styled.Button>
      </Styled.RightField>
    </Styled.AppContainer>
  )
}

export default App
