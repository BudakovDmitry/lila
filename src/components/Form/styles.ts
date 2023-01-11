import styled from 'styled-components'
import { FormProps } from 'src/components/Form/types'

export const Form = styled.form<FormProps>`
    display: flex;
    flex-direction: column;
    gap: 30px;
    visibility: ${props => props.viewed}
`

export const Input = styled.input.attrs({ maxLength: '2' })`
    width: 80px;
    height: 80px;
    margin: 0 auto;
    border: none;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size: 52px;
    padding: 10px;
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    &:focus {
        outline: none;
        box-shadow: 0px 0px 36px 15px rgba(71, 49, 134, 0.2);
    }
`

export const Button = styled.button`
position: relative;
width: 160px;
height: 80px;
background: rgba(71,49,134, 0.3);
background: linear-gradient(90deg, rgba(71,49,134, 0.3) 0%, rgba(255,188,0, 0.3) 100%);
backdrop-filter: blur(10px);
box-shadow: 0 5px 15px rgba(71,49,134, 0.3);
border-radius: 8px;
z-index: 1;
transform: 0.5s;
color: #fff;
text-align: center;
border: none;
font-size: 22px;
cursor: pointer;
margin: 0 auto;
&::before {
    content: '';
    width: 0;
    height: 100%;
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #473186 0%, #ffbc00 100%);
    transition: .5s ease;
    display: block;
    opacity: 0.3;
    z-index: -1;
    filter: blur(15px);
}
&:hover::before {
    width: 100%;
}
`

export const ErrorText = styled.p`
  width: 350px;
  margin: 0 auto;
  padding: 5px 0 0 0;
  color: red;
  font-size: 12px;
  @media screen and (max-width: 430px) {
    width: 256px;
  }
`