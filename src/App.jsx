import TopBar from './components/TopBar/TopBar';
import './assets/scss/main.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Discounting from './components/Discount/Discounting';
import Season from './components/Season/Season';
import Present from './components/Present/Present';
import Forum from './components/Forum/Forum';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div>
      <TopBar />
      <Header />
      <Banner />
      <Discounting />
      <Season />
      <Present />
      <Forum />
      {/* <Map /> */}
      <Footer />
    </div>
  )
}
