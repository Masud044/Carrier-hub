import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Banner from './component/Banner/Banner'
import JobList from './component/JobList/JobList';
import Features from './component/Features/Features';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Header></Header>
       <Banner></Banner>
       <JobList></JobList>
       <Features></Features>
    </div>
  )
}

export default App
