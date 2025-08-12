import Statistics from "./components/Statistics";
import Reviews from "./components/Reviews";
import Partners from "./components/Partners";
import YandexMap from "./components/YandexMap";
import Helpers from "./components/Helpers";

export default function Home() {
  return (
    <main>
      <Statistics />
      <Reviews />
      <YandexMap />
      <Partners />
      <Helpers />
    </main>
  );
}