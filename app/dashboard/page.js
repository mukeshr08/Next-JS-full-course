
"use client"
import {useRouter} from 'next/navigation'
export default function dashboard(){
    const route=useRouter();
    function goback(){
        route.push('/')
    }
    return (
        <>
        <button className="rounded border-black"  onClick={goback}>back</button>
       
        <h1>Dashboard page</h1>
        
         </>
    )
}