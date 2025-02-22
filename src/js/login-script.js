const registerBtn = document.getElementById('register-button');
registerBtn.addEventListener('click', () => {
    window.location.href = 'register.html';
});
const MailInput = document.getElementById("mail");
const PasswordInput = document.getElementById ("password");
const LoginBtn = document.getElementById ("login-button");
LoginBtn.addEventListener('click', () => {
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
    fetch ('http://eqmaster.redamancyxun.fun:8088/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify (userdata)
    })
    .then (response => response.json())
    .then (result => {
        if (result.code === 200) {
            // 操作成功
            alert('登录成功！');
            window.location.href = 'main.html';
        } else {
            // 操作失败
            alert('登录失败：' + result.message);
        }
    })
});
function login() {
    
}
