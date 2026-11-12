import {SignJWT,jwtVerify} from 'jose';
import {cookies} from 'next/headers';
import {timingSafeEqual} from 'node:crypto';
const cookieName='workspace_session';
const key=()=>new TextEncoder().encode(process.env.SESSION_SECRET||'');
export function passwordMatches(attempt:string){const expected=process.env.ADMIN_PASSWORD||'';if(!expected || expected.length<12)return false;const a=Buffer.from(attempt),b=Buffer.from(expected);return a.length===b.length&&timingSafeEqual(a,b)}
export async function signInCookie(){if(key().length<32)throw new Error('SESSION_SECRET must be at least 32 characters');const token=await new SignJWT({role:'admin'}).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('8h').sign(key());(await cookies()).set(cookieName,token,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',maxAge:8*3600})}
export async function isAuthorized(){try{if(key().length<32)return false;const token=(await cookies()).get(cookieName)?.value;if(!token)return false;const {payload}=await jwtVerify(token,key());return payload.role==='admin'}catch{return false}}
export async function signOutCookie(){(await cookies()).delete(cookieName)}
