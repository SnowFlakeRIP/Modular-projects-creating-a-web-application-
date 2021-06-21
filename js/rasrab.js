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

let login = document.querySelector("#login").onclick = async function() {
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

let register = document.querySelector("#register").onclick = function(){
    let login_t = document.querySelector("#login_text2").value
    let login_p = document.querySelector("#password_text2").value

    postData('http://127.0.0.1:3000/register', {login: login_t,
        password: login_p})
        .then((data) => {
            console.log(data);
        });

};