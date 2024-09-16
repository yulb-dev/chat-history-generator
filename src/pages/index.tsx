import { Button } from 'antd';
import yayJpg from '../assets/yay.jpg';

export default function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>{count}</Button>
    </div>
  );
}
