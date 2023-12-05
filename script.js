async function searchMeal() {
  const searchInput = document.getElementById("searchInput").value.trim();
  const mealContainer = document.getElementById("mealContainer");
  mealContainer.innerHTML = ""; // Clear previous content

  if (searchInput !== "") {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    );
    const data = await response.json();

    const meals = data.meals.slice(0, 5); // Show only the first 5 results

    meals.forEach((meal) => {
      const mealDiv = document.createElement("div");
      mealDiv.classList.add("meal");
      mealDiv.innerHTML = `
          <h3>${meal.strMeal}</h3>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <p>${meal.strCategory}</p>
        `;
      mealContainer.appendChild(mealDiv);
    });
  }
}
