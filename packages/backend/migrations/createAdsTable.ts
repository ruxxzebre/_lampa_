import knex, { Knex } from "knex";
import { dbConfig } from "../config";
import CreateTableBuilder = Knex.CreateTableBuilder;

const database = knex(dbConfig);

export const createAdTable = () => {
    database.schema.createTable('ads', (table: CreateTableBuilder) => {
        table.increments('id');
        table.string('title');
        table.string('description');
        table.integer('price');
        table.string('photos');
    }).then((onfulfilled: void) => { console.log(onfulfilled); });
};

createAdTable();
