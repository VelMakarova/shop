import coatsImg from '../assets/products/Rectangle156.jpg';
import sweatersImg from '../assets/products/Rectangle180.jpg';
import accessoriesImg from '../assets/products/Rectangle179.jpg';
import tShortsImg from '../assets/products/Rectangle176.jpg';
import shoesImg from '../assets/products/Rectangle175.jpg';
import jeansImg from '../assets/products/Rectangle171.jpg';

export const filters = {
  size: ['xs', 's', 'm', 'l', 'xl'],
  color: ['white', 'black', 'blue', 'beige', 'red', 'pink', 'gray', 'multicolor'],
};

export const categoriesSlides = [
  {
    name: 'outerwear',
    img: coatsImg,
    link: 'coats',
  },
  {
    name: 'sweaters',
    img: sweatersImg,
    link: 'sweaters',
  },
  {
    name: 't-shorts',
    img: tShortsImg,
    link: 't-shorts',
  },
  {
    name: 'jeans',
    img: jeansImg,
    link: 'jeans',
  },
  {
    name: 'accessorises',
    img: accessoriesImg,
    link: 'accessorises',
  },
  {
    name: 'shoes',
    img: shoesImg,
    link: 'shoes',
  },
];
