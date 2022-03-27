import './App.css';
import {Div, Sub, Mul, Sum} from './utilities';

function App() {
  return (
    <div>
      <h1>React-vj</h1>
      	<div>
          9 / 3 = {Div(9, 3)}
        </div>
        <div>
          3 * 3 = {Mul(3, 3)}
        </div>
        <div>
          6 + 3 = {Sum(6, 3)}
        </div>
        <div>
          6 - 3 = {Sub(6, 3)}
        </div>
    </div>
  );
}

export default App;
