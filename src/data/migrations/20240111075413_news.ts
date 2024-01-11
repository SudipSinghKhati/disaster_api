import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('news',(table) =>{
        table.increments('id').notNullable().primary().unique();
        table.string('title');
        table.string('description');
        table.string('image');

    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('news')
}

