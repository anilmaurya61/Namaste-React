import logo from './logo.svg';
// import './App.css';
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/carousel'
import Body from './Components/Body/body';
import Footer
 from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
