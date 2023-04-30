/* eslint-disable react/jsx-filename-extension */
function Display({ total, calculatedTip, handleResetBtn, people }) {
  const returnCurrencyAmt = (amt: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amt);
  };
  return (
    <div className="output">
      <div className="line-wrapper">
        <div className="line-output">
          <div className="title-wrapper">
            <div className="title">Tip Amount</div>
            <div className="desc">/ person</div>
          </div>
          <div className="value">
            {returnCurrencyAmt(`${calculatedTip / people || '0'}`)}
          </div>
        </div>

        <div className="line-output">
          <div className="title-wrapper">
            <div className="title">Total</div>
            <div className="desc">/ person</div>
          </div>
          <div className="value">
            {returnCurrencyAmt(`${total / people || '0'}`)}
          </div>
        </div>
      </div>
      {total ? (
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
}

export default Display;
