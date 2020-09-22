import ProductItem from "./productitem";
import style from './productlist.module.css'

function ProductList({ productList }) {
    return (
        <div className={style.list}>
            {
                productList.map(val => {
                    return <ProductItem prod={val} />;
                })
            }
            <input type="button" value="Finalizar compra" />
        </div>
    )
}

export default ProductList