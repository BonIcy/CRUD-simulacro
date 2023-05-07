let url="http://localhost:4202/Factura"
export let getFactura = async ()=>{
    try{
        let response = await fetch(url)
        let data = await response.json()
        return data
    }catch(error){
        console.log(error);
    }

}