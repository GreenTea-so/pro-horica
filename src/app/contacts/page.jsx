import Helpers from "../components/Helpers";
import YandexMap from "../components/YandexMap";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contacts() {
  return (
    <html>
      <meta
        name="keywords"
        content="полка, полка-купэ, купэ, полки подвесные, зонт вытяжной, зонт, зонт из нержавейки, зонт из нержавеющей стали, зонт, жироуловители, подтоварник, подставка, подтоварник на склад,подтоварник для ресторана, барная станция, станция в бар, нейтральный стол из нержавеющей стали, стол разделочный, стол, нержавейка, Моечная ванна, раковина, полка для посуды, стеллаж"
      />
      <title>Контакты</title>
      <body>
        <div id="body">
          <Header />
          <main>
            <YandexMap />
            <Helpers />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
