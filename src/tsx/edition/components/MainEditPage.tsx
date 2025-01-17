import { ContextProvider } from "../provider/ContextProvider";
import { InputBlock } from "./InputBlock";
import { ItemList } from "./ItemList";

export function MainEditPage() {
    return (
        <ContextProvider>
            <div className="container">
                <InputBlock />
                <ItemList />
            </div>
        </ContextProvider>
    )
}