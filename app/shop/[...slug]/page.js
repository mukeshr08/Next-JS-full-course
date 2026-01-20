
export default async function shoplslug({params}){
   
    const {slug}=await params
    return (
        <>
        <h1>My Post : {slug[1]}/{slug[0]}</h1>
        </>
    )
}