class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imgUrl,
    duration,
    ingredients,
    steps,
    inGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.affordability = affordability;
      this.complexity = complexity;
      this.imgUrl = imgUrl;
      this.duration = duration;
      this.ingredients = ingredients;
      this.steps = steps;
      this.inGlutenFree = inGlutenFree;
      this.isVegan = isVegan;
      this.isVegetarian = isVegetarian;
      this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
