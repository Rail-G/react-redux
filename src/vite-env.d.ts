/// <reference types="vite/client" />
/* eslint @typescript-eslint/no-explicit-any: 0 */

interface Action {
    type: string,
    payload: string,
    updateItem?: Item 
}

interface Item {
    id: string,
    text: string,
    price: string,
    filtered: boolean
}

interface MarketItem {
    id: string,
    title: string,
    price: string,
    discount: string,
    image: string,
}