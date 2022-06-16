export interface ActionType<P = undefined, T = string> {
  type: T,
  payload: P
}
