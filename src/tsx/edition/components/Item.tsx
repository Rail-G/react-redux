import { useDispatch } from "react-redux"
import { deleteItem, filterItems } from "../redux/action"
import { useContext } from "react"
import { Context } from "../context/Context"

export function Item({item}: {item: Item}) {
    const { setUpdate, setValue } = useContext(Context)!
    const dispatch = useDispatch()
    const onDelete = () => {
        dispatch(deleteItem(item.id))
        setUpdate(false)
        setValue({id: '', text: '', price: '', filtered: false})
        dispatch(filterItems(''))
    }
    const onUpdate = () => {
        setUpdate(true)
        setValue({id: item.id, text: item.text, price: item.price, filtered: false})
        dispatch(filterItems(''))
    }
    return (
        <div className="item">
            <p>Товар: {item.text} Цена: {item.price}</p>
            <div className="item-btns">
                <button onClick={onUpdate} className="item-btn edit">Изменить</button>
                <button onClick={onDelete} className="item-btn delete">Удалить</button>
            </div>
        </div>
    )
}