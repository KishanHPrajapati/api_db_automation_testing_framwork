import { createConnection } from '../config/db';

export async function getUserData(values: any[] = [] ) {
    const db = await createConnection();
    try {
        const result = await db.query( `SELECT * FROM users WHERE email = $1 and name = $2 and mobile = $3`, values);
        return result.rows
    } finally {
        await db.end();
    }
} 