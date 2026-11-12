import {neon} from '@neondatabase/serverless';
export type RecordRow={id:string;title:string;detail:string;location:string;value:number;status:string;created_at:string;updated_at:string};
export const configured=Boolean(process.env.DATABASE_URL);
export function sql(){if(!process.env.DATABASE_URL)throw new Error('Database is not configured');return neon(process.env.DATABASE_URL)}
export async function getRecords(){const db=sql();return await db`SELECT * FROM records ORDER BY created_at DESC LIMIT 300` as RecordRow[]}
