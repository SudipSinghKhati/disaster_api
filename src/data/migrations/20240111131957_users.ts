import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").notNullable().unique().primary();
    table.string("full_name");
    table.string("email").unique();
    table.string("contact_number");
    table.string("image");
  });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users')
}
