/* eslint-disable react/jsx-filename-extension */
function OutputPart() {
  return (
    <div className="output">
      <div className="line-wrapper">
        <div className="line-output">
          <div className="title-wrapper">
            <div className="title">Tip Amount</div>
            <div className="desc">/ person</div>
          </div>
          <div className="value">$4.27</div>
        </div>

        <div className="line-output">
          <div className="title-wrapper">
            <div className="title">Total</div>
            <div className="desc">/ person</div>
          </div>
          <div className="value">$32.79</div>
        </div>
      </div>
      <div className="btn reset">Reset</div>
    </div>
  );
}

export default OutputPart;
