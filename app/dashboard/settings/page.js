"use client"
import { useRouter } from "next/navigation"

export default function settings(){
    const route=useRouter();
    function goback(){
        route.push('/dashboard')
    }
    return (
        <>
       
        <button onClick={goback}>back</button>
        <h1>settings page</h1>
         </>
    )
}