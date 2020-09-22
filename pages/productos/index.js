import Head from "next/head"
import Layout from "../../components/layout"
import ProductList from "../../components/productlist"

export default () => {
    return (
        <Layout>
            <Head>
                <title>Productos</title>
            </Head>
            <h1>Productos</h1>
            <ProductList />
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
