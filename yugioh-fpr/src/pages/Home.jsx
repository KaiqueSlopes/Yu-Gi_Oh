import { Banner } from "../components/Banner/Banner";
import { Filters } from "../components/Filters/Filters";
import { CardList } from "../components/Card/CardList";
import { Footer } from "../components/Footer/Footer";
import "./Home.css";

export function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="main-content-wrapper">
        <Filters />
        <CardList />
      </div>
      <Footer />
    </div>
  );
}
