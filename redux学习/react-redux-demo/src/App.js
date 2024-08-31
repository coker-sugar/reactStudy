import './App.css';
import store from './store/index'
import ComA from './pages/ComA';
import ComB from './pages/ComB';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComA />
        <ComB />
      </div>
    </Provider>
  );
}

export default App;
