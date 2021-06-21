const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar");
const closeMenuButton = document.querySelector(".close-bt");

menuButton.addEventListener("click", (event) => {
    menu.classList.toggle("is-open");

})

closeMenuButton.addEventListener("click", (event) => {
    menu.classList.toggle("is-open");

})


var GetRequest = null;

async function sendGetRequest(method, URL) {
    const headers = {
        'Content-Type': 'application/json'
    };
    return fetch(URL).then(response => {
        return response.json()
    })
}

document.querySelector('.vac2').onload = async function () {
    GetRequest = await sendGetRequest('GET', 'http://127.0.0.1:3000/vac')
    console.log(GetRequest)
    document.querySelector('.vac').innerHTML = `
<table class="table table-primary"><thead>
                    <tr>
                      <th scope="col">Профессия</th>
                      <th scope="col">Компания</th>
                      <th scope="col">Заработная плата</th>
                      <th scope="col">Необходимый стаж</th>
                      <th scope="col">Место работы</th>
                      <th scope="col"> Телефон</th>
                    </tr>
                </thead>
</table>`

    for (let i = 0; i < GetRequest.length; i++) {
        document.querySelector('.vac').innerHTML += `
            <table class="table table-striped">
                  <tbody>
                        <tr>
                            <td class="td2">
                                ${GetRequest[i].name}
                            </td>
                            <td class="td2">
                                ${GetRequest[i].rabotadatel}
                            </td>
                            <td class="td2">
                                ${GetRequest[i].sp}
                            </td>
                            <td class="td2">
                                ${GetRequest[i].stag}
                            </td>
                            <td class="td2">
                                ${GetRequest[i].place}
                            </td>
                            <td class=" td2">
                                ${GetRequest[i].number}
                            </td>
                        </tr>
                  </tbody>
            </table>
`
    }

}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}

let login = document.querySelector("#login").onclick = async function () {
    let login_t = document.querySelector("#login_text").value
    let login_p = document.querySelector("#password_text").value

    console.log(login_t)
    console.log(login_p)

    let data = await axios.get(`http://127.0.0.1:3000/login/${login_t}/${login_p}`)
    console.log(data)
    if (data.data.succes == false) {
        alert('Ошибка авторизации')
    } else {
        alert('Добро пожаловать')
    }
};

let register = document.querySelector("#register").onclick = function () {
    let login_t = document.querySelector("#login_text2").value
    let login_p = document.querySelector("#password_text2").value

    postData('http://127.0.0.1:3000/register', {
        login: login_t,
        password: login_p
    })
        .then((data) => {
            console.log(data);
        });

};