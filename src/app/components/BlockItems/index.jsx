import bem from "../../utils/bem";
import './index.scss';

const b = bem('block-items');

export default function BlockItems(props) {
  const { title, items } = props;

  return (
    <div className="my-5">
      <span className="title mb-3">{title}</span>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {items?.map((item, index) => (
          <div className={b('item')} key={index}>
            <span className="sub-title">{item.title}</span>
            <span className="text">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
