import React, { createContext } from "react";

interface Context {
    update: boolean,
    setUpdate: React.Dispatch<React.SetStateAction<boolean>>,
    value: Item,
    setValue: React.Dispatch<React.SetStateAction<Item>>,
}

export const Context = createContext<Context | null>(null)