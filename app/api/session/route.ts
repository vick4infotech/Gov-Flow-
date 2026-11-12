import {NextResponse} from 'next/server';
import {passwordMatches,signInCookie,signOutCookie,isAuthorized} from '@/lib/auth';
export const runtime='nodejs';
export async function GET(){return NextResponse.json({authenticated:await isAuthorized()})}
export async function POST(req:Request){try{const {password}=await req.json();if(typeof password!=='string'||!passwordMatches(password))return NextResponse.json({error:'Invalid credentials'},{status:401});await signInCookie();return NextResponse.json({authenticated:true})}catch{return NextResponse.json({error:'Sign-in unavailable'},{status:503})}}
export async function DELETE(){await signOutCookie();return NextResponse.json({authenticated:false})}
