// Update with your config settings.

export const development = {
  client: "postgresql",
  connection: {
    database: "disater",
    user: "postgres",
    password: "9861",
    port: 5432,
    host: "localhost",
  },
  migrations: { directory: "../data/migrations" },
  seeds: { directory: "../data/seeds" },
};
