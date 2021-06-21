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
        <Image src="/logo.png" className="nav-logo" width={52.5} height={56}></Image>
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
            <h4>Hi, I am</h4>
            <h1>Justin<br></br>Matthew</h1>
          </div>
          <div className="role">
            <h3>UX Designer /<br/>Software Developer</h3>
              <button><a href="https://www.linkedin.com/in/justincomplex/">View LinkedIn</a></button>
          </div>
        </div>
        {/*<object className="scroll" data="scroll.svg"> </object>*/}
        <div className="img">
          <Image 
            src='/photo.png'
            alt="Justin photo"
            className="img"
            width={2048}
            height={2038}
          />        
        </div>
      </div>
      <style jsx>{`
        .hero {
          background: linear-gradient(
            256.91deg,
            rgba(104, 104, 104, 0.59) -4.41%,
            #252525 108.91%
          );
          background-repeat: no-repeat;
          text-align: center;
          z-index: 0;
        }

        .scroll {
          position: absolute;
          bottom: 30px;
          left: 50%;
          z-index: 4;
        }

        .nav {
          position: fixed;
          padding: 1.25rem;
          width: 100%;
        }

        .navbar {
          text-align: center;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        li {
          display: inline-block;
          margin: 1.25rem;
          font-size: 18px;
        }

        h1 {
          font-size: 6rem;
          margin: 0;
        }
        
        h3 {
          font-size: 3rem;
        }

        h4 {
          font-size: 2.5rem;
        }

        button {
          font-weight: 600;
          background: #bbbbbb;
          width: 188px;
          height: 44px;
          border-radius: 83px;
          border: none;
          font-size: 16px;
          margin-bottom: 0;
          box-shadow: 2px 2px 6px rgba(47, 47, 89, 0.25);
        }

        button:hover {
          border: 3px solid #343d78;
        }

        .nav-logo {
          color: #FFFFFF;
          background: #A1A1A1;
          box-shadow: 2px 2px 6px rgba(47, 47, 89, 0.25);

          width: 4rem;
          height: 4rem;

          position: absolute;
          left: 1.25rem;
          top: 1.25rem;
        }

        .introduction h3 {
          margin: 0 0 .438rem;
        }

        .introduction h4 {
          margin: 0 0 .438rem;
        }

        .introduction {
          margin: .938rem 0 0;
        }

        .role h3 {
          margin: 0 0 1.875rem;
        }

        .img {
          position: fixed;
          bottom: 0;
          z-index: 2;
          max-width: 100%;
        }

        @media (max-width: 1024px) {
          .img {
            max-height: 400px;
            max-width: 100%;
          }

          .hero {
            height: 1366px;
          }
        }

        @media (min-width: 1024px) {
          .hero {
            height: 1366px;
          }
        }

        @media (min-width: 580px) {
          .img {
            max-width: 58rem;
            max-height: 58rem;
            margin-left: -29rem;
            left: 50%;
          }
        }

        @media (max-width: 414px) {
          .hero {
            height: 823;
          }

          h4 {
            display: none;
          }

          h1 {
            font-size: 4rem;
            margin-bottom: .25rem;
          }

          h3 {
            font-size: 2rem;
          }
        }

        @media (min-width: 700px) {
          .description {
            z-index: 1;
            position: absolute;
            top: 25%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
          }

          .introduction {
            text-align: left;
          }
        }

        @media (max-width: 700px) {
          .description {
            z-index: 1;
            position: absolute;
            top: 10%;
            align-items: center;
            width: 100%;
          }

          .introduction {
            margin-bottom: 3rem;
          }
        }

        @media (min-width: 1366px) {
          .description {
            bottom: 20%;
            top: 20%;
          }

          .introduction {
            text-align: left;
          }
        }
      `}</style>
    </>
  )
}

export default Home;