import { useState } from "react"
import { getRandomNumber } from 'src/helpers'

export const useDice = () => {
    const [diceNumber, setDiceNumber] = useState<number | null>(null)

    const getNumber = () => setDiceNumber(getRandomNumber(1, 7))

    return {
        diceNumber,
        getNumber
    }
}