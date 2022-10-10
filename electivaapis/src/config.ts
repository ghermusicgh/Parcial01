//import { registerAs } from '@nestjs/config';

import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
    return {
        postgres: {
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASS,
            dbName: process.env.DATABASE_NAME,
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT),
        }
    }
});
/*export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT || 5432,
}));*/
