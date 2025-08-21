import './assets/scss/main.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import RoutePage from './components/RoutePage/RoutePage';
import TopBar from './components/TopBar/TopBar';
import { Toaster } from 'react-hot-toast';


export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <RoutePage />
      <Map />
      <Footer />
      <Toaster />
    </>
  )
}
