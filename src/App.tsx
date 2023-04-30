import './styles/styles.scss';
import Logo from './assets/logo.svg';
import InputPart from './components/InputPart';
import OutputPart from './components/OutputPart';

function App() {
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="card">
        <InputPart />
        <OutputPart />
      </div>
    </div>
  );
}

export default App;
