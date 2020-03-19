import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "Schnitzel",
      imageUrl: "../../assets/icon/favicon.png",
      ingredients: ["French Fries", "Pork Meat", "Salad", "ChinChong", "China"]
    },
    {
      id: "r2",
      title: "Spaghetti",
      imageUrl: "../../assets/icon/favicon.png",
      ingredients: ["Spaghetti", "Pork Meat", "Tomatoes", "ChinChong", "China"]
    }
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
