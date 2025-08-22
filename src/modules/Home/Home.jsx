import Banner from "./Components/Banner/Banner";
import Cake from "./Components/Cake/Cake";
import Cards from "./Components/Cards/Cards";
import Discounting from "./Components/Discount/Discounting";
import Present from "./Components/Present/Present";
import Season from "./Components/Season/Season";

export default function Home() {
    return (
        <main>
            <Banner />
            <Cards />
            <Discounting />
            <Season />
            <Present />
            <Cake />
        </main>
    )
}
