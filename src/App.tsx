//Dependencias externas
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Internal Dependencies
import Home from './pages/Home';
import store from './Redux/store';
import GlobalStyle, { Container } from './styles';
import Register from './pages/Register';

const routes = createBrowserRouter([
  {
    path: `/`,
    element: <Home />,
  },
  {
    path: `/newContact`,
    element: <Register />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  );
}

export default App;
