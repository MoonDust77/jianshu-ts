import immutable, { fromJS } from 'immutable'

export interface BaseAction {
  type: string
}

export interface HeaderStore<T, K> extends immutable.Map<T, K> {
  focused: boolean
}
