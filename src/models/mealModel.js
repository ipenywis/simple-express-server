let mealsList = [
  { name: "Lazanya", type: "lunch", price: 20 },
  { name: "MilkShake", type: "breakfast", price: 8 }
];

exports.getListOfMeals = () => {
  return mealsList;
};

exports.addNewMeal = (name, type, price) => {
  mealsList.push({ name, type, price });
};

exports.getMeal = name => {
  for (let i = 0; i < mealsList.length; i++) {
    if (name == mealsList[i].name) {
      return mealsList[i];
    }
  }
  return null;
};
