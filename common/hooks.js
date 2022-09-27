import { useCallback, useState } from "react";

const getInitialValue = (usersInitialState) => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const mql = globalThis.matchMedia
    ? globalThis.matchMedia(preferDarkQuery)
    : {};
  const isColorSchemeQuerySupported = mql.media === preferDarkQuery;
  return isColorSchemeQuerySupported ? mql.matches : usersInitialState;
};

function useDarkMode(initialValue) {
  const [state, setState] = useState(getInitialValue(initialValue));
  return [
    state,
    useCallback(() => setState((current) => !current), [setState]),
  ];
}

export { useDarkMode };
