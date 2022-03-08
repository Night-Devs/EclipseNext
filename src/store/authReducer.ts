import { Action } from '../structures/Action'

const defaultState = {
  token: '',
}

export const SetTokenActionType = 'SetToken'
type SetTokenAction = Action<typeof SetTokenActionType, string>

type Actions = SetTokenAction

export default function authReducer(state = defaultState, action: Actions) {
  switch (action.type) {
    case SetTokenActionType:
      return { ...state, token: action.payload }

    default:
      return state
  }
}
