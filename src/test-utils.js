import { useState } from "react";
import { render, cleanup } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  ThemeContext,
  themes,
} from "./components/dynamic-context/contexts/theme";

const AllProviders = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export function withStoreProvider(store) {
  return function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  };
}

export const setupApiStore = (api, extraReducers, withoutListeners) => {
  const getStore = () =>
    configureStore({
      reducer: { [api.reducerPath]: api.reducer, ...extraReducers },
      middleware: (gdm) =>
        gdm({ serializableCheck: false, immutableCheck: false }).concat(
          api.middleware
        ),
    });

  const initialStore = getStore();
  const refObj = {
    api,
    store: initialStore,
    wrapper: withStoreProvider(initialStore),
  };
  
  let cleanupListeners;

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    const store = getStore();
    refObj.store = store;
    refObj.wrapper = withStoreProvider(store);

    if (!withoutListeners) {
      cleanupListeners = setupListeners(store.dispatch);
    }
  });

  // eslint-disable-next-line no-undef
  afterEach(() => {
    cleanup();

    if (!withoutListeners) {
      cleanupListeners();
    }

    refObj.store.dispatch(api.util.resetApiState());
  });

  return refObj;
};

export const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });