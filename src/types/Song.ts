import type { Category } from "./Category";

export type Song = {
  id: string;
  favorite ? : boolean;
  title: string;
  categoria: Category;
  autor: string;
  time: string;
  src: string;
};