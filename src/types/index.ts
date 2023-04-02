export interface Book {
  kind: string;
  id: string;
  selfLink?: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description?: string;
    categories?: string[];
    imageLinks?: {
      smallThumbnail?: string;
      thumbnail?: string;
      large?: string;
    };
  };
}

export interface BooksObj {
  kind?: string;
  items?: Book[];
  totalItems?: number;
}

export interface BooksState {
  booksKind: string;
  booksTotalItems: number;
  booksItems: Book[] | [];
  loading: boolean;
  error: string;
}

export interface OneBookState {
  data: any;
  loading: boolean;
  error: boolean;
}
