import React from 'react';
import { DisplayProps } from '../types/types';

const Display: React.FC<DisplayProps> = ({
  calculatedTip,
  handleResetBtn,
  people,
  bill,
  tip,
  customTip,
}) => {
  return (
    <div className="output">
      <div className="line-wrapper">
        <div className="line-output">
          <div className="title-wrapper">
            <div className="title">Tip Amount</div>
            <div className="desc">/ person</div>
          </div>
          <div className="value">
            $
            {Number.isNaN(Number(calculatedTip) / Number(people)) ||
            Number(calculatedTip) / Number(people) === Infinity
              ? '0.00'
              : (calculatedTip / Number(people)).toFixed(2)}
          </div>
        </div>

        <div className="line-output">
          <div className="title-wrapper">
            <div className="title">Total</div>
            <div className="desc">/ person</div>
          </div>
          <div className="value">
            $
            {Number.isNaN(Number(bill) / Number(people)) ||
            Number(bill) / Number(people) === Infinity
              ? '0.00'
              : (Number(bill) / Number(people)).toFixed(2)}
          </div>
        </div>
      </div>
      {Number(bill || tip || customTip || people) > 0 ? (
        <button type="button" className="btn reset" onClick={handleResetBtn}>
          Reset
        </button>
      ) : (
        <button type="button" className="btn reset" disabled>
          Reset
        </button>
      )}
    </div>
  );
};

export default Display;
