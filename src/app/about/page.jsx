import AboutCompany from "../components/AboutCompany";
import Reviews from "../components/Reviews";
import Partners from "../components/Partners";
import YandexMap from "../components/YandexMap";
import Helpers from "../components/Helpers";
import OurAdvantages from "../components/OurAdvantages";
import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function About() {
  return (
    <html>
      <meta
        name="keywords"
        content="торговый стеллаж, рукомойник, мойка, двойная мойка, производственный, разделочный стол, бак для мусора, мусорный бак, бак нерж, мусорка, столы-тумбы, Тележки шпильки, Шкаф, Вытяжка, зонт, зонты, нейтральный модуль, купольная посудомоечная машина"
      />
      <title>О компании</title>
      <body>
        <div id="body">
          <Header />
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
          <Footer />
        </div>
      </body>
    </html>
  );
}
