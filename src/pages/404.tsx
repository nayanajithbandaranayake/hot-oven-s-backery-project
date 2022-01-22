import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"

const Error = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>404</h1>
        <p>Sorry, The page you was looking does not exist.</p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  color: #ff7513;
  height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    text-transform: capitalize;
  }
`

export default Error
