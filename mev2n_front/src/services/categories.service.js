import { request } from './generic.service';

const getCategory = _id => request({ url: `categories/${_id}`, method: 'get' });

const getCategories = () => request({ url: `categories`, method: 'get' });

export { getCategory, getCategories };
