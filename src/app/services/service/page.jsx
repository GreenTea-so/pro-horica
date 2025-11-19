import ImageAndText from "@/app/components/ImageAndText";
import BlockItems from "@/app/components/BlockItems";
import OurAdvantages from "@/app/components/OurAdvantages";
import Background from "@/app/components/Background";
import Helpers from "@/app/components/Helpers";
import image from '@/app/images/service/image9.jpg';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const title1 = 'Сервисное Обслуживание';
const title2 = 'Мы обеспечиваем';
const text = 'Компания "ProHoreca" предоставляет все виды сервисного обслуживания и ремонта холодильного, торгового, технологического, пекарского, профессионального оборудования. Монтаж/ввод в эксплуатацию - Техническое обслуживание - Диагностика - Гарантийный ремонт - Покрасочные работы.';


const list = [
  {
    title: 'Монтаж/ввод в эксплуатацию',
  },
  {
    title: 'Техническое обслуживание',
  },
  {
    title: 'Диагностика',
  },
  {
    title: 'Гарантийный ремонт',
  },
  {
    title: 'Покрасочные работы',
  }
];

export default function Service() {
  return (
    <html>
      <meta
        name="keywords"
        content="холодильник для напитков, холодильник витрина, холодильник для магазина, витрина для магазина, витринный холодильник, холодильник витрина, холодильник для напитков, витрина кондитерская, витрина горка, минибар, холодильник нерж, холодильник из нержавейки, холодильник из нержавеющей стали, холодильник, шкаф холодильный, витрина, витринный холодильник, холодильная витрина, барный холодильник, холодильник для напитков, морозилка, морозильная камера, холодильное оборудование"
      />
      <title>Сервисное обслуживание</title>
      <body>
        <div id="body">
          <Header />
          <main>
            <ImageAndText src={image.src} title={title1} text={text} number="7 967 251-13-58" />
            <Background />
            <BlockItems title={title2} items={list} />
            <OurAdvantages />
            <Helpers />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
