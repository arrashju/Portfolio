import Head from 'next/head'

const Layout = ({children}) => {
    return (
      <>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:image" content="/photo.png" />
        </Head>
        {children}
      </>
    );
}
  
export default Layout;
  