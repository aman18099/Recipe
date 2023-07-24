const Recipe = ({ title, calories, source, ingredients, type, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
      <p>{source}</p>
      <p>{type}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
