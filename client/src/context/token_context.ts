import React from "react";

interface TokenObject {
  value: string | null;
  set(a: string): void;
}

const TokenContext = React.createContext({
  value: "",
  set: (a: string) => {},
} as TokenObject);

export { TokenContext };
