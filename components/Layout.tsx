import * as React from 'react'
import Head from 'next/head'

const Layout = ({ children }: { children: string | JSX.Element }) => (
  <div className="c-text">
    <Head>
      <title>FTR</title>
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto+Mono|Source+Sans+Pro" />
      <link rel="stylesheet" href="static/blaze.min.css" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* favicon stuff */}
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <main className="o-container o-container--large">{children}</main>
    <style jsx global>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
          'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      }
    `}</style>
  </div>
)

export default Layout
