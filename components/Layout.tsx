import Head from 'next/head'
import * as React from 'react'

const Layout = ({ children }: { children: string | JSX.Element[] }) => (
  <div className="c-text">
    <Head>
      <title>FTR</title>
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto+Mono|Source+Sans+Pro" />
      <link rel="stylesheet" href="static/blaze.min.css" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* favicon stuff */}
      <link rel="apple-touch-icon" sizes="180x180" href="static/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="static/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="static/favicon-16x16.png" />
      <link rel="manifest" href="static/manifest.json" />
      <link rel="mask-icon" href="static/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <header className="Layout__header">
      <img src="/static/android-chrome-256x256.png" />
    </header>
    <main className="o-container o-container--large">{children}</main>
    <footer className="Layout__footer u-centered">
      <span>© FTR 2017 - github/vire</span>
    </footer>
    <style jsx global>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
          'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      }

      .Layout__header {
        height: 5vh;
        background: black;
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .Layout__header img {
        height: 30px;
        border: 1px solid #ffffff8f;
      }

      .Layout__footer {
        height: 5vh;
        background: black;
        color: white;
        font-size: 0.7rem;
        color: white;
      }
    `}</style>
  </div>
)

export default Layout
