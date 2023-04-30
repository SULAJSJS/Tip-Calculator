import { useEffect, useState } from 'react';
import './styles/styles.scss';
import Logo from './assets/logo.svg';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [calculatedTip, setCalculatedTip] = useState<number>(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (Number(bill) > 0 && Number(people) > 0 && Number(tip) > 0) {
      setCalculatedTip((Number(bill) * (Number(tip) / 100)) / Number(people));
      setTotal(calculatedTip + Number(bill));
    }
  }, [bill, calculatedTip, people, tip]);

  const handleResetBtn = () => {
    setBill(0);
    setTip(0);
    setPeople(0);
    setCalculatedTip(0);
    setTotal(0);
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
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
        />
        <Display
          total={total}
          calculatedTip={calculatedTip}
          handleResetBtn={handleResetBtn}
          people={people}
        />
      </div>
    </div>
  );
}

export default App;
