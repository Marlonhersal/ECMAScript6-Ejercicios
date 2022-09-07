import fetch from 'node-fetch';
const reponse = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await reponse.json();
export {products};