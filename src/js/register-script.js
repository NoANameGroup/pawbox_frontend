const RegisterBtn = document.getElementById('register');
const MailInput = document.getElementById("email");
const PasswordInput = document.getElementById ("password");
const UserNameInput = document.getElementById("username");

RegisterBtn.addEventListener('click', () => {
    const email = MailInput.value;
    const username = UserNameInput.value;
    const password = PasswordInput.value;
    if (! email || ! password || ! username) {
        alert ("请输入用户名、邮箱和密码！");
        return;
    }

    const regdata = {
        username: username,
        email: email,
        password: password
    }
    fetch ('http://127.0.0.1:4523/m1/5871339-5557864-default/user/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify (regdata)
    })
    .then (response => response.json())
    .then (result => {
        if (result.success) {
            alert ('注册成功');
            window.location.href = 'name.html';
        } else {
            alert ('注册失败：' + result.message);
        }
    })
});

const tologinBtn = document.getElementById('login');
tologinBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
});