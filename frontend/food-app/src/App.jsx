/* import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import MainNavigation from './components/MainNavigation';
import axios from 'axios';
import AddFoodRecipe from './pages/AddFoodRecipe';

const getAllRecipes = async () => {
  try {
    const res = await axios.get('http://localhost:5000/recipes');
    return res.data;
  } catch (error) {
    console.error("Error fetching recipes:", error.message);
    return [];
  }
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainNavigation />,
    children: [
      { path: '/', element: <Home />, loader: getAllRecipes },
      { path: '/myRecipe', element: <Home /> },
      { path: '/favRecipe', element: <Home /> },
      { path: '/addRecipe', element: <AddFoodRecipe /> },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
 */

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import MainNavigation from './components/MainNavigation';
import axios from 'axios';
import AddFoodRecipe from './pages/AddFoodRecipe';

const getAllRecipes = async () => {
  try {
    const res = await axios.get('http://localhost:5000/recipe'); // <-- fixed URL here
    return res.data;
  } catch (error) {
    console.error("Error fetching recipes:", error.message);
    return [];
  }
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainNavigation />,
    children: [
      { path: '/', element: <Home />, loader: getAllRecipes },
      { path: '/myRecipe', element: <Home /> },
      { path: '/favRecipe', element: <Home /> },
      { path: '/addRecipe', element: <AddFoodRecipe /> },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
