import Head from 'next/head';
import "../styles/globals.css";

export default function applifoodv1({ Component, pageProps }) {
  return (
    <div>
      <Head>
  <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
</Head>

     <Component {...pageProps} />
   </div>
  )
}