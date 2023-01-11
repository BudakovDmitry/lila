import { useDice } from 'src/components/Dice/useDice'
import * as Styled from 'src/components/Dice/styles'
import Loader from 'src/components/Loader'
import Form from 'src/components/Form'

const Dice = ({ handleViewCard }) => {
  const { diceNumber, getNumber, viewedForm } = useDice()

  return (
    <Styled.DiceContainer>
      <Styled.Card>
        <Styled.Number>{diceNumber ? diceNumber : <Loader />}</Styled.Number>
      </Styled.Card>
      <Styled.Button onClick={getNumber}>Click</Styled.Button>
      <Form viewed={viewedForm} handleViewCard={handleViewCard} />
    </Styled.DiceContainer>
  )
}

export default Dice
