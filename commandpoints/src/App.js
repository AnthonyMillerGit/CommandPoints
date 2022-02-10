import './App.css';
import Header from './components/Header'
import MainBody from './components/MainBody'
import Footer from './components/Footer'







function App() {


 


  // useEffect(() => {
  //   axios.get(`https://api.magicthegathering.io/v1/cards/${cardNumber}`)
  //   .then(res => {
  //     console.log(res.data)
  //     setCardImg(res.data.card.imageUrl)
  //     setCardName(res.data.card.name)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // },[])


  return (
    <div className="App">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
