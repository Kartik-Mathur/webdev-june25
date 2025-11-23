function overload(){
    let url = 'https://meowfacts.herokuapp.com/';

    for(let i = 0; i < 100; i++){
        fetch(url)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
    }
}