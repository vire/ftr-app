import * as React from 'react'

import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <div className="IndexPage__wrapper">
      <h1 className="u-centered">Welcome to FTR App</h1>
    </div>
    <style jsx global>{`
      .IndexPage__wrapper {
        display: flex;
        height: 90vh;
      }
    `}</style>
  </Layout>
)

export default IndexPage
