import TokenDTO from '../dtos/TokenDTO'
import { Action } from '../types/Action'

interface TokenState {
  accessToken: string,
  refreshToken: string,
  expiresIn: number,
  tokenType: string,
}

const defaultState = {
  accessToken: '',
  refreshToken: '',
  expiresIn: 0,
  tokenType: '',
}

export const SetTokenActionType = 'SetToken'
export type SetTokenAction = Action<typeof SetTokenActionType, Exclude<TokenDTO, 'scope'>>

export function setTokenAction(token: Exclude<TokenDTO, 'scope'>): SetTokenAction {
  return { type: 'SetToken', payload: token }
}

type Actions = SetTokenAction

export default function tokenReducer(state: TokenState = defaultState, action: Actions): TokenState {
  switch (action.type) {
    case SetTokenActionType:
      return { 
        ...state,
        accessToken: action.payload!.accessToken,
        refreshToken: action.payload!.refreshToken,
        expiresIn: new Date().valueOf() + action.payload!.expiresIn,
        tokenType: action.payload!.tokenType,
      }

    default:
      return state
  }
}
