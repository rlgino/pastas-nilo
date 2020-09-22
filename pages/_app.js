import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1>Pastas Nilo</h1>
      <Component {...pageProps} />

      <style jsx>
        {`
        h1 {
          text-align: center;
        }
      `}
      </style>
    </>
  )
}

export default MyApp
