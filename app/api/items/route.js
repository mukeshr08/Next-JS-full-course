export  async function GET(details) {
    const datavar = details.nextUrl.searchParams.get("details")
    return Response.json(
        [
            {Details:datavar,
            name:"Mukesh",
            regno:1108222104054}
        ]
    )
    
}
export async function POST(details) {
    const data= await details.json()
    console.log(data)
    
    return Response.json({message:"Post success",data})
    


    
}