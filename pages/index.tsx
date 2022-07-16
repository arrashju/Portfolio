import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import useNavScroll from "../hooks/useNavScroll";
import useWindowSize from "../hooks/useWindowSize";
import styled, { css } from "styled-components";

const Home = () => {
  const [url, setUrl] = useState({ hero: "hero.webp", photo: "photo.png" });

  const scroll = useNavScroll();
  const size = useWindowSize();
  const [imageSpecs, setImageSpecs] = useState({
    width: "2048px",
    height: "2038px",
    quality: "75",
  });
  const [hideDropdown, setHideDropdown] = useState(true);
  const node = useRef();

  useEffect(() => {
    if (size.width > 767) {
      setUrl({ hero: "hero.webp", photo: "photo.png" });
      setImageSpecs({ width: "2048px", height: "2038px", quality: "75" });
    } else {
      setUrl({ hero: "hero_small.png", photo: "photo_small.png" });
      setImageSpecs({ width: "770px", height: "767px", quality: "75" });
    }
  }, [size]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleDropdown = (e) => {
    e.preventDefault();

    setHideDropdown(!hideDropdown);
  };

  const handleOutsideClick = (e) => {
    if (
      node.current &&
      //@ts-ignore
      typeof node.current.contains === "function" &&
      node &&
      //@ts-ignore
      !node.current.contains(e.target)
    ) {
      setHideDropdown(true);
    }
  };

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
            <h1>
              Justin<br></br>Ar-Rasheed
            </h1>
            <h4 className="greeting">Understanding the Big Picture</h4>
          </div>
          <div className="role">
            <h3>
              <span className="text-1">Software Developer</span>
              <span className="text-2">UX Designer</span>
            </h3>
            <span>
              <DropdownGroup>
                <Button onClick={handleDropdown} hideDropdown={hideDropdown}>
                  <>
                    Portfolio
                    <Svg
                      hideDropdown={hideDropdown}
                      width="13"
                      height="9"
                      viewBox="0 0 13 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <Path
                        d="M7.31088 7.87641C6.91175 8.42946 6.08825 8.42946 5.68911 7.8764L1.14883 1.5852C0.671533 0.923839 1.14411 -1.70223e-07 1.95972 -9.89206e-08L11.0403 6.94928e-07C11.8559 7.6623e-07 12.3285 0.923842 11.8512 1.58521L7.31088 7.87641Z"
                        fill="#C4C4C4"
                      />
                    </Svg>
                  </>
                </Button>
                <DropDown hideDropdown={hideDropdown} ref={node}>
                  <A
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.google.com/presentation/d/1kI46665iLCQzJlWwAGI7QagUziQATspqPlznjy0ylHM/edit?usp=sharing"
                  >
                    <Item>Case Study</Item>
                  </A>
                  <A
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/justincomplex/"
                  >
                    <Item>LinkedIn</Item>
                  </A>
                  <A
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.google.com/document/d/12KaChNMfcocs1ajr_nZp2CbdM9LrqPh3N_nWqTxTvKQ/edit?usp=sharing"
                  >
                    <Item>Resume</Item>
                  </A>
                </DropDown>
              </DropdownGroup>
            </span>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

const A = styled.a`
  text-decoration: none;
`;

const DropdownGroup = styled.div`
  position: relative;
`;

const Svg = styled.svg`
  margin-left: 7px;
  width: 11px;
  height: 11px;

  @media (max-width: 500px) {
    margin-left: 5px;
    width: 8px;
    height: 8px;
  }

  ${(props) =>
    !props.hideDropdown &&
    css`
      transform: rotate(180deg);
    `}
`;
const Path = styled.path`
  fill: black;
`;

const Item = styled.div`
  color: #333;
  font-size: 16.5px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  :hover {
    background-color: #ccc;
    cursor: pointer;
  }
  ${(props) => {
    if (props.disabled) {
      return css`
        :hover {
          text-decoration: none;
        }
        cursor: default;
        color: #bbb;
      `;
    }
  }}

  @media (max-width: 500px) {
    font-size: 14px;
    font-weight: 600;
  }
`;

const Button = styled.button`
  border: none;
  box-shadow: 2px 2px 6px rgba(47, 47, 89, 0.25);
  border-radius: 83px;
  background: #bbbbbb;
  font-size: 18px;
  color: black;
  font-weight: bold;
  padding: 10px 30px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  :hover {
    background: #c3c3c3;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const DropDown = styled.div`
  min-width: 120px;
  background: #ddd;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 0.6rem;
  margin: 9px 5px;
  position: absolute;
  z-index: 2;
  left: 50%;
  transform: translate(-53.5%);
  visibility: ${(props) => (props.hideDropdown ? "hidden" : "visible")};
  opacity: ${(props) => (props.hideDropdown ? "0" : "1")};
  transition: visibility 0s, opacity 0.075s linear;
`;

export default Home;
