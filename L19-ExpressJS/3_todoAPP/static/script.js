fetch('/todos')
    .then((res)=>res.json())
    .then(data=>{
        console.log(data);
    }) 