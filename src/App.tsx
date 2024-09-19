//Dependencias externas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap-icons/font/bootstrap-icons.css';

//Internal Dependencies
import GlobalStyle, { Container } from './styles';
import Home from './pages/Home';
import store from './Redux/store';

const routes = createBrowserRouter([
  {
    path: `/`,
    element: <Home />,
  },
  // {
  //   path: `/new`,
  //   element: <Register />
  // }
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
