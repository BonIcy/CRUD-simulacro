export default {
    dataMyHeader(){
        localStorage.setItem(`myHeader`, JSON.stringify({
            title:{name: "Veterinaria"},
            cont:[
                {
                    name: "Mascotas",
                    href: "../pag_mascotas/index.html"
                },
                {
                    name: "Juguetes",
                    href: "../pag_juguetes/index.html"
                },
                {
                    name: "Factura",
                    href: "../pag_factura/index.html"
                }
            ]
        }))
    }
}