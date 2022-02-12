import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import { Provider } from 'react-redux';
import theme from "./theme";
import store from './redux/store';

import Home from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset/>
        <Home/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
