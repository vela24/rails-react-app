// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PostsList from "./features/PostsList"

function App() {
  return (
    <>
      <div className="app">
        <h1>React on Rails Blog</h1>
        <p>Find this application layout in rails-react/src/App.jsx</p>
        <PostsList />
      </div>
    </>
  )
}

export default App
