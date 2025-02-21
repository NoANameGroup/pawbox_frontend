const register_Btn = document.getElementById('register');
register_Btn.addEventListener('click', () => {

//还需要写一个返回后端数据

    alert("注册成功！");
    window.location.href = 'name.html';
});

const tologinBtn = document.getElementById('login');
tologinBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
});