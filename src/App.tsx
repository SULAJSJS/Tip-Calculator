import { useEffect, useState } from 'react';
import './styles/styles.scss';
import Logo from './assets/logo.svg';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [people, setPeople] = useState('');
  const [calculatedTip, setCalculatedTip] = useState<number>(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (Number(bill) > 0 && Number(people) > 0 && Number(tip) > 0) {
      setCalculatedTip((Number(bill) * (Number(tip) / 100)) / Number(people));
      setTotal(calculatedTip + Number(bill));
    }
  }, [bill, calculatedTip, people, tip]);

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
        <Display />
      </div>
    </div>
  );
}

export default App;
