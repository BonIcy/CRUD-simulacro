let url="http://localhost:4202/Mascotas"
export let getPets = async()=>{    
    try{
        let response = await fetch(url)
        let veterinaria = await response.json()
        return veterinaria
        
    }catch(error){
        console.log(error);
    }
}
export let newPet = async (pet)=>{
    try{
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)})
    }catch(error){
        console.log(error)
    }
}
export let deletePet = async (id) =>{
    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href= "../pag_mascotas/index.html"
    }catch(error){
        console.log(error)
    }
}