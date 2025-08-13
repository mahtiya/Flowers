import Header from './../../components/Header/Header';
import Banner from './../../components/Banner/Banner';
import Discounting from './../../components/Discount/Discounting';
import Season from './../../components/Season/Season';
import Present from './../../components/Present/Present';
import Forum from './../../components/Forum/Forum';
import Map from './../../components/Map/Map';
import Footer from './../../components/Footer/Footer';
import TopBar from './../../components/TopBar/TopBar';

export default function Home() {
    return (
        <div>
            <TopBar />
            <Header />
            <Banner />
            <Discounting />
            <Season />
            <Present />
            <Forum />
            <Map />
            <Footer />
        </div>
    )
}
