import Reviews from "../components/Reviews";
import Partners from "../components/Partners";
import Helpers from "../components/Helpers";
import ServicesBlock from "../components/ServicesBlock";
import Background from "../components/Background";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Services() {
  return (
    <html>
      <meta
        name="keywords"
        content="tecnoeka, конвекционная печь, ека, eka, конвекция, подова печь, печь для хлеба, жарочные шкаф, шкаф для выпечки, печь конвекционная, пекарский шкаф, жарочный шкаф, конвектор, конвекция, печь для выпечки, пароконвектомат, расстоечный шкаф, расстойка, парик, подовая печь, печь для пиццы, тепловое оборудование, оборудование для кафе бу"
      />
      <title>Услуги</title>
      <body>
        <div id="body">
          <Header />
          <main>
            <ServicesBlock />
            <Background />
            <Reviews />
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
