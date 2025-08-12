import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

export default function RecipeItem() {
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/recipe")
      .then(res => setAllRecipes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card-container">
      {allRecipes.length > 0 ? (
        allRecipes.map((item, index) => (
          <div className="card" key={index}>
            <img
              src={`http://localhost:5000/images/${item.coverImage}`}
              width="120"
              height="100"
              alt={item?.title || "Recipe image"}
            />
            <div className="card-body">
              <div className="title">{item?.title || "Untitled Recipe"}</div>
              <div className="icons">
                <div className="timer">
                  <BsFillStopwatchFill /> {item?.time || "30min"}
                </div>
                <FaHeart />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
}
