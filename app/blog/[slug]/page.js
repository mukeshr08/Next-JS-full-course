export default async function  slugFunction({params}){
    
    const {slug}= await params

    return (
        <>
        
        <h1>URL parameter : { slug}</h1>
        </>
    )
}