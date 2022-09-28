import { useCallback, useState } from "react";

function useDarkMode(initialValue) {
  const [state, setState] = useState(initialValue);
  return [
    state,
    useCallback(() => setState((current) => !current), [setState]),
  ];
}

export { useDarkMode };
