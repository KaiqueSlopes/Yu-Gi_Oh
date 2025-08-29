import { Banner } from "../components/Banner/Banner";
import { Filters } from "../components/Filters/Filters";
import { CardList } from "../components/Card/CardList";
import { Footer } from "../components/Footer/Footer";
import "./Home.css";

export function Home() {
  return (
    <div className="home">
      <div className="banner-container">
        <Banner />
      </div>
      <div className="home-container">
        <div className="home-content">
          <Filters />
          <CardList />
        </div>
      </div>
      <Footer />
    </div>
  );
}
