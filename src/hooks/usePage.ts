import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

export const usePage = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()

  return {
    dispatch
  }
}
