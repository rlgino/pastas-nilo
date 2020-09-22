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
    const host = process.env.HOST || 'http://localhost:3000'
    const data = await fetch(host + '/api/products')
        .then(response => response.json())

    return {
        data: data
    }
}

export default ProductPage