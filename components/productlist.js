import ProductItem from "./productitem";
import style from './productlist.module.css'

const ProductList = () => {
    const data = [{
        name: "prod1",
        price: 100,
        image: 'https://s1.eestatic.com/2020/01/22/cocinillas/recetas/pasta-y-arroz/Espaguetis-Salmon-Queso_Philadelphia-Pasta_y_arroz_461715202_143042655_1706x960.jpg'
    }, {
        name: "prod2",
        price: 100,
        image: 'https://s1.eestatic.com/2020/01/22/cocinillas/recetas/pasta-y-arroz/Espaguetis-Salmon-Queso_Philadelphia-Pasta_y_arroz_461715202_143042655_1706x960.jpg'
    }, {
        name: "prod3",
        price: 100,
        image: 'https://s1.eestatic.com/2020/01/22/cocinillas/recetas/pasta-y-arroz/Espaguetis-Salmon-Queso_Philadelphia-Pasta_y_arroz_461715202_143042655_1706x960.jpg'
    }, {
        name: "prod4",
        price: 100,
        image: 'https://s1.eestatic.com/2020/01/22/cocinillas/recetas/pasta-y-arroz/Espaguetis-Salmon-Queso_Philadelphia-Pasta_y_arroz_461715202_143042655_1706x960.jpg'
    }]

    return (
        <div className={style.list}>
            {
                data.map(val => {
                    return <ProductItem prod={val} />;
                })
            }
            <input type="button" value="Finalizar compra" />
        </div>
    )
}

export default ProductList