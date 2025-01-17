import { Provider } from "react-redux";
import { AddForm } from "./AddForm";
import { store } from "../redux/store";
import { MarketList } from "./MarketList";

export function MarketPage() {
    return (
        <Provider store={store}>
            <AddForm />
            <MarketList />
        </Provider>
    )
}