import AboutCompany from "../components/AboutCompany";
import Reviews from "../components/Reviews";
import Partners from "../components/Partners";
import YandexMap from "../components/YandexMap";
import Helpers from "../components/Helpers";
import OurAdvantages from "../components/OurAdvantages";


export default function About() {
  return (
    <main>
      <AboutCompany />
      <OurAdvantages />
      <Reviews />
      <YandexMap />
      <Partners />
      <Helpers />
    </main>
  );
}
