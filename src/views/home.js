import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Legacy Security Agent</title>
        <meta property="og:title" content="Legacy Security Agent" />
      </Helmet>
    </div>
  )
}

export default Home
