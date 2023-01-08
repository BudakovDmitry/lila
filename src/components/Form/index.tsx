import * as Styled from 'src/components/Form/styles'

type FormTypeProps = {
  viewed: boolean
}

const Form = ({ viewed }: FormTypeProps) => {
  return (
    <Styled.Form viewed={viewed ? 'visible' : 'hidden'}>
      <Styled.Input type="text" pattern="\d*" />
      <Styled.Button>Open card</Styled.Button>
    </Styled.Form>
  )
}

export default Form
