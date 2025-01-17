import IMAGES from "../../../img/images";

export function MarketItem({item}: {item: MarketItem}) {
    return (
        <div className="market">
            <div className="market-img">
                <img src={item.image ? item.image : IMAGES.notImage} alt="" />
                {item.discount !== '' && <div className="discount">-{item.discount}%</div>}
            </div>
            <div className="info">
                <a href="#" className="item-name">{item.title}</a>
                <p className="info-price">Цена: {
                item.discount == '' 
                ? item.price 
                : <><s>{item.price}</s> {Math.round(+item.price * (1 - +item.discount / 100))}</>
                }</p>
            </div>
        </div>
    )
}