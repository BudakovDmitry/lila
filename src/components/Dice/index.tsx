import { useDice } from 'src/components/Dice/useDice'
import * as Styled from 'src/components/Dice/styles'
import Loader from 'src/components/Loader'

const Dice = () => {
  const { diceNumber, getNumber } = useDice()

  return (
    <Styled.DiceContainer>
      <Styled.Card>
        <Styled.Number>{diceNumber ? diceNumber : <Loader />}</Styled.Number>
      </Styled.Card>
      <Styled.Button onClick={getNumber}>Click</Styled.Button>
    </Styled.DiceContainer>
  )
}

export default Dice
