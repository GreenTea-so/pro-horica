import Statistics from "./components/Statistics";
import Reviews from "./components/Reviews";
import Partners from "./components/Partners";
import YandexMap from "./components/YandexMap";
import Helpers from "./components/Helpers";
import Banner from "./components/Banner";
import Background from "./components/Background";

export default function Home() {
  return (
    <main>
      <Banner />
      <Background color="#D1171A" />
      <Statistics />
      <Reviews />
      <Background color="#292D38" />
      <YandexMap />
      <Partners />
      <Background color="#D1171A" />
      <Helpers />
    </main>
  );
}