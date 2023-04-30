import './styles/styles.scss';
import Logo from './assets/logo.svg';
import Dollar from './assets/icon-dollar.svg';
import Person from './assets/icon-person.svg';
// import Logo from './assets/favicon-32x32.png';

function App() {
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="card">
        <div className="input">
          <div className="bill-container">
            <div className="label-wrapper">
              <label htmlFor="inp-bill">Bill</label>
            </div>

            <div className="inp-wrapper">
              <input
                className="inp-text"
                type="text"
                name="inp-bill"
                id="inp-bill"
                placeholder="0.0"
              />
              <img src={Dollar} alt="dollar-icon" />
            </div>
          </div>

          <div className="tip-container">
            <div className="label-wrapper">
              <label htmlFor="inp-tip">Select Tip %</label>
            </div>
            <div className="btn-wrapper">
              <div className="btn tip">5%</div>
              <div className="btn tip">10%</div>
              <div className="btn tip btn-active">15%</div>
              <div className="btn tip">25%</div>
              <div className="btn tip">50%</div>
              <input
                className="inp-text"
                type="text"
                name="inp-tip"
                id="inp-tip"
                placeholder="Custom"
              />
            </div>
          </div>

          <div className="people-container">
            <div className="label-wrapper">
              <label htmlFor="inp-people">Number of People</label>
              <div className="error-msg">Can't be zero</div>
            </div>

            <div className="inp-wrapper">
              <input
                className="inp-text"
                type="text"
                name="inp-people"
                id="inp-people"
                placeholder="1"
              />
              <img src={Person} alt="person-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
