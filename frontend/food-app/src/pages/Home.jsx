import React from 'react';
import foodRecipe from '../assets/foodRecipe.jpg';
import RecipeItem from '../components/RecipeItem';
import { useNavigate, useOutletContext } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const { setIsOpen } = useOutletContext();

  const handleShareClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/addRecipe");
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <section className="home">
        <div className='left'></div>
        <h1>Food Recipe</h1>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit...</h5>
        <button onClick={handleShareClick}>Share your Recipe</button>
        <div className='right'>
          <img src={foodRecipe} width='320' height='300' alt="Food" />
        </div>
      </section>

      <div className='bg'></div>
      <div className='recipe'>
        <RecipeItem />
      </div>
    </>
  );
}
