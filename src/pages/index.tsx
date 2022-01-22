import React from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa"

import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <Wrapper>
        <section className="top-section">
          <h1 id="top">
            Welcome to the <br />
            Hot Oven's Backery
          </h1>
          <StaticImage
            src="../assets/images/backery-top.jpg"
            alt="french bread stacked in front of a oven"
            className="background-img"
          />
        </section>
        <section className="about-section padding-section">
          <h3 className="title" id="about">
            about us
          </h3>
          <div>
            <StaticImage
              src="../assets/images/backery-about-2.jpg"
              alt="a baker kneading a dough"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              dolor deleniti ullam corporis? Sapiente enim exercitationem
              officiis ea, numquam neque rem. Voluptatem maiores reprehenderit
              amet aliquam repellendus architecto, accusamus pariatur nihil.
              Dolorem quod voluptatibus alias veritatis mollitia culpa optio
              quos eius provident voluptatum. Voluptatibus, odit necessitatibus.
              Dolorem corrupti vero rem.
            </p>
          </div>
        </section>
        <section className="services-section padding-section">
          <h3 className="title" id="services">
            our services
          </h3>
          <ul>
            <div>
              <li>
                <h4 className="sub-title">Vast range of delights</h4>
              </li>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi recusandae earum perferendis incidunt totam
                reprehenderit quos numquam inventore aspernatur nobis ea
                tenetur, tempora eaque optio. Qui cumque aliquam a libero.
              </p>
              <StaticImage
                src="../assets/images/backery-about-3.jpg"
                alt="crossaints"
              />
            </div>
            <div>
              <li>
                <h4 className="sub-title">Place Orders from your Home</h4>
              </li>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi recusandae earum perferendis incidunt totam
                reprehenderit quos numquam inventore aspernatur nobis ea
                tenetur, tempora eaque optio. Qui cumque aliquam a libero.
              </p>
              <StaticImage
                src="../assets/images/backery-about-4.jpg"
                alt="vintage telephone"
              />
            </div>
            <div>
              <li>
                <h4 className="sub-title">
                  Delivered to your doorstep right on time
                </h4>
              </li>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi recusandae earum perferendis incidunt totam
                reprehenderit quos numquam inventore aspernatur nobis ea
                tenetur, tempora eaque optio. Qui cumque aliquam a libero.
              </p>
              <StaticImage
                src="../assets/images/backery-about-5.jpg"
                alt="delivery man looking at his phone"
              />
            </div>
          </ul>
        </section>
        <section className="contact-section padding-section">
          <h3 className="title" id="contact">
            contact us for <br />
            special deliveries
          </h3>

          <ul>
            <li>
              <FaMapMarkerAlt />
              <span>123A, that street, there.</span>
            </li>
            <li>
              <FaPhone />
              <span>1234567</span>
            </li>
            <li>
              <FaEnvelope />
              <span>deliveries@hotovensbackery.cook</span>
            </li>
          </ul>
        </section>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  background: transparent;
  min-height: 100vh;
  width: 100vw;
  color: #ff7513;
  section {
    min-height: 40vh;
    width: 100%;
    padding: 0 3rem;
  }
  section.padding-section {
    padding: 2rem 3rem;
  }

  .top-section {
    position: relative;

    h1 {
      z-index: 2;
      transform: translateY(3rem);
      text-shadow: 0.5rem 0.5rem 0.2rem rgba(0, 0, 0, 0.8);
    }
  }
  .about-section {
    .gatsby-image-wrapper {
      display: none;
    }
  }
  .services-section {
    background: black;
    ul {
      width: 100%;
      div {
        width: 100%;
        margin-top: 1.5em;
        .gatsby-image-wrapper {
          height: 400px;
          width: 100%;
          overflow: hidden;
          border-radius: 8px;
        }
        img {
          width: 100%;
          height: 100%;
          transition: all 0.3s ease-in-out;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
  .contact-section {
    ul {
      list-style: none;
      width: 100%;
      li {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        color: #ff0000;

        svg {
          margin-right: 1em;
        }
      }
    }
  }
  @media (min-width: 650px) {
    .services-section {
      ul {
        div {
          margin-bottom: 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 5rem auto;
          height: 15rem;
          li {
            grid-column: 1;
            grid-row: 1;
            margin-right: 2em;
          }
          .gatsby-image-wrapper {
            height: 100%;
            width: 100%;
            grid-column: 2;
            grid-row: span 2;
            justify-self: center;
            align-self: center;
          }
          p {
            margin-right: 2em;
            grid-column: 1;
            grid-row: 2;
          }
        }
        div:nth-of-type(2) {
          li {
            grid-column: 2;
            grid-row: 1;
            margin-left: 2em;
          }
          .gatsby-image-wrapper {
            height: 100%;
            width: 100%;
            grid-column: 1;
            grid-row: span 2;
          }
          p {
            margin-left: 2em;
            grid-column: 2;
            grid-row: 2;
          }
        }
      }
    }
  }

  @media (min-width: 750px) {
    .about-section {
      & > div {
        height: 15rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100%;
      }
      .gatsby-image-wrapper {
        display: block;
        overflow: hidden;
        height: 100%;
        grid-row: 1;
        border-radius: 8px;
        width: 100%;
        img {
          height: 100%;
          width: 100%;
          transition: all 0.3s ease-in-out;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
      p {
        margin-left: 2rem;
      }
    }
  }
  @media (min-width: 1100px) {
    /* .about-section {
      min-height: 60vh;
      & > div {
        height: 25rem;
      }
    } */
  }
`
export default Home
