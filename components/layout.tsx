import Head from 'next/head'

const Layout = ({children}) => {
    return (
      <>
        <Head>
          <title>Justin Ar-Rasheed</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:image" content="/photo_small.png" />
        </Head>
        {children}
      </>
    );
}
  
export default Layout;
  