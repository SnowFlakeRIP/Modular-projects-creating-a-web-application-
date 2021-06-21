const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar");
const closeMenuButton = document.querySelector(".close-bt");
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 324,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    },

})


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
        document.querySelector("#voity").hidden = true
        document.querySelector("#reg").hidden = true
        document.querySelector("#main288").innerHTML = `<a href="#" type="button" id="exit"
                   class="button button-primary">Выйти</a>`
        document.querySelector('#vac').innerHTML = `<div><h2 class="section-title">Свежие вакансии</h2>
<div class="offer d-flex align-items-center flex-column flex-lg-row">
                <div class="offer-image mb-4 mb-lg-0">
                <img src="./img/frontendImg.png" alt="1" class="vac-log-img" >
                </div>
                <div class="offer-title mb-4 mb-lg-0">
                    <h3 class="offer-heading">Frontend разработчик</h3>
                    <span class="offer-place">Евраз, Нижний Тагил</span>
                </div>
                <span class="saraty mb-4 mb-lg-0">45 000 р</span>
                <div class="tags-group">
                    <span class="tags-label">Требования:</span>
                    <a href="#" class="tag">
                        React
                    </a>
                    <a href="#" class="tag">
                        Git
                    </a>
                    <a href="#" class="tag">
                        SASS
                    </a>
                </div>
                <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal3" id="about1" class="more mt-5 mt-lg-0">Поподробнее →</a>
            </div>
            <div class="offer d-flex align-items-center flex-column flex-lg-row">
                <div class="offer-image mb-4 mb-lg-0"><img class="vac-log-img" src="./img/sber.png" alt=""></div>
                <div class="offer-title mb-4 mb-lg-0">
                    <h3 class="offer-heading">Дизайнер</h3>
                    <span class="offer-place">Сбербанк, Нижний Тагил</span>
                </div>
                <span class="saraty mb-4 mb-lg-0">35 000 р</span>
                <div class="tags-group">
                    <span class="tags-label">Требования:</span>
                    <a href="#" class="tag">
                        React
                    </a>
                    <a href="#" class="tag">
                        Git
                    </a>
                    <a href="#" class="tag">
                        SASS
                    </a>
                </div>
                <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal5" class="more mt-5 mt-lg-0">Поподробнее →</a>
            </div>
            <div class="offer d-flex align-items-center flex-column flex-lg-row">
                <div class="offer-image mb-4 mb-lg-0"><img class="vac-log-img" src="./img/space.png" alt=""></div>
                <div class="offer-title mb-4 mb-lg-0">
                    <h3 class="offer-heading">Backend разработчик</h3>
                    <span class="offer-place">РосКосмос,Екатеринбург </span>
                </div>
                <span class="saraty mb-4 mb-lg-0">29 999 р</span>
                <div class="tags-group">
                    <span class="tags-label">Требования:</span>
                    <a href="#" class="tag">
                        React
                    </a>
                    <a href="#" class="tag">
                        Git
                    </a>
                    <a href="#" class="tag">
                        SASS
                    </a>
                </div>
                <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal6" class="more mt-5 mt-lg-0">Поподробнее →</a>
            </div>
            <div class="offer d-flex align-items-center flex-column flex-lg-row">
                <div class="offer-image mb-4 mb-lg-0"><img class="vac-log-img" src="./img/tinkof.png" alt=""></div>
                <div class="offer-title mb-4 mb-lg-0">
                    <h3 class="offer-heading">Python разработчик</h3>
                    <span class="offer-place">Тинькофф, Нижний Тагил</span>
                </div>
                <span class="saraty mb-4 mb-lg-0">25 000 р</span>
                <div class="tags-group">
                    <span class="tags-label">Требования:</span>
                    <a href="#" class="tag">
                        React
                    </a>
                    <a href="#" class="tag">
                        Git
                    </a>
                    <a href="#" class="tag">
                        SASS
                    </a>
                </div>
                <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal7" class="more mt-5 mt-lg-0">Поподробнее →</a>
            </div>
            
            </div> `
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


menuButton.addEventListener("click", (event) => {
    menu.classList.toggle("is-open");

})

closeMenuButton.addEventListener("click", (event) => {
    menu.classList.toggle("is-open");

})
document.querySelector('#find-button').onclick = async function(){
    document.querySelector('.vac2').innerHTML =''



    let data = document.querySelector('#text-to-find').value
    console.log(data)

    var GetRequest = null;

    async function sendGetRequest(method, URL) {
        const headers = {
            'Content-Type': 'application/json'
        };
        return fetch(URL).then(response => {
            return response.json()
        })
    }

    GetRequest = await sendGetRequest('GET', 'http://127.0.0.1:3000/vac')

    for(let i=0;i<GetRequest.length;i++){

        if(data == GetRequest[i].name){
            document.querySelector('.vac2').innerHTML += `
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
    data = ''
}






