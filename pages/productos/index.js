import Head from "next/head"
import Layout from "../../components/layout"
import ProductList from "../../components/productlist"

function ProductPage({ data }) {
    return (
        <Layout>
            <Head>
                <title>Productos</title>
            </Head>
            <h1>Productos</h1>
            <ProductList productList={data} />
            <style jsx>
                {`
                h2 {
                    color: blue;
                }
            `}
            </style>
        </Layout>
    )
}

ProductPage.getInitialProps = async (ctx) => {
    await fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(data => console.log(data));

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

    return {
        data: data
    }
}

export default ProductPage