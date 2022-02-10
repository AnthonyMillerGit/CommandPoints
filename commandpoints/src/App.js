import './App.css';
import Header from './components/Header'
import MainBody from './components/MainBody'
import Footer from './components/Footer'
import React , { useEffect, useState } from 'react'
import axios from 'axios'




function App() {


  const [cardImg, setCardImg] = useState()
  const [cardName, setCardName] = useState()


  useEffect(() => {
    axios.get('https://api.magicthegathering.io/v1/cards')
    .then(res => {
      console.log(res.data)
      setCardImg(res.data.cards[0].imageUrl)
      setCardName(res.data.cards[0].name)
    })
    .catch(err => {
      console.log(err)
    })
  },[])


  return (
    <div className="App">
      <Header />
      <MainBody />
      <h3>{cardName}</h3>
      <img alt="" src={cardImg}/>
      <Footer />
    </div>
  );
}

export default App;
