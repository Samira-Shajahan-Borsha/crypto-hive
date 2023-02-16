import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Coins from "./components/Coins/Coins";
import Contact from "./components/Contact/Contact";
import HomePage from "./components/HomePage/HomePage";
import NotFound from "./components/NotFound/NotFound";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>
        },
        {
          path: '/coins',
          loader: () => fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'),
          element: <Coins></Coins>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '*',
          element: <NotFound></NotFound>
        }

      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
