export interface IUser {
  email: string;
  password: string;
}
export interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

export interface Book {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  email?: string | null;
}
