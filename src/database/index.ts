/* import { DataSource } from "typeorm";

const dataSource = new DataSource({
    type: "postgres",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentalx",
    cli: {
        migrationsDir: "src/databases/migrations",
    },
    /* entities: [
        Category,
        // ...
    ],
    migrations: [
        CreateCategories1616082124654,
        // ...
    ], 
});

export { dataSource }; */

import { createConnection } from "typeorm";

createConnection();
