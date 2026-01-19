
export default async function shoplslug({params}){
   
    const {slug}=await params
    return (
        <>
        <h1>My Post : {slug[0]}/{slug[1]}/{slug[2]}</h1>
        </>
    )
}