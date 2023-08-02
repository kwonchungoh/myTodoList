import { createGlobalStyle } from 'styled-components';
import './App.css';
import Templat from './components/Template';
import Header from './components/Header';
import {Provider} from './Reducer';
import List from './components/List';


// import Templat from './components/Templat';

function App() {
  const GlobalStyle = createGlobalStyle `
  body{
    background: skyblue;
  }`
  return (
    <Provider>

      <GlobalStyle />
      <Header />
      <List />
      <Templat />
    </Provider>
  );
}

export default App;

