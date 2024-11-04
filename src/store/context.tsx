import React, { createContext, FC, useContext, useReducer } from 'react';
import { ActionEnum, initialState, IState, reducer } from '@/store/reducer.ts';

export interface IGlobalContext extends IState {
  isModalOpen: boolean;
  toggleModal: (payload: boolean) => void;
}

interface IGlobalProviderProps {
  children: React.ReactNode;
}

const GlobalContext = createContext(initialState as IGlobalContext);

export const GlobalProvider: FC<IGlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleModal = (payload: boolean) => {
    dispatch({ type: ActionEnum.TOGGLE_MODAL_WINDOW, payload });
  };

  const value: IGlobalContext = {
    isModalOpen: state.isModalOpen,
    toggleModal,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('Must be wrapped in a TabsProvider');
  }

  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export default useGlobalContext;
