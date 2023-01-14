import styled from 'styled-components'
import { AllMovesButtonProps, CloseCardButtonProps } from 'src/app/types'

export const AppContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 70px;
`

export const RightField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
    position: absolute;
    bottom: 20px;
    right: 20px;
`

export const ButtonCloseCard = styled.button<CloseCardButtonProps>`
    display: ${props => props.isShow ? 'block' : 'none'};
    width: 60px;
    height: 60px;
    background: #e89595;
    box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
    border-radius: 18px;
    border: none;
    color: #ffffff;
    cursor: pointer;
    font-size: 12px;
    &:hover {
        background-color: #eb7c7c;
    }
`

export const Button = styled.button<AllMovesButtonProps>`
    width: 60px;
    height: 60px;
    // padding: 20px 40px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: ${props => props.viewedList ? '15px 15px 30px #bebebe, -15px -15px 30px #ffffff, inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff;' : '15px 15px 30px #bebebe, -15px -15px 30px #ffffff'};
    border: ${props => props.viewedList ? '8px solid rgba(255, 255, 255, 0.05)' : 'none'};
    border-radius: 18px;
    z-index: 1;
    transform: 0.5s;
    color: #fff;
    text-align: center;
    // border: none;
    font-size: 12px;
    cursor: pointer;
    // &::before {
    //     content: '';
    //     width: 0;
    //     height: 100%;
    //     border-radius: 8px;
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     background-image: linear-gradient(to right, #473186 0%, #ffbc00 100%);
    //     transition: .5s ease;
    //     display: block;
    //     opacity: 0.3;
    //     z-index: -1;
    //     filter: blur(15px);
    //    }
    // &:hover::before {
    //     width: 100%;
    //    }
`