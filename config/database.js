module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "pg.norteverso.com"),
      port: env.int("DATABASE_PORT", 5050),
      database: env("DATABASE_NAME", "geseguros_dev"),
      user: env("DATABASE_USERNAME", "geseguros_admin_dev"),
      password: env("DATABASE_PASSWORD", "Panama1990#"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: env("DATABASE_SSL", false),
    },
    debug: false,
  },
});
