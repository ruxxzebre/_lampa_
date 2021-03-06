import knex from 'knex';
import Joi from 'joi';
import { dbConfig } from '../config';
const { attachPaginate } = require('knex-paginate');

const database = knex(dbConfig);
attachPaginate();

export interface IAd {
  id?: number;
  title: string;
  description: string;
  price: number;
  photos: string[];
}

export const validateAds = (doc: any) => {
  const schema = Joi.object({
    id: Joi.number(),
    title: Joi.string().max(200, 'utf8').required(),
    description: Joi.string().max(1000, 'utf8').required(),
    price: Joi.number().required(),
    photos: Joi.array().allow(Joi.link()).max(3).required(),
  });
  return schema.validate(doc);
};

export const isAd = (doc: any): doc is IAd => {
  const isStr = (a: any) => typeof a === 'string';
  const isNum = (a: any) => typeof a === 'number';
  const isStrArr = (a: any) => {
    if (!Array.isArray(a)) return false;
    return !!a.filter((b) => typeof b === 'string').length;
  };
  return doc &&
      isStr(doc.title) && isStr(doc.description)
      && isNum(doc.price) && isStrArr(doc.photos)
};

export const Ad = {
  getOne: (id: number) => {
    return database('ads').select('*').where({ id });
  },
  getList: (page: number, limit: number) => {
    // @ts-ignore
    return database('ads').paginate({
      perPage: limit,
      currentPage: page,
    });
  },
  createOne: (doc: IAd) => {
    // @ts-ignore
    doc.photos = doc.photos.join(',');
    return database('ads').insert(doc);
  }
};

export default Ad;
