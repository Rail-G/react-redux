import { useSelector } from "react-redux"
import { MarketItem } from "./MarketItem"

export function MarketList() {
    const { marketList } = useSelector((state: {list: {marketList: MarketItem[]}}) => state.list)
    return (
        <div className="market-list">
            <ul>
                {marketList.map(el => (
                    <li key={el.id}>
                        <MarketItem item={el} />
                    </li>
                ))}
            </ul>
        </div>
    )
}