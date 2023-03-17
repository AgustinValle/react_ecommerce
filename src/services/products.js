import instance from '../api';

const path = '/products'

export function getAllProducts() {
  return instance.get(`${path}`);
}

export function getProductById(id) {
  return instance.get(`${path}/${id}`);
}

export function getProductByCategory(category) {
  return instance.get(`${path}/category/${category}`);
}

export function getProductByName(name) {
  return instance.get(`${path}/search?q=${name}`);
}

export function getCategories() {
  return instance.get(`${path}/categories`);
}