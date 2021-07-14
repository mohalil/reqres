fetch('https://reqres.in/api/users?page=1').then(response =>
    response.json()).then(json => {
    console.log(json.data);
    document.getElementById('item1').addEventListener('click', () => {
        document.getElementById('item1').classList.add('active')
        const markup = json.data.map(Element => {
                return `
            <li class ="card-container">
                <a href="details.html?${Element.id}" >
                    <img class ="round" src="${Element.avatar}">
                <a>

            </li>
            `
            })
            // console.log(markup);
        document.querySelector('.list-container').innerHTML = markup.join('');
    })


})

fetch('https://reqres.in/api/users?page=2').then(response =>
    response.json()).then(json => {
    console.log(json.data);
    document.getElementById('item2').addEventListener('click', () => {

        const markup = json.data.map(element => {
            return `
            <li class ="card-container" >
                <a href="details.html?${element.id}" >
                    <img  class ="round" src="${element.avatar}">
                </a>

            </li>
            `
        })

        document.querySelector('.list-container').innerHTML = markup.join('');
    })
});