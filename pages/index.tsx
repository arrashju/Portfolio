import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
//import useWindowSize from '../hooks/useWindowSize'

const Home = () => {

  /*const size = useWindowSize();
  const [width, setWidth] = useState(size.width);
  useEffect(() => {
    setWidth({width: size.width});
  }, [size])*/

  return (
    <>
      <div className="nav">
          <div className="nav-logo">
            <Image src="/logo.png" width={66} height={70.43}></Image>
          </div>
      </div>
      <div className="hero">
        <div className="description">
          <div className="introduction">
            <h4 className="greeting">Hi, I am</h4>
            <h1>Justin<br></br>Matthew</h1>
          </div>
          <div className="role">
            <h3>UX Designer /<br/>Software Developer</h3>
            <Link href="https://www.linkedin.com/in/justincomplex/" passHref={true}><button>View LinkedIn</button></Link>
          </div>
        </div>
        <div className="img">
          <Image 
            src='/photo.png'
            alt="Justin photo"
            width={2048}
            height={2038}
          />        
        </div>
      </div>
      <style jsx>{`
        
      `}</style>
    </>
  )
}

export default Home;
