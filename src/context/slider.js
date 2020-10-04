import React, { createContext, useReducer, useContext } from 'react';

const initialSliderState = {
  visible: false,
  slider: null,
};

function sliderReducer(state, action) {
  switch (action.type) {
    case 'SET':
      return { ...state, slider: action.slider };
    case 'TOGGLE':
      return { ...state, visible: !state.visible };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const SliderStateContext = createContext();
const SliderDispatchContext = createContext();

export function SliderProvider({ children }) {
  const [state, dispatch] = useReducer(sliderReducer, initialSliderState);

  return (
    <SliderStateContext.Provider value={state}>
      <SliderDispatchContext.Provider value={dispatch}>
        {children}
      </SliderDispatchContext.Provider>
    </SliderStateContext.Provider>
  );
}

export function useSliderState() {
  const context = useContext(SliderStateContext);
  if ( !context ) {
    throw new Error(`Cannot find SliderProvider`);
  }
  return context;
}

export function useSliderDispatch() {
  const context = useContext(SliderDispatchContext);
  if (!context) {
    throw new Error(`Cannot find SliderProvider`);
  }
  return context;
}