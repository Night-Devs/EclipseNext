import { Action } from '../types/Action'

interface AuthState {
  token: string
}

const defaultState = {
  token: '',
}

export const SetTokenActionType = 'SetToken'
export type SetTokenAction = Action<typeof SetTokenActionType, string>

export function setTokenAction(token: string): SetTokenAction {
  return {type: 'SetToken', payload: token}
}

type Actions = SetTokenAction

export default function authReducer(state: AuthState = defaultState, action: Actions): AuthState {
  switch (action.type) {
    case SetTokenActionType:
      return { ...state, token: action.payload! }

    default:
      return state
  }
}
