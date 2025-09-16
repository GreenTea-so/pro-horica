import Header from "./components/Header";
import Footer from "./components/Footer";
import Statistics from "./components/Statistics";
import Reviews from "./components/Reviews";
import Partners from "./components/Partners";
import YandexMap from "./components/YandexMap";
import Helpers from "./components/Helpers";
import Banner from "./components/Banner";
import Background from "./components/Background";
import ServicesBlock from "./components/ServicesBlock";
import BannerDesign from "./components/BannerDesign";

export default function Home() {
  return (
    <html>
      <meta
        name="keywords"
        content="оборудование для кафе и ресторанов, аренда, аренда мебели, аренда оборудования, аренда реквизита, аренда реквизита для съёмок, аренда кинореквизита, аренда реквизита для киносъёмок"
      />
      <title>ProHoreca</title>
      <body>
        <div id="body">
          <Header />
          <main>
            <Banner />
            <ServicesBlock />
            <Background color="#D1171A" />
            <Statistics />
            <BannerDesign />
            <Reviews />
            <Background color="#292D38" />
            <YandexMap />
            <Partners />
            <Background color="#D1171A" />
            <Helpers />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}