const registerBtn = document.getElementById('register-button');
registerBtn.addEventListener('click', () => {
    window.location.href = 'register.html';
});
const MailInput = document.getElementById("mail");
const PasswordInput = document.getElementById ("password");

function login() {
    const email = MailInput.value;
    const password = PasswordInput.value;
    MailInput.value = '';
    PasswordInput.value = '';
    if (! email || ! password) {
        alert ("请输入邮箱和密码！");
        return;
    }
    const userdata = {
        email: email,
        password: password
    }
    fetch ('http://127.0.0.1:4523/m1/5871339-5557864-default/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify (userdata)
    })
    .then (response => response.json())
    .then (result => {
        if (result.success) {
            alert ('登录成功');
            window.location.href = 'main.html';
        } else {
            alert ('登录失败：' + result.message);
        }
    })
}
