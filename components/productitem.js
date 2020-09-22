import { useState } from "react"

const ProductItem = ({ prod }) => {
    const [quantity, setQuantity] = useState(0)

    const addQuantity = (e) => {
        const res = quantity + 1;
        setQuantity(res)
    }

    const removeQuantity = (e) => {
        const res = quantity - 1;
        setQuantity(res)
    }

    return (
        <>
            <div className="main-container">
                <div>
                    <img className="icon" src={prod.image} />
                </div>
                <div className="item-features">
                    <div className="description">
                        <h4>{prod.name}</h4>
                        <h6>${prod.price}</h6>
                    </div>
                    <div className="actions">
                        <div onClick={addQuantity}>
                            +
                        </div>
                        {quantity}
                        <div onClick={removeQuantity}>
                            -
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                .main-container {
                    display: flex;
                    flex-direction: row;
                    border: 1px solid black;
                    border-radius: 25px;
                    padding: 5px;
                    margin-bottom: 5px;
                }

                .main-container div {
                    padding: 5px;
                }

                .icon {
                    height: 100px;
                }

                .item-features {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .actions {
                    display: flex;
                    align-items: center;
                }
                .actions div {
                    padding: 0.5em;
                    background-color: black;
                    color: white;
                    margin: 0 1em 0 1em;
                }
                `}
            </style>
        </>
    )
}

export default ProductItem
