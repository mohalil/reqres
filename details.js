let getsearch = document.location.search;
let getid = getsearch.substring(1);
console.log(getid);
if (getid == 1) {
    fetch('https://reqres.in/api/users/1').then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
        let cont = `
            <li class ="card-container">
                <div class="image-container">
                    <img class ="round" src="${json.data.avatar}">
                </div>
                <div class ="name-container">
                <span class="firstName">${json.data.first_name}</span>
                <span class="lastName">${json.data.last_name}</span>
            </div>
            <p class="email">${json.data.email}</p>
            </li>
     
            `
        console.log(json.data.first_name);
        document.querySelector('.list-container').innerHTML = cont


    })
}
if (getid == 2) {
    fetch('https://reqres.in/api/users/2').then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
        let cont = `
            <li class ="card-container">
                <div class="image-container">
                    <img class ="round" src="${json.data.avatar}">
                </div>
                <div class ="name-container">
                <span class="firstName">${json.data.first_name}</span>
                <span class="lastName">${json.data.last_name}</span>
            </div>
            <p class="email">${json.data.email}</p>
            </li>
     
            `
        console.log(json.data.first_name);
        document.querySelector('.list-container').innerHTML = cont


    })
}
if (getid == 3) {
    fetch('https://reqres.in/api/users/3').then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
        let cont = `
            <li class ="card-container">
                <div class="image-container">
                    <img class ="round" src="${json.data.avatar}">
                </div>
                <div class ="name-container">
                <span class="firstName">${json.data.first_name}</span>
                <span class="lastName">${json.data.last_name}</span>
            </div>
            <p class="email">${json.data.email}</p>
            </li>
     
            `
        console.log(json.data.first_name);
        document.querySelector('.list-container').innerHTML = cont


    })
}
if (getid == 4) {
    fetch('https://reqres.in/api/users/4').then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
        let cont = `
            <li class ="card-container">
                <div class="image-container">
                    <img class ="round" src="${json.data.avatar}">
                </div>
                <div class ="name-container">
                <span class="firstName">${json.data.first_name}</span>
                <span class="lastName">${json.data.last_name}</span>
            </div>
            <p class="email">${json.data.email}</p>
            </li>
     
            `
        console.log(json.data.first_name);
        document.querySelector('.list-container').innerHTML = cont


    })
}
if (getid == 5) {
    fetch('https://reqres.in/api/users/5').then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
        let cont = `
            <li class ="card-container">
                <div class="image-container">
                    <img class ="round" src="${json.data.avatar}">
                </div>
                <div class ="name-container">
                <span class="firstName">${json.data.first_name}</span>
                <span class="lastName">${json.data.last_name}</span>
            </div>
            <p class="email">${json.data.email}</p>
            </li>
     
            `
        console.log(json.data.first_name);
        document.querySelector('.list-container').innerHTML = cont


    })
}
if (getid == 6) {
    fetch('https://reqres.in/api/users/6').then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
        let cont = `
            <li class ="card-container">
                <div class="image-container">
                    <img class ="round" src="${json.data.avatar}">
                </div>
                <div class ="name-container">
                <span class="firstName">${json.data.first_name}</span>
                <span class="lastName">${json.data.last_name}</span>
            </div>
            <p class="email">${json.data.email}</p>
            </li>
     
            `
        console.log(json.data.first_name);
        document.querySelector('.list-container').innerHTML = cont


    })
}
if (getid == 7) {
    fetch('https://reqres.in/api/users/7').then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
        let cont = `
            <li class ="card-container">
                <div class="image-container">
                    <img class ="round" src="${json.data.avatar}">
                </div>
                <div class ="name-container">
                <span class="firstName">${json.data.first_name}</span>
                <span class="lastName">${json.data.last_name}</span>
            </div>
            <p class="email">${json.data.email}</p>
            </li>
     
            `
        console.log(json.data.first_name);
        document.querySelector('.list-container').innerHTML = cont


    })
}
if (getid == 8) {
    fetch('https://reqres.in/api/users/8').then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
        let cont = `
            <li class ="card-container">
                <div class="image-container">
                    <img class ="round" src="${json.data.avatar}">
                </div>
                <div class ="name-container">
                <span class="firstName">${json.data.first_name}</span>
                <span class="lastName">${json.data.last_name}</span>
            </div>
            <p class="email">${json.data.email}</p>
            </li>
     
            `
        console.log(json.data.first_name);
        document.querySelector('.list-container').innerHTML = cont


    })
}
if (getid == 9) {
    fetch('https://reqres.in/api/users/9').then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
        let cont = `
            <li class ="card-container">
                <div class="image-container">
                    <img class ="round" src="${json.data.avatar}">
                </div>
                <div class ="name-container">
                <span class="firstName">${json.data.first_name}</span>
                <span class="lastName">${json.data.last_name}</span>
            </div>
            <p class="email">${json.data.email}</p>
            </li>
     
            `
        console.log(json.data.first_name);
        document.querySelector('.list-container').innerHTML = cont


    })
}
if (getid == 10) {
    fetch('https://reqres.in/api/users/10').then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
        let cont = `
            <li class ="card-container">
                <div class="image-container">
                    <img class ="round" src="${json.data.avatar}">
                </div>
                <div class ="name-container">
                <span class="firstName">${json.data.first_name}</span>
                <span class="lastName">${json.data.last_name}</span>
            </div>
            <p class="email">${json.data.email}</p>
            </li>
     
            `
        console.log(json.data.first_name);
        document.querySelector('.list-container').innerHTML = cont


    })
}
if (getid == 11) {
    fetch('https://reqres.in/api/users/11').then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
        let cont = `
            <li class ="card-container">
                <div class="image-container">
                    <img class ="round" src="${json.data.avatar}">
                </div>
                <div class ="name-container">
                <span class="firstName">${json.data.first_name}</span>
                <span class="lastName">${json.data.last_name}</span>
            </div>
            <p class="email">${json.data.email}</p>
            </li>
     
            `
        console.log(json.data.first_name);
        document.querySelector('.list-container').innerHTML = cont


    })
}
if (getid == 12) {
    fetch('https://reqres.in/api/users/12').then(response => {
        return response.json();
    }).then(json => {
        console.log(json);
        let cont = `
            <li class ="card-container">
                <div class="image-container">
                    <img class ="round" src="${json.data.avatar}">
                </div>
                <div class ="name-container">
                <span class="firstName">${json.data.first_name}</span>
                <span class="lastName">${json.data.last_name}</span>
            </div>
            <p class="email">${json.data.email}</p>
            </li>
     
            `
        console.log(json.data.first_name);
        document.querySelector('.list-container').innerHTML = cont


    })
}