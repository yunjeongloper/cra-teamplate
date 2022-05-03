import { useState } from 'react';
import Colored from '../component/Colored';

const Home = () => {
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  return (
    <>
      <input type="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} />
      <Colored color={selectedColor} />
    </>
  );
};

export default Home;
