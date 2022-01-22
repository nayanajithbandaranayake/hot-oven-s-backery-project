import React from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import styled from "styled-components"

import logo from "../assets/images/logo.png"
import { useState } from "react"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  return (
    <Wrapper className="navbar">
      <div className="logo">
        <Link to="/#top">
          <img src={logo} alt="hot ovens backery logo" />
        </Link>
      </div>
      <h2 className="nav-welcome">Hot Oven's Backery</h2>
      <div
        className={
          showLinks ? "link-container show-link-container" : "link-container"
        }
      >
        <Link to="/#about" onClick={() => setShowLinks(false)}>
          about
        </Link>
        <Link to="/#services" onClick={() => setShowLinks(false)}>
          services
        </Link>

        <Link to="/#contact" onClick={() => setShowLinks(false)}>
          contact
        </Link>
      </div>
      <button className="btn nav-btn" onClick={() => setShowLinks(!showLinks)}>
        <FaBars />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  z-index: 10;
  height: 10rem;
  padding: 2em 4em;
  background: #000000;
  position: sticky;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    height: 100%;
    img {
      height: 100%;
      cursor: pointer;
    }
  }
  .link-container {
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.18, 0.55, 0.47, 1.28);
    height: 0;
    display: flex;
    a {
      transition: all 0.4s cubic-bezier(0.18, 0.55, 0.47, 1.28);
      text-transform: uppercase;
      font-size: 1em;
      display: block;
    }
  }
  .nav-welcome {
    color: #ff7513;
    display: none;
  }
  .nav-btn svg {
    font-size: 1.3rem;
  }
  .show-link-container {
    height: 10rem;
  }
  .nav-btn {
    display: none;
  }
  @media (max-width: 750px) {
    .link-container {
      z-index: 5;
      position: absolute;
      width: 100vw;
      top: 8rem;
      left: 0;
      right: 0;
      background: black;
      flex-direction: column;
      align-items: center;
      a {
        width: 100%;
        text-align: center;
        padding: 0.5rem 0;
        &:hover {
          background: #ff7513;
        }
      }
    }
    .nav-btn {
      display: block;
    }
  }
  @media (min-width: 750px) {
    .link-container {
      height: 100%;
      align-items: center;
      a {
        margin-left: 1em;
      }
    }
  }
  @media (min-width: 1100px) {
    .nav-welcome {
      display: block;
    }
  }
`

export default Navbar
