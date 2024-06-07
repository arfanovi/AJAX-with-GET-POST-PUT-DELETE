 // GET request: 
        // Get Data 
        // POST request: Send Data
        // PUT request : Update existing data
        // DELETE request : Delete data   

    // GET 
    
    const req = new XMLHttpRequest();

    req.open('GET', 'https://reqres.in/api/users');

    req.addEventListener('load', function(){
        // console.log(req.responseText);
        // console.log(JSON.parse(req.responseText))

        // const res = JSON.parse(req.responseText);
        // console.log(res.data[0].id)

        if (req.status === 200 && req.readyState ===4 ){
            const res = JSON.parse(req.responseText);
            console.log(res.data[0].id)
        } else {
            throw new Error("Bad request")
        }
    })
    req.send();
    


  