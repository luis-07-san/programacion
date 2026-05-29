function datos (){
    let informacion = [
        {
            nombre:"luis",
            edad:19,
            curp:"LUIJ190101HDFRRL09"
        },
        {
            nombre:"maria",
            edad:20,
            curp:"MARM200202MDFRRL08"
        },
        {
            nombre:"juan",
            edad:21,
            curp:"JUAN210303HDFRRL07"
        }
    ]
    informacion.map((info) => {
        console.log(`el nombre es ${info.nombre} y tengo ${info.edad} y su curp es ${info.curp}`);
    })
}

datos()