import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import BDaddress from "./components/BDaddress/BDaddress";
import CoinDetails from "./components/CoinDetails/CoinDetails";
import Coins from "./components/Coins/Coins";
import Contact from "./components/Contact/Contact";
import HomePage from "./components/HomePage/HomePage";
import NotFound from "./components/NotFound/NotFound";
import USaddress from "./components/USaddress/USaddress";
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
          path: '/coin-details/:id',
          loader: ({ params }) => fetch(`https://api.coingecko.com/api/v3/coins/${params.id}`),
          element: <CoinDetails></CoinDetails>
        },
        {
          path: '/contact',
          element: <Contact></Contact>,
          children: [
            {
              path: '/contact/bd-address',
              element: <BDaddress></BDaddress>
            },
            {
              path: '/contact/us-address',
              element: <USaddress></USaddress>
            }
          ]
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
