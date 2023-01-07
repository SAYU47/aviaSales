import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '../../redux/root-reduser'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector
