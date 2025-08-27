import Helpers from "../components/Helpers";
import BlockItems from "../components/BlockItems";
import Background from "../components/Background";

const items = [
  {
    text: 'Через яндекс/грузовичков и тп.'
  },
  {
    text: 'Через транспортную компанию.'
  }
];

export default function Delivery() {
  return (
    <main>
      <BlockItems title="Доставка возможна:" items={items} />
      <Background  color="#292D38" />
      <span className="title mb-3">Условия оплаты</span>
      <p className="sub-title mb-4">Уважаемые Клиенты, свой заказ Вы можете оплатить следующими удобными для вас способами!</p>
      <span className="sub-title">Для физических лиц:</span>
      <ul className="d-flex flex-column gap-2">
        <li className="text">1.Наличными в офисе компании по адресу: г. Красногорск , Красногорский бульвар д4к1</li>
        <li className="text">2.Оплата через СБП и QR код, банковской картой.</li>
      </ul>
      <span className="sub-title">Для юридических лиц:</span>
      <ul className="d-flex flex-column gap-2">
        <li className="text">1.Для оплаты по безналичному расчету необходимо сделать заказ, после чего менеджер выставит счет.</li>
        <li className="text">2.Наличными в офисе при оформлении заказа.</li>
      </ul>
      <Background />
      <span className="sub-title mt-4 mb-3">О компании</span>
      <p className="text">Прохорека — Ваш надежный партнер в сфере поставок б/у оборудования для малого и среднего бизнеса!</p>
      <p className="text">Мы специализируемся на подборе, ремонте и обслуживании торгового и ресторанного оборудования.</p>
      <p className="text">В нашем ассортименте всегда представлено разнообразное оборудование с гарантией:</p>
      <Helpers />
    </main>
  );
}
