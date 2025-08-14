import ImageAndText from "@/app/components/ImageAndText";
import BlockItems from "@/app/components/BlockItems";
import OurAdvantages from "@/app/components/OurAdvantages";
import Background from "@/app/components/Background";
import Helpers from "@/app/components/Helpers";
import image from '@/app/images/service/image9.jpg';

const title1 = 'Сервисное Обслуживание';
const title2 = 'Мы обеспечиваем';
const text = 'Компания "ProHoreca" предоставляет все виды сервисного обслуживания и ремонта холодильного, торгового, технологического, пекарского, профессионального оборудования.\nМонтаж/ввод в эксплуатацию\nТехническое обслуживание\nДиагностика\nГарантийный ремонт\nПокрасочные работы';


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
    <main>
      <ImageAndText src={image.src} title={title1} text={text} />
      <Background />
      <BlockItems title={title2} items={list} />
      <OurAdvantages />
      <Helpers />
    </main>
  );
}
