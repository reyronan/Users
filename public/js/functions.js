function checkStateAndRender() {
    if(state.data.length > 0) {
        $table.empty();
        $table.append(`
        <table>
        <tr>
            <th>Username</th>
            <th>Email</th>
        </tr>
        <tr>
        
    </tr>
    </table>
        `);
        //get data into string tags
        const mapUserValues = state.data.map((o)=>{
            return `<tr><td id={${o._id}}>${o.username}</td><td>${o.email}</td></tr>`
        })
        $('table').append(mapUserValues);
        
    }
    else {
        $table.append('<h2>No data to Show</h2>');
    }  
}   
 