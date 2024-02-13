import { Provider } from 'react-redux';
import './App.css';
import WaterTankInfo from './components/WaterTankInfo';
import { store } from './store/reduxStore';

function App() {
  return (
    <Provider store={store}>     
    <div className="App">
      <WaterTankInfo />
    </div>
    </Provider>
  );
}

export default App;
