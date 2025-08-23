import BannerDesign from "@/app/components/BannerDesign";
import image1 from "@/app/images/design/image1.jpg";
import image2 from "@/app/images/design/image2.jpg";
import image3 from "@/app/images/design/image3.jpg";
import image4 from "@/app/images/design/image4.jpg";
import image5 from "@/app/images/design/image5.jpg";
import image6 from "@/app/images/design/image6.jpg";
import image7 from "@/app/images/design/image7.jpg";
import image8 from "@/app/images/design/image8.jpg";
import image9 from "@/app/images/design/image9.jpg";
import image10 from "@/app/images/design/image10.jpg";
import image11 from "@/app/images/design/image11.jpg";
import image12 from "@/app/images/design/image12.jpg";
import ImageSlider from "@/app/components/ImageSlider";

const list1 = [image1.src, image2.src, image3.src,];
const list2 = [image4.src, image5.src, image6.src];
const list3 = [image7.src, image8.src, image9.src, image10.src, image11.src, image12.src];

export default function Design() {
  return (
    <main>
      <BannerDesign />
      <span className="sub-title mb-3 fw-bold">Проектирование Ресторанов, Кафе, Баров, Столовых</span>
      <p className="text">Реализация любого объекта общепита требует наличия проектного решения, отражающего характеристики будущего объекта, которые проверяются надзорной комиссией. Сам проект - это пакет документации, в котором раскрываются технические параметры ресторана: конфигурация помещений и проемов, материалы отделки, средства изоляции, возможности подключения трубопроводов и электромонтажных сетей.</p>
      <span className="sub-title mt-4 mb-2 fw-bold">Проектирование отвечает на следующие вопросы:</span>
      <ul>
        <li className="text">Как распланировать помещения, чтобы сделать предприятие удобным, экономичным, и в то же время избежать пересечение потоков сырья и готовой продукции?</li>
        <li className="text">Какое технологическое оборудование выбрать для того, чтобы рационально реализовать выбранный формат предприятия?</li>
        <li className="text">Сколько оно будет стоить?</li>
        <li className="text">Как организовать прием, хранение, кулинарную обработку сырья и как организовать реализацию готовой продукции?</li>
        <li className="text">Что делать с отходами производства?</li>
        <li className="text">Как организовать пребывание персонала на рабочих местах с соблюдением правил и норм охраны труда и соблюдения правил личной гигиены?</li>
        <li className="text">Как распланировать помещения для посетителей, чтобы обеспечить их комфортное пребывание в вашем заведении?</li>
      </ul>
      <span className="sub-title mb-3 fw-bold">Расстановка оборудования</span>
      <p className="text">Чтобы ваш магазин продуктов приносил хорошую прибыль, он должен не только предлагать самый большой ассортимент товаров по низким ценам, но и должен быть правильно оформленным внутри. Различное торговое и холодильное оборудование необходимо расставить так, чтобы покупатель мог легко найти товар, при этом пройдя за ним большую часть торгового зала.</p>
      <p className="text">Перед тем как открыть магазин продуктов, необходимо четко определить минимальную площадь, которая необходима для комфортного выбора товаров. В процессе расстановки торгового оборудования наши специалисты учитывают все пожелания клиента, не отступая при этом от канонов мерчендайзинга.</p>
      <ImageSlider list={list1} />
      <span className="sub-title mb-3 mt-5 fw-bold">Технологический проект</span>
      <p className="text">Это план объекта, включающий в себя чертежи с обозначением помещений, расстановкой оборудования и мебели, точками подвода электричества, водоснабжения, канализации и вентиляции.</p>
      <ImageSlider list={list2} />
      <span className="sub-title mb-3 mt-5 fw-bold">Дизайн-проект</span>
      <p className="text">Документация дизайн-проекта состоит из двух частей: техническая часть и визуализация. Техническая часть включает в себя планы, схемы, чертежи с привязками к сетям и коммуникациям.</p>
      <p className="text">А визуализация даёт представление о результате, как будет выглядеть дизайн интерьера ресторана после ремонта.</p>
      <ImageSlider className="mb-5" list={list3} />
    </main>
  );
}
