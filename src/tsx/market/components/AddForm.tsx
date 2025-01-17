import React, { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { addMarketItem } from "../redux/action"
import { v4 as uuidv4 } from 'uuid'

export function AddForm() {

    const [isChecked, setChecked] = useState<boolean>(false)
    const [value, setValue] = useState({title: '', price: '', discount: ''})
    const ref = useRef<HTMLInputElement | null>(null)
    const dispatch = useDispatch()

    const onChangeChexbox = () => {
        setChecked(prev => !prev)
        setValue(prev => ({...prev, discount: ''}))
    }
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setValue(prev => ({...prev, [e.target.name]: e.target.value}))
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (ref.current!.files!.length) {
            const file = new FileReader()
            file.onload = () => {
                dispatch(addMarketItem({...value, id: uuidv4(), image: file.result as string}))
            }
            file.readAsDataURL(ref.current!.files![0])
        } else {
            dispatch(addMarketItem({...value, id: uuidv4(), image: ''}))
        }
        ref.current!.value = ''
        setValue({title: '', price: '', discount: ''})
        setChecked(false)
        
    }
    return (
        <form onSubmit={onSubmit}>
            <h4>Заполните данные продаваемого товара</h4>
            <div className="form-row">
                <input type="text" placeholder="Название товара" name="title" value={value.title} onChange={onChangeInput} required/>
            </div>
            <div className="form-row">
                <input type="number" placeholder="Цена товара" name="price" value={value.price} onChange={onChangeInput} required min="0"/>
            </div>
            <div className="form-row">
                <h3>Выберите фото товара</h3>
                <input type="file" ref={ref} accept="image/*" style={{'display': 'none'}} id='file'/>
                <label htmlFor="file">
                    <div className="file-btn">Выберите изображения</div>
                </label>
            </div>
            <div className="form-row">
                <h3>Имеется скидка?</h3>
                <input type="checkbox" style={{'display': 'none'}} checked={isChecked} onChange={onChangeChexbox} id='chexbox'/>
                <label htmlFor="chexbox">
                    <div className={isChecked ? "chexbox-btn checked" : "chexbox-btn"}></div>
                </label>
            </div>
            <div className={isChecked ? 'form-row' : "form-row not-active"}>
                { isChecked 
                ? <input type="number" placeholder="Размер скидки в %" name="discount" value={value.discount} onChange={onChangeInput} min="0" max='100'/>
                : <input type="text" placeholder="Размер скидки в %" value={value.discount} readOnly/>
                }
            </div>
            <button type="submit">Добавить товар</button>
        </form>
    )
}