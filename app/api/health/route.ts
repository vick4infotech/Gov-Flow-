import {NextResponse} from 'next/server';
export async function GET(){return NextResponse.json({status:'ok',service:'govflow',databaseConfigured:!!process.env.DATABASE_URL})}
