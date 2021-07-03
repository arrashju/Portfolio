import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Component } from 'react'
import useNavScroll from '../hooks/useNavScroll'
import useWindowSize from '../hooks/useWindowSize'

const Home = () => {

  const hero = "hero.png"
  const photo = "photo.png"

  const [url, setUrl] = useState({ hero, photo })
  
  const scroll = useNavScroll();
  const size = useWindowSize();

  useEffect(() => {
    size.width > 767 ? setUrl({ hero, photo }) : setUrl({ hero: "hero_small.png", photo: "photo_small.png" })
  }, [size])

  return (
    <>
      <nav className={scroll}>
          <div className="nav-logo">
            <Image src="/logo.png" width={66} height={70.43}></Image>
          </div>
      </nav>
      <div className="parallax-container">
        <div className="hero" style={{ backgroundImage: `url("${url.hero}")` }}>
          <div className="img">
            <Image 
              src={`/${url.photo}`}
              alt="Justin photo"
              width={2048}
              height={2038}
            />
          </div>
        </div>
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
      </div>
      <style jsx>{`
      `}</style>
    </>
  )
}

export default Home;
