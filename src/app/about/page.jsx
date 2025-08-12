import AboutCompany from "../components/AboutCompany";
import Reviews from "../components/Reviews";
import Partners from "../components/Partners";
import YandexMap from "../components/YandexMap";
import Helpers from "../components/Helpers";
import OurAdvantages from "../components/OurAdvantages";
import Background from "../components/Background";


export default function About() {
  return (
    <main>
      <AboutCompany />
      <OurAdvantages />
      <Background />
      <Reviews />
      <YandexMap />
      <Partners />
      <Background color="#292D38" />
      <Helpers />
    </main>
  );
}
