export const ADD_MARKET_ITEM = 'ADD_MARKET_ITEM'

export const addMarketItem = (value: MarketItem) => ({
    type: ADD_MARKET_ITEM,
    payload: value
})