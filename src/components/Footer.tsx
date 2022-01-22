import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
        <article>
          <h5>Hot Oven's Backery</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            necessitatibus laudantium! Quae perspiciatis in nihil doloremque
            neque quaerat tempora sunt.
          </p>
        </article>
        <article>
          <h5>Quick Links</h5>
          <ul>
            <li>
              <Link to="/#about">About Us</Link>
            </li>
            <li>
              <Link to="/#services">Our Services</Link>
            </li>
            <li>
              <Link to="/#contact">Contact Us</Link>
            </li>
          </ul>
        </article>
        <article>
          <p>
            <sup>&copy;</sup>
            {new Date().getFullYear()} Hot Oven's Backery
          </p>
          <p>Logo Design & handcrafting by Nayanajith Bandaranayake</p>
        </article>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #000;
  color: #ff7513;
  .footer {
    display: grid;
    grid-template-rows: 12rem 10rem 8rem;
    text-align: center;
    align-items: center;
    padding: 2rem 0;
    padding-bottom: 0;
  }
  article {
    padding: 1rem 3rem;
    h5 {
      margin-bottom: 1.5rem;
    }
  }
  article:nth-of-type(2) {
    ul {
      list-style: none;
      a {
        text-decoration: underline;
        transition: color 0.3s ease-in-out;
        &:hover {
          color: #961919;
        }
      }
    }
  }
  article:nth-of-type(3) {
    background: #111;
    align-self: end;
    p {
      font-size: 0.89em;
      font-weight: 300;
    }
  }
  @media (min-width: 750px) {
    .footer {
      grid-template-rows: 10rem 8rem;
      grid-template-columns: 1fr 1fr;
    }
    article:nth-of-type(3) {
      grid-column: 1 / 3;
      grid-row: 2;
    }
    article:nth-of-type(2) {
      grid-column: 2;
      grid-row: 1;
    }
    article:nth-of-type(1) {
      grid-column: 1;
      grid-row: 1;
    }
  }
`

export default Footer
