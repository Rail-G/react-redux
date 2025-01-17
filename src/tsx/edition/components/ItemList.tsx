import { useSelector } from "react-redux"
import { Item } from "./Item"

export function ItemList() {
    const {items} = useSelector((state: {item: {items: Item[]}}) => state.item)
    return (
        <div className='item-list'>
            <ul>
                {items.map((el) => (
                    !el.filtered 
                    &&
                    <li key={el.id}>
                        <Item item={el}/>
                    </li>
                    
                ))}
            </ul>
        </div>
        
    )
}