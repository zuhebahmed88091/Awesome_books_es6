import { BookCollection } from './modules/books.js';
import { nav } from './modules/nav.js';
import { Date } from './modules/date.js';

Date();
nav();
const bookCollection = new BookCollection();
bookCollection.showBooks();
