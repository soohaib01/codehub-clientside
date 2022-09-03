import '../styles/globals.css'
import Layout from '../components/Layout/layout'
import Router from "next/router";
import nProgress from "nprogress";
import "../styles/nprogress.css";
import { ChakraProvider } from '@chakra-ui/react'


Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      </ChakraProvider>
  )
}

export default MyApp
