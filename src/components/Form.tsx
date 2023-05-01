import React from 'react';
import Dollar from '../assets/icon-dollar.svg';
import Person from '../assets/icon-person.svg';
import { FormProps } from '../types/types';

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

const Form: React.FC<FormProps> = ({
  bill,
  setBill,
  setTip,
  people,
  setPeople,
  customTip,
  setCustomTip,
  activeIndex,
  setActiveIndex,
}) => {
  const handleSelectedTip = (item: Item, idx: number) => {
    setTip(item.value);
    setActiveIndex(idx);
    setCustomTip('');
  };
  const handleSelectedCustom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomTip(e.target.value);
    setActiveIndex(5);
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
              setBill(Number(event.target.value))
            }
            value={bill === 0 ? '' : bill}
          />
          <img src={Dollar} alt="dollar-icon" />
        </div>
      </div>
      <div className="tip-container">
        <div className="label-wrapper">
          <label htmlFor="inp-tip">Select Tip %</label>
        </div>
        <div className="btn-wrapper">
          {list?.map((item, i) => (
            <div
              onClick={() => handleSelectedTip(item, i)}
              onKeyUp={() => handleSelectedTip(item, i)}
              role="textbox"
              tabIndex={0}
              key={item.id}
              className={activeIndex === i ? 'btn tip btn-active' : 'btn tip'}
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
            value={customTip}
          />
        </div>
      </div>
      <div className="people-container">
        <div className="label-wrapper">
          <label htmlFor="inp-people">Number of People</label>
          <div className="error-msg">
            {Number(people) === 0 ? "Can't be zero" : ''}
          </div>
        </div>
        <div className="inp-wrapper">
          <input
            className={Number(people) === 0 ? 'inp-people' : 'inp-text'}
            type="number"
            name="inp-people"
            id="inp-people"
            placeholder="1"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPeople(Number(e.target.value))
            }
            value={people === 0 || '' ? ' ' : people}
          />
          <img src={Person} alt="person-icon" />
        </div>
      </div>
    </div>
  );
};

export default Form;
