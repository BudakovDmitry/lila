import * as Styled from 'src/components/Card/styles'
import { CardType } from 'src/types'

type CardProps = {
  card: CardType
  closeCard: () => void
}

const Card = ({ card, closeCard }: CardProps) => {
  return (
    <>
      <Styled.CardBackground>
        <Styled.Card>
          <Styled.CardTitle>{card.title}</Styled.CardTitle>
          <Styled.CardDescription>{card.description}</Styled.CardDescription>
        </Styled.Card>
      </Styled.CardBackground>
      <Styled.CloseCardButton onClick={closeCard}>Close</Styled.CloseCardButton>
    </>
  )
}

export default Card
