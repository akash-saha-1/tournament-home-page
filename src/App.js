import { Provider } from 'react-redux';
import store from './Redux/Store';
import HomePage from './HomePage';

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
