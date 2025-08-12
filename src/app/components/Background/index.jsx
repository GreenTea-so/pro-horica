import bem from "../../utils/bem";
import './index.scss';

const b = bem('background');

export default function Background(props) {
  return (
    <div className={b('')}>
      <div className={b('block')} style={{ backgroundColor: props.color }} />
    </div>
  );
}
