let userData = {
    name: 'praneeth',
    number: '9959732632',
    email: 'praneeth@gmail.com',
    password: '12345678',
    id: 1
};
// let userLocalData = JSON.stringify(userData);
// let onlinedata = localStorage.getItem(userdata);

function login() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    emailv = email.value;
    passwordv = password.value;
    if (userData.email == emailv && userData.password == passwordv) {
        window.location.href = "home.html";
    }
}

function register() {
    let name = document.getElementById('name');
    let number = document.getElementById('number')
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let user = {
        name: name.value,
        number: number.value,
        email: email.value,
        password: password.value
    }

    // userData.push(user);
    console.log(userData);
    let userLocalData = JSON.stringify(userData);
    localStorage.setItem("userdata", userLocalData);
    window.location.href = "login.html";
}

function submit() {
    let tweet = document.getElementById('place');
    let row = document.getElementById('row');
    if (tweet.value != "") {

        let box = document.createElement('div');
        box.classList.add("box", "col-12", "col-md-6", "mb-3");
        row.appendChild(box);

        let box2 = document.createElement('div');
        box2.classList.add("box2");
        box.appendChild(box2);

        let headding = document.createElement('div');
        headding.classList.add("headding");
        box2.appendChild(headding);

        let head = document.createElement('h1');
        head.classList.add("head", "p-3", "mb-3");
        head.textContent = userData.name;
        headding.appendChild(head);

        let des = document.createElement('div');
        des.classList.add("des");
        box2.appendChild(des);

        let para = document.createElement('p');
        para.classList.add("tweet", "p-3");
        para.textContent = tweet.value;
        des.appendChild(para);
    }
}