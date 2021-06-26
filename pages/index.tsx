import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Component } from 'react'
import useNavScroll from '../hooks/useNavScroll'

const Home = () => {
  
  const scroll = useNavScroll();

  useEffect(() => {
    console.log(scroll);
  }, [scroll])

  return (
    <>
      <nav className={scroll}>
          <div className="nav-logo">
            <Image src="/logo.png" width={66} height={70.43}></Image>
          </div>
      </nav>
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