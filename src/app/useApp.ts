import { useState } from "react"

export const useApp = () => {
    const [viewedList, setViewedList] = useState(false);

    const toggleViewList = () => setViewedList(prev => !prev)

    return {
        viewedList,
        toggleViewList
    }
}