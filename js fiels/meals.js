const searchMeals = () => {
  const searchField = document.getElementById("search-field");
  const search = searchField.value;

  meals(search);
};

const meals = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals , 6));
};
const displayMeals = (mealsData, limit ) => {
  // console.log(mealsData);

  const mealsSection = document.getElementById("meals-section");
  mealsSection.innerHTML = "";

  const mealsToDisplay = limit ? mealsData.slice(0, limit) : mealsData;

  mealsToDisplay.forEach((meal, index) => {
    // console.log(meal);

    const mealsDiv = document.createElement("div");
    mealsDiv.innerHTML = `
        <div class="grid grid-cols-2  border border-solid border-gray-400 rounded-lg ">
        <div>
        <img src='${meal.strMealThumb}' class="rounded-lg h-full w-full" alt="">
        </div>
        <div class="p-6">
        <h3 class="text-2xl font-semibold">${meal.strMeal}</h3>
        <p class="my-5">${meal.strArea}</p>
        <div>


        <button class="text-orange-500 text-lg font-semibold underline" onclick="openModal('my_modal_${index}')">View Details</button>
        <dialog id="my_modal_${index}" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-2xl"> ${meal.strMeal}</h3> <hr class = "border-t-1 border-red-400">
          <img src='${meal.strMealThumb}' class="rounded-xl h-full w-full py-4 " alt="">
          <p class=" font-semibold ">Category : ${meal.strCategory}</p>
          <p class="py-2 font-semibold ">Cuisine : ${meal.strArea}</p>
          <p><span class = "font-semibold text-xl">Instructions :</span> AThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <a class = "text-red-400 text-xl font-semibold" href="${meal.strYoutube}">View our YouTube Channel</a>
          <div class="modal-action">
            <form method="dialog">
              <button class=" bg-red-500 text-white font-semibold px-5 py-3 rounded-xl">Close</button>
            </form>
          </div>
        </div>
      </dialog>
        </div>
        </div>
        
        </div>
        `;
    mealsSection.appendChild(mealsDiv);
  });
};
const showDetails = (meal) => {
  console.log(meal);
};
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.showModal();
}

const showAllBtn = document.getElementById("show-all-btn");
showAllBtn.addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const search = searchField.value;

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));

    
});
