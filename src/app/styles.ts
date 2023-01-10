import styled from 'styled-components'

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

export const Button = styled.button`
    width: 350px;
    height: 80px;
    padding: 20px 40px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 1;
    transform: 0.5s;
    color: #fff;
    text-align: center;
    border: none;
    font-size: 30px;
    cursor: pointer;
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