import Reviews from "../components/Reviews";
import Partners from "../components/Partners";
import Helpers from "../components/Helpers";
import ServicesBlock from "../components/ServicesBlock";
import Background from "../components/Background";

export default function Services() {
  return (
    <main>
      <ServicesBlock />
      <Background />
      <Reviews />
      <Partners />
      <Background color="#292D38" />
      <Helpers />
    </main>
  );
}
