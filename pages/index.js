import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
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
        {/*<ul className="navbar">
          <li>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li>
          <Link href="/"><a>About</a></Link>
          </li>
        </ul>*/}
      </div>
      <div className="hero">
        <div className="description">
          <div className="introduction">
            <h4 className="greeting">Hi, I am</h4>
            <h1>Justin<br></br>Matthew</h1>
          </div>
          <div className="role">
            <h3>UX Designer /<br/>Software Developer</h3>
            <a href="https://www.linkedin.com/in/justincomplex/"><button>View LinkedIn</button></a>
          </div>
        </div>
        <div className="img">
          <Image 
            src='/photo.png'
            alt="Justin photo"
            style={{zIndex: 2}}
            width={2048}
            height={2038}
          />        
        </div>
      </div>
      <style jsx>{`

        * {
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        @media (min-width: 1025px) and (max-width: 1280px) {
          html {
            font-size: 7.5em;
          }
        }
        

        .nav {
          position: fixed;
          padding: 1.25rem;
          width: 100%;
          z-index: 1;
        }

        .nav-logo {
          width: 4em;
          height 4em;
          position: absolute;
          left: 1.25rem;
          top: 1.25rem;
        }

        .hero {
          background: linear-gradient(
            256.91deg,
            rgba(104, 104, 104, 0.59) -4.41%,
            #252525 108.91%
          );
          background-repeat: no-repeat;
          min-height: 800px;
          max-height: 100vh;
          padding-top: 20px;
          position: relative;
          z-index: 0;
          text-align: center;
        }

        .description {
          width: 100%;
          position: absolute;
          font-weight: bold;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
        }

        .introduction {
          left: 155px;
          text-align: left;
        }

        .introduction h1 {
          font-size: 6rem;
          margin: 0;
        }

        .introduction h4 {
          font-size: 2.25rem;
          margin: 0 0 10px 0;
        }

        .role {
          right: 155px;
        }

        .role h3 {
          font-size: 3rem;
          margin: 0 0 30px 0;
        }

        button {
          width: 206px;
          height: 47px;
          box-shadow: 2px 2px 6px rgba(47, 47, 89, 0.25);
          border: none;
          border-radius: 83px;
          background: #bbbbbb;
          font-size: 18px;
          color: black;
          font-weight: bold;
          margin-bottom: 0;
        }

        button:hover {
          border: 3px solid #343d78;
          cursor: pointer;
        }

        .img {
          position: absolute;
          bottom: 0;
          z-index: 2;
          left: 50%;
          transform: translateX(-50%);
        }

        @media (min-width: 1281px) {
          html {
            font-size: 10em;
          }

          .img {
            max-width: 765px;
          }

          .description {
            top: 35%;
          }

          hero {
            max-height: 100vh;
          }
        }
        
        {//Device = Laptops, Desktops}
        {//Screen = B/w 1025px to 1280px}
        
        @media (min-width: 1025px) and (max-width: 1280px) {
          html {
            font-size: 7.5em;
          }

          .img {
            max-width: 553px;
          }

          .description {
            top: 20%;
          }

          .hero {
            max-height: 100vh;
          }
        }
        
        {//Device = Tablets, Ipads (portrait)}
        {//Screen = B/w 768px to 1024px}
        
        @media (min-width: 768px) and (max-width: 1024px) {    
          html {
            font-size: 5em;
          }

          .img {
            max-width: 553px;
          }

          .description {
            top: 20%;
          }

          .hero {
            max-height: 100vh;
          }
        }
        
        {//Device = Tablets, Ipads (landscape)}
        {//Screen = B/w 768px to 1024px}
        
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          html {
            font-size: 5em;
          }

          .img {
            max-width: 553px;
          }

          .description {
            top: 20%;
          }

          .hero {
            max-height: 100vh;
          }
        }
        
        {//Device = Low Resolution Tablets, Mobiles (Landscape)}
        {//Screen = B/w 481px to 767px}
        
        @media (min-width: 481px) and (max-width: 767px) {
          html {
            font-size: 3.5em;
          }

          .img {
            width: 375px;
          }

          .description {
            position: static;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 437px;
          }
          
          .introduction {
            text-align: center;
          }

          .hero {
            min-height: 812px;
            max-height: 100vh;
          }
        }
        
        {//Device = Most of the Smartphones Mobiles (Portrait)}
        {//Screen = B/w 320px to 479px}
        
        @media (min-width: 375px) and (max-width: 480px) {
          html {
            font-size: 3.5em;
          }

          .img {
            width: 375px;
          }

          .description {
            position: static;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 437px;
          }
          
          .introduction {
            text-align: center;
          }

          .hero {
            min-height: 812px;
            max-height: 100vh;
          }    
          
          button {
            width: 170px;
            height: 40px;
          }
        }
        
        @media (max-width: 375px) {
          html {
            font-size: 2.5em;
          }

          .description {
            position: static;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 300px;
          }

          .hero {
            min-height: 550px;
            max-height: 100vh;
          }
    
          .introduction {
            text-align: center;
          }

          .img {
            width: 250px;
          }

          button {
            width: 170px;
            height: 40px;
          }
        }
      `}</style>
    </>
  )
}

export default Home;