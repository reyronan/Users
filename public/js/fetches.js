function fetchUsers() {
     fetch('http://localhost:8081/data')
    .then((res)=> {return res.json()})
    .then((res)=>{
        state.data = res.data;
        console.log("state",state);
        checkStateAndRender();
    })
    .catch((e)=> console.log(e))
}