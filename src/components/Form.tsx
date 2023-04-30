import React from 'react';
import Dollar from '../assets/icon-dollar.svg';
import Person from '../assets/icon-person.svg';

const list = [
  {
    id: 1,
    value: 5,
  },
  {
    id: 2,
    value: 10,
  },
  {
    id: 3,
    value: 15,
  },
  {
    id: 4,
    value: 25,
  },
  {
    id: 5,
    value: 50,
  },
];

interface Item {
  id: number;
  value: number;
}

interface FormProps {
  bill: number;
  setBill: (item: number) => void;
  tip: number;
  setTip: (item: number) => void;
  people: number;
  setPeople: (item: number) => void;
}

const Form: React.FC<FormProps> = ({
  bill,
  setBill,
  tip,
  setTip,
  people,
  setPeople,
}) => {
  const handleSelectedTip = (item: Item) => {
    setTip(Number(item.value));
  };
  const handleSelectedCustom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTip(Number(e.target.value));
  };

  return (
    <div className="input">
      <div className="bill-container">
        <div className="label-wrapper">
          <label htmlFor="inp-bill">Bill</label>
        </div>
        <div className="inp-wrapper">
          <input
            className="inp-text"
            type="number"
            name="inp-bill"
            id="inp-bill"
            placeholder="0.0"
            onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
              setBill(Number(+event.target.value))
            }
            value={bill}
          />
          <img src={Dollar} alt="dollar-icon" />
        </div>
      </div>
      <div className="tip-container">
        <div className="label-wrapper">
          <label htmlFor="inp-tip">Select Tip %</label>
        </div>
        <div className="btn-wrapper">
          {list?.map((item) => (
            <div
              onClick={() => handleSelectedTip(item)}
              onKeyUp={() => handleSelectedTip(item)}
              role="textbox"
              tabIndex={0}
              key={item.id}
              className="btn tip"
            >
              {item.value}%
            </div>
          ))}
          <input
            className="inp-text"
            type="text"
            name="inp-tip"
            id="inp-tip"
            placeholder="Custom"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSelectedCustom(e)
            }
            value={tip}
          />
        </div>
      </div>
      <div className="people-container">
        <div className="label-wrapper">
          <label htmlFor="inp-people">Number of People</label>
          <div className="error-msg">{people === 0 ? "Can't be zero" : ''}</div>
        </div>
        <div className="inp-wrapper">
          <input
            className="inp-text"
            type="number"
            name="inp-people"
            id="inp-people"
            placeholder="1"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPeople(Number(+e.target.value))
            }
            value={people}
          />
          <img src={Person} alt="person-icon" />
        </div>
      </div>
    </div>
  );
};

export default Form;
