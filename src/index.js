
// import ReactDOM from "react-dom";
// import App from "./App";



// // const data = paintings[0];
// // const data2 = paintings[1];

// // const elem1 = <span>Hello</span>;
// // const elem2 = <span>world</span>;

// // // const element = React.createElement('div', {
// // //   a: 5,
// // //   b: 10,
// // //   children: 'Hello world',
// // // });

// // const jsxElement = <div>\
// //   {elem1}
// //   {elem2}
// // </div>;

// // console.log(jsxElement);

// //==============================================================
// // const data = {
// //     "id": "id-1",
// //     "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
// //     "title": "Feathers. Art abstract",
// //     "price": 500,
// //     "author": {
// //       "tag": "ractapopulous",
// //       "url": "https://pixabay.com/users/ractapopulous-24766/"
// //     },
// //     "quantity": 10
// // };




// // const painting1 = (
// //   <div>
// //   <img src={data.url} alt={data.title} width="480" />
// //     <h2>{data.title}</h2>
// //     <p>
// //       Автор: <a href={data.author.url}>{data.author.tag}</a>
// //     </p>
// //   <p>Цена: {data.price} кредитов</p>
// //   <p>Доступность: заканчивается или есть в наличии</p>
// //   <button type="button">Добавить в корзину</button>
// //   </div>
// // );

// // const painting2 = (
// //  <div>
// //   <img src={data2.url} alt={data2.title} width="480" />
// //     <h2>{data2.title}</h2>
// //     <p>
// //       Автор: <a href={data2.author.url}>{data2.author.tag}</a>
// //     </p>
// //   <p>Цена: {data2.price} кредитов</p>
// //   <p>Доступность: заканчивается или есть в наличии</p>
// //   <button type="button">Добавить в корзину</button>
// //   </div>
// // );

// // const els = (
// //   {painting1}
// //   {painting2}
// // );

// //  <Painting
// //   url={painting.url}
// //   title={painting.title}
// //   author={painting.author.tag}
// //   profileUrl={painting.author.url}
// //   price={painting.price}
// // />

// // const painting = paintings[2];
// ReactDOM.render(<App />,document.querySelector('#root'));



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
