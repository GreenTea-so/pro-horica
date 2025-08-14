import bem from "../../utils/bem";
import './index.scss';

const b = bem('image-and-text');

export default function ImageAndText(props) {
  const { src ,title, text } = props;

  return (
    <div className={b('')}>
      <img className={b('img')} src={src} />
      <div className="d-flex flex-column p-3">
        <span className="title mb-4">{title}</span>
        <span className="mb-3 text">{text}</span>
      </div>
    </div>
  );
}
