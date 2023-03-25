export interface BookDTO {
  author: string;
  name: string;
  bookId: string;
  category: string;
  dateAdded: string;
  language: string;
  price: number;
  isFavourite?: boolean;
}
