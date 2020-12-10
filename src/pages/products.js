import React, { Component } from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"

export default class products extends Component {
  render() {
    return (
      <Layout>
        <h1>This is our products</h1>
        <p className="products-text">
          Consequat laborum in duis anim aute qui. Nulla commodo laborum enim
          commodo consequat ut quis occaecat enim non non exercitation. Non
          minim adipisicing duis Lorem occaecat reprehenderit nulla aliqua
          mollit amet eu culpa. Ea magna deserunt eiusmod cillum. Ullamco
          laborum aute non quis id ad in duis sunt adipisicing velit velit enim.
        </p>
      </Layout>
    )
  }
}
