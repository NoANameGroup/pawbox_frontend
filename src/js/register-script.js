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
    fetch ('http://eqmaster.redamancyxun.fun:8088/user/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify (regdata)
    })
    .then (response => response.json())
    .then(result => {
        if (result.code === 200) {
            // 操作成功
            alert('注册成功！');
            window.location.href = 'login.html';
        } else {
            // 操作失败
            alert('注册失败：' + result.message);
        }
    })
    .catch(error => {
        // 捕获并处理网络错误
        console.error('请求失败:', error);
    })
    
});

const tologinBtn = document.getElementById('login');
tologinBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
});