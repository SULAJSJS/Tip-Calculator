import { useEffect, useState } from 'react';
import './styles/styles.scss';
import Logo from './assets/logo.svg';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [bill, setBill] = useState<string | number>(0);
  const [tip, setTip] = useState<string | number>(0);
  const [customTip, setCustomTip] = useState<string | number>('');
  const [people, setPeople] = useState<string | number>(1);
  const [calculatedTip, setCalculatedTip] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState(5);

  useEffect(() => {
    if (
      Number(bill) > 0 &&
      Number(people) > 0 &&
      Number(customTip || tip) > 0
    ) {
      setCalculatedTip(
        (Number(bill) * (Number(customTip || tip) / 100)) / Number(people)
      );
    }
  }, [bill, calculatedTip, people, tip, customTip]);

  const handleResetBtn = () => {
    setBill('');
    setTip('');
    setCustomTip('');
    setPeople(1);
    setCalculatedTip(0);
    setActiveIndex(5);
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="card">
        <Form
          bill={bill}
          setBill={setBill}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
          customTip={customTip}
          setCustomTip={setCustomTip}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <Display
          calculatedTip={calculatedTip}
          handleResetBtn={handleResetBtn}
          people={people}
          bill={bill}
          tip={tip}
          customTip={customTip}
        />
      </div>
    </div>
  );
}

export default App;
