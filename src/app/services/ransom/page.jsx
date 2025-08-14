import ImageAndText from "@/app/components/ImageAndText";
import RansomBlock from "@/app/components/RansomBlock";
import Helpers from "@/app/components/Helpers";
import image from '@/app/images/service/image6.png';

const title = 'Выкуп Оборудования';
const text = 'Ваше предприятие закрывается или же требует обновления, а старое оснащение нужно продать как можно скорее? Тогда Вы обратились по адресу!\nОцениваем оборудование в течение 1 часа по фото и видео\nОперативный вывоз оборудования от 1 дня';

export default function Ransom() {
  return (
    <main>
      <ImageAndText src={image.src} title={title} text={text} />
      <RansomBlock />
      <Helpers />
    </main>
  );
}
