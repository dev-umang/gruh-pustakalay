import { BookDTO } from "../models/books.model";

export const getUniqueId = (length: number = 16) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const getInitBook = (): BookDTO => {
  return {
    author: "",
    bookId: "",
    category: "",
    dateAdded: "",
    language: "",
    name: "",
    price: 0,
  };
};
