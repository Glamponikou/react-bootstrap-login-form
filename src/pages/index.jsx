import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "./about"
import { navigate } from "gatsby"
import { useNavigate, useHistory, Route, Router } from "react-router-dom";


// All the gatsby-plugin-image goodness
import { getImage } from "gatsby-plugin-image"

// The bridge for Gatsby Background Image in V3
import { BgImage } from 'gbimage-bridge'

// React Bootstrap
import { Form, Button,Link } from "react-bootstrap"



const IndexPage = ({data}) => (
 
  <Layout>
    <Seo title="Start Here" />
    <BgImage 
      image={getImage(data.lake)} 
      className="masthead"
    >
      <div className="color-overlay d-flex justify-content-center align-items-center">
        <Form className="rounded p-4 p-sm-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onSubmit={ e => console.log(e.target.value)}/>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <button onClick={()=>{navigate("/about")}}>Login</button>
        </Form>
      </div>
    </BgImage>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    palmTree: file(relativePath: {eq: "palm-tree.jpg"}) {
      id
      base
      relativePath
      childImageSharp {
        gatsbyImageData(
          width: 500
          webpOptions: {quality: 30}
          blurredOptions: {width: 50}
        )
      }
    }
    oldLock: file(relativePath: {eq: "old-rusty-lock.jpg"}) {
      id
      base
      relativePath
      childImageSharp {
        gatsbyImageData(
          width: 500
          webpOptions: {quality: 30}
          blurredOptions: {width: 50}
        )
      }
    }
    lake: file(relativePath: {eq: "background-image.jpg"}) {
      id
      base
      relativePath
      childImageSharp {
        gatsbyImageData(
          width: 2000
          webpOptions: {quality: 50}
          placeholder: BLURRED
          blurredOptions: {width: 30}
        )
      }
    }
  }
`
