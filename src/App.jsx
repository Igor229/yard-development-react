import Header from './main_components/Header';
import Footer from './main_components/Footer';
import Home from './pages/Home';
import Map from './home_components/Map';
import './App.scss';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Map/>
      <Footer/>
    </>
  );
}

export default App;