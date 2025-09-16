import ImageSlider from '@/app/components/ImageSlider';
import BlockItems from "@/app/components/BlockItems";
import Helpers from "@/app/components/Helpers";
import Background from "@/app/components/Background";
import image from '@/app/images/service/image8.jpg';
import image1 from '../../images/image1.jpg';
import image6 from '../../images/image6.jpg';
import image7 from '../../images/image7.jpg';
import image8 from '../../images/image8.jpg';
import image9 from '../../images/image9.jpg';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const title1 = 'Оборудование магазинов и ресторанов под ключ';
const title2 = 'Основные этапы сотрудничества:';
const title3 = 'На все работы и оборудование предоставляется фирменная гарантия'
const text = 'Компания ProHoreca представляет новую услугу «Комплексное оснащение под ключ». Наши специалисты разработают дизайн проект, проектирование вентиляционной системы  и помогут подобрать оборудование с учетом особенностей заведения (магазина, ресторана, пекарни), а также минимизировать затраты и увеличить прибыль. Предлагаем комплексные решения по оборудованию магазинов под ключ любой направленности, а также пекарен, кафе, столовых, ресторанов, заведений сегмента фаст-фуд, мясных комбинатов.';

const list1 = [
  {
    text: 'Консультация и обсуждение деталей (размер заведения, количество рабочих мест, расчет производственных мощностей, сроки выполнения)'
  },
  {
    text: 'Разработка дизайн-проекта по индивидуальным параметрам'
  },
  {
    text: 'Проектирование и монтаж систем вентиляции'
  },
  {
    text: 'Подбор необходимого оборудования с учетом вашего бюджета и пожеланий'
  },
  {
    text: 'Поставка оборудования, расстановка мебели, проведение пуско-наладочных работ'
  }
];

const list2 = [
  {
    title: 'Для кафе и ресторанов / Для пекарен и кондитерских',
    text: 'Консультация и обсуждение деталей (размер заведения, количество рабочих мест, расчет производственных мощностей, сроки выполнения) / Разработка дизайн-проекта по индивидуальным параметрам'
  }
];

const listImage = [image.src, image6.src, image7.src, image8.src, image9.src, image1.src];

export default function EquippingEnterprises() {
  return (
    <html>
      <meta
        name="keywords"
        content="льдогенератор, ледогенератор,брема, апач, хошизаки, hoshizaki, apach, brema, icematic, лёдик, кубик, фрапе, фрапэ, креш, лёд, льдогенератор в ресторан, в кафе, ледогенератор, бункер для льда, бункер, Follett, scotsman"
      />
      <title>Оборудование магазинов и ресторанов</title>
      <body>
        <div id="body">
          <Header />
          <main>
            <div className="d-inline-flex flex-column p-3 mt-3">
              <span className="title mb-4">{title1}</span>
              <span className="mb-3 text">{text}</span>
            </div>
            <ImageSlider list={listImage} />
            <BlockItems title={title2} items={list1} />
            <BlockItems title={title3} items={list2} />
            <Background />
            <span className="sub-title mb-3 mt-4">Если у вас есть вопросы – свяжитесь с нашими специалистами по телефону или оставляйте заявку на сайте. Заказав услугу комплексного оснащения, вы получаете дополнительную скидку на оборудование. Мы работаем с холодильным оборудованием оснащенным встроенным, и выносным холодоснабжением.</span>
            <span className="sub-title mb-3">Если Вы хотите заказать расчёт стоимости, или у вас есть вопросы по услуге – свяжитесь с нашим специалистом по телефону <a  href="tel:+79672863777">+7 967 286-37-77</a></span>
            <Background color="#292D38" />
            <Helpers />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
