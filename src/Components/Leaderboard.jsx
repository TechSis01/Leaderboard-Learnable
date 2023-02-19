import React from 'react'
import Header from './Header'
import List from './List'
import SubHeader from './SubHeader'
const Leaderboard = () => {
  return (
    <div className='leaderboard-container'>
        <Header />
        <SubHeader />
        <List />
        <p id="copyright">Made with love for Learnable by Queendoline Akpan</p>
    </div>
  )
}

export default Leaderboard
