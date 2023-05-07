let url="http://localhost:4202/Juguetes"
export let getToys = async ()=>{
    try{
        let response = await fetch(url)
        let data = await response.json()
        return data
    }catch(error){
        console.log(error)
    }
   
}