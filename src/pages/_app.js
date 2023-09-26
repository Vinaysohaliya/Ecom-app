import '@/styles/globals.css'
import { Provider } from 'react-redux';
import store from '../Redux/store';
import NavBar from './components/nav/nav';
import Search from './components/search';
import Footer from './components/footer';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <NavBar/>
        <Search/>
      <Component {...pageProps} />
      <Footer/>
    </Provider>
  );
}

