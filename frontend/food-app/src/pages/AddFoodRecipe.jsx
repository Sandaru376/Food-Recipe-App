/* import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddFoodRecipe() {
  const [recipeData, setRecipeData] = useState({});
  const navigate = useNavigate();

  const onHandleChange = (e) => {
    let val = (e.target.name === "ingredients") 
      ? e.target.value.split(",") 
      : (e.target.name === "file") 
      ? e.target.files[0] 
      : e.target.value;
    setRecipeData(pre => ({ ...pre, [e.target.name]: val }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in recipeData) {
      formData.append(key, recipeData[key]);
    }

    await axios.post("http://localhost:5000/recipes", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(() => navigate("/"));
  };

  return (
    <div className="container">
      <form className="form" onSubmit={onHandleSubmit}>
        <div className="form-control">
          <label>Title</label>
          <input type="text" className="input" name="title" onChange={onHandleChange} />
        </div>
        <div className="form-control">
          <label>Time</label>
          <input type="text" className="input" name="time" onChange={onHandleChange} />
        </div>
        <div className="form-control">
          <label>Ingredients</label>
          <textarea className="input-textarea" name="ingredients" rows="5" onChange={onHandleChange}></textarea>
        </div>
        <div className="form-control">
          <label>Instructions</label>
          <textarea className="input-textarea" name="instructions" rows="5" onChange={onHandleChange}></textarea>
        </div>
        <div className="form-control">
          <label>Recipe Image</label>
          <input type="file" className="input" name="file" onChange={onHandleChange} />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}
  

 */


import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddFoodRecipe() {
  const [recipeData, setRecipeData] = useState({});
  const navigate = useNavigate();

  const onHandleChange = (e) => {
    let val = e.target.value;
    if (e.target.name === "ingredients") {
      val = e.target.value.split(",").map(i => i.trim()).filter(i => i);
    } else if (e.target.name === "file") {
      val = e.target.files[0];
    }
    setRecipeData(pre => ({ ...pre, [e.target.name]: val }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in recipeData) {
      formData.append(key, recipeData[key]);
    }

    try {
      await axios.post("http://localhost:5000/recipe", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add recipe");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={onHandleSubmit}>
        <div className="form-control">
          <label>Title</label>
          <input
            type="text"
            className="input"
            name="title"
            onChange={onHandleChange}
            value={recipeData.title || ""}
            required
          />
        </div>
        <div className="form-control">
          <label>Time</label>
          <input
            type="text"
            className="input"
            name="time"
            onChange={onHandleChange}
            value={recipeData.time || ""}
          />
        </div>
        <div className="form-control">
          <label>Ingredients (comma separated)</label>
          <textarea
            className="input-textarea"
            name="ingredients"
            rows="5"
            onChange={onHandleChange}
            value={recipeData.ingredients ? recipeData.ingredients.join(", ") : ""}
            required
          ></textarea>
        </div>
        <div className="form-control">
          <label>Instructions</label>
          <textarea
            className="input-textarea"
            name="instructions"
            rows="5"
            onChange={onHandleChange}
            value={recipeData.instructions || ""}
            required
          ></textarea>
        </div>
        <div className="form-control">
          <label>Recipe Image</label>
          <input
            type="file"
            className="input"
            name="file"
            onChange={onHandleChange}
            required
          />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}
