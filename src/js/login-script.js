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
            alert('登录成功！');
            const petId = result.data.userId;
            const url = 'http://eqmaster.redamancyxun.fun:8088/pet/get/${petId}'
            fetch (url, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })
                .then(result => {
                    if (result.status === 403) { 
                        window.location.href = 'name.html';
                    } else {
                        window.location.href = 'main.html';
                    }
                })
            } else {
            // 操作失败
            alert('登录失败：' + result.message);
        }
    })
});
