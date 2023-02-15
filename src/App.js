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
      errorElement: <NotFound></NotFound>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>
        },
        {
          path: '/coins',
          element: <Coins></Coins>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/about',
          element: <About></About>
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
