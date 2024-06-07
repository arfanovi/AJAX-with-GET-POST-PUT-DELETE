 // GET request: 
        // Get Data 
        // POST request: Send Data
        // PUT request : Update existing data
        // DELETE request : Delete data   

    // GET 
    /*
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
    */


    // POST 

    /*
    const newUser = {
        name: "ARfan H Ovi",
        phone: '01717700926',

    }
    const req = new XMLHttpRequest();

    req.open('POST', 'https://reqres.in/api/users')
    req.setRequestHeader('Content-Type', 'application/json')

    req.addEventListener('load', function(){
        if (req.status === 201 && req.readyState === 4 ){
            const res = JSON.parse(req.responseText);
            console.log(res)
        } else {
            throw new Error("Bad Send")
        }
    })
    req.send(JSON.stringify(newUser));
    */


    // PUT 
    const newUser = {
        name: "Ovi",
        study: "GUB",
    }

    const req = new XMLHttpRequest();
    req.open('PUT', 'https://reqres.in/api/users/2');

    req.setRequestHeader('Content-Type', 'application/json');

    req.addEventListener('load', function() {
        if (req.status === 200 && req.readyState === 4) {
            const res = JSON.parse(req.responseText);
            console.log(res)
        } else {
            throw new Error('Bad PUT')
        }
    })

    req.send(JSON.stringify(newUser))