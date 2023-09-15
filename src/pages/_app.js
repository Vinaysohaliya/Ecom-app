import '@/styles/globals.css'
import { Provider } from 'react-redux';
import store from '../Redux/store';
import NavBar from './components/nav/nav';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <NavBar/>
      <Component {...pageProps} />
    </Provider>
  );
}

