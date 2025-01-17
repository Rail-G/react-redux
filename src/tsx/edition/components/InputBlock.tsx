import { useDispatch } from "react-redux"
import { addItem, filterItems, updateItem } from "../redux/action"
import React, { useContext } from "react"
import { Context } from "../context/Context"
import { v4 as uuidv4 } from "uuid"

export function InputBlock() {
    const {value, setValue, update, setUpdate} = useContext(Context)!
    const dispatch = useDispatch()
    const onAdd = () => {
        if (value.text !== '' && value.price !== '') {
            dispatch(addItem({...value, id: uuidv4()}))
            setValue({id: '', text: '', price: '', filtered: false})
            dispatch(filterItems(''))
        }
    }
    const onUpdate = () => {
        dispatch(updateItem(value))
        setUpdate(false)
        setValue({id: '', text: '', price: '', filtered: false})
        dispatch(filterItems(''))
    }
    const onCancel = () => {
        setUpdate(false)
        setValue({id: '', text: '', price: '', filtered: false})
        dispatch(filterItems(''))
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => ({...prev, [e.target.name]: e.target.value}))
        if (e.target.name === 'text' && !update) {
            dispatch(filterItems(e.target.value))
        }
    }
    return (
        <div className="input__blocks">
            <div className="input__block">
                <input type="text" value={value.text} onChange={(e) => onChange(e)} placeholder="Text" name="text"/>
            </div>
            <div className="input__block">
                <input type="text" value={value.price} onChange={(e) => onChange(e)} placeholder="Price" name="price"/>
            </div>
            {update
            ? <div className="btns">
                <button onClick={onUpdate} className="input__btn save">Обновить</button>
                <button onClick={onCancel} className="input__btn cancel">Отмена</button>
            </div>
            : <button onClick={onAdd} className="input__btn save">Сохранить</button>}
        </div>
    )
}