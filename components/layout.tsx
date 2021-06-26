import Head from 'next/head'

const Layout = ({children}) => {
    return (
      <>
        <Head>
          <title>Justin Matthew</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:image" content="https://media-exp3.licdn.com/dms/image/C4E03AQHRHO9wzj7nsg/profile-displayphoto-shrink_800_800/0/1617503181613?e=1629936000&v=beta&t=65jS-DHoMMs2HQbKDCa2eQcADr_rHzC3OZyfV6U8R_M" />
        </Head>
        {children}
      </>
    );
}
  
export default Layout;
  