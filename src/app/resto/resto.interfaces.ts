export interface RestorantInterface {
  title:    string;
  photo:    string,
  data:     RecipeGroupInterface[];
}

export interface RecipeGroupInterface {
  itemUuids:   string[];
  title:       string;
  uuid:        string;
  displayType: null;
  recipes:     RecipeInterface[];
}

export interface RecipeInterface {
  description:       string;
  imageUrl:          string;
  price:             number;
  title:             string;
  uuid:              string;
}