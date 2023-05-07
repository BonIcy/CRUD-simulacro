let wsMyHeader ={
    listTitle(p1){
        return`
        <h1 style="font-size: 3rem; margin:0;">${p1.name}</h1>`
    },
    listCont(p1){
        let plantilla="";
        p1.forEach((val,id)=>{
            plantilla+=`
            <li><a href="${val.href}">${val.name}</a></li>`
        })
        return plantilla;
    }
}
self.addEventListener("message",(e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));
})