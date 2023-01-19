import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '@store/root-reduser'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector
