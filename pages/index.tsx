import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import useNavScroll from '../hooks/useNavScroll'
import useWindowSize from '../hooks/useWindowSize'

const Home = () => {

  const [url, setUrl] = useState({ hero: "hero.png", photo: "photo.png" })
  
  const scroll = useNavScroll();
  const size = useWindowSize();
  const [imageSpecs, setImageSpecs] = useState({width: "2048px", height: "2038px", quality: "75"})

  useEffect(() => {
    if (size.width > 767) {
      setUrl({ hero: "hero.png", photo: "photo.png" })
      setImageSpecs({width: "2048px", height: "2038px", quality: "75"})
    } else {
      setUrl({ hero: "hero_small.png", photo: "photo_small.png" })
      setImageSpecs({width: "770px", height: "767px", quality: "75"})
    }
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
              width={imageSpecs.width}
              height={imageSpecs.height}
              quality={imageSpecs.quality}
            />
          </div>
        </div>
        <div className="description">
          <div className="introduction">
            <h4 className="greeting">Hi, I am</h4>
            <h1>Justin<br></br>Ar-Rasheed</h1>
          </div>
          <div className="role">
            <h3>
              <span className="text-1">Software Developer</span>
              <span className="text-2">UX Designer</span>
            </h3>
            <Link href="https://www.linkedin.com/in/justincomplex/" passHref={true}>
              <span>
                <button>View LinkedIn</button>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`

      `}</style>
    </>
  )
}

export default Home;
