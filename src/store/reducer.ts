export interface IState {
  isModalOpen: boolean;
}

export enum ActionEnum {
  TOGGLE_MODAL_WINDOW = 'TOGGLE_MODAL_WINDOW',
}

export type TAction = { type: ActionEnum.TOGGLE_MODAL_WINDOW; payload: boolean };

export const initialState: IState = {
  isModalOpen: false,
};

export const reducer = (state: IState, action: TAction) => {
  const { type, payload } = action;
  switch (type) {
    case ActionEnum.TOGGLE_MODAL_WINDOW:
      return { ...state, isModalOpen: payload };

    default:
      return state;
  }
};
