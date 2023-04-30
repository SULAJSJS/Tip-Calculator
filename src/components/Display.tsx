/* eslint-disable react/jsx-filename-extension */
function Display() {
  return (
    <div className="output">
      <div className="line-wrapper">
        <div className="line-output">
          <div className="title-wrapper">
            <div className="title">Tip Amount</div>
            <div className="desc">/ person</div>
          </div>
          <div className="value">1.00$</div>
        </div>

        <div className="line-output">
          <div className="title-wrapper">
            <div className="title">Total</div>
            <div className="desc">/ person</div>
          </div>
          <div className="value">4.00$</div>
        </div>
      </div>
      <button type="button" className="btn reset" disabled>
        Reset
      </button>
    </div>
  );
}

export default Display;
