import { render, RenderOptions } from '@testing-library/react'
import { FC, ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import { store } from '../store';

const StoreRouterProvider: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  )
};

const StoreProvider: FC = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
};

const RouterProvider: FC = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: StoreRouterProvider, ...options });

const storeRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: StoreProvider, ...options });

const routerRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: RouterProvider, ...options })

export * from '@testing-library/react'
export {
  customRender as render,
  storeRender,
  routerRender
};
