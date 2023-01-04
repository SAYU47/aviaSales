import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '../../redux/rootReduser'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector
