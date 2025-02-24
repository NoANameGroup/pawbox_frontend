const overlay = document.getElementById ("overlay");
const ChangePet = document.getElementById ("change-pet");
const ChangeUser = document.getElementById ("change-user");
const ConfirmPet = document.getElementById ("confirm-pet");
const ConfirmUser = document.getElementById ("confirm-user");
const NewPetNameInput = document.getElementById ("pet-name-input");
const NewUserNameInput = document.getElementById ("user-name-input");
const ModalPet = document.getElementById ("modal-pet");
const ModalUser = document.getElementById ("modal-user");
const QuitLogin = document.getElementById ("quit-login");
const BackToMain = document.getElementById ("back-to-main");

// 从 localStorage 中获取 session 令牌
const token = localStorage.getItem('session');

// 检查令牌是否存在
if (token) {
    console.log('获取到的令牌:', token);
    // 在这里可以使用令牌执行其他操作，例如设置请求头
} else {
    console.log('没有找到令牌');
}
// // 从 localStorage 中获取 session 令牌
// const nnname = localStorage.getItem('petName');

// // 检查令牌是否存在
// if (nnname) {
//     console.log('获取到:', nnname);
//     // 在这里可以使用令牌执行其他操作，例如设置请求头
// } else {
//     console.log('没有找到');
// }
// document.getElementById('name-text').innerText = nnname;

//点击左上角箭头，返回主页
BackToMain.addEventListener('click', () => {
    window.location.href = 'main.html';
});
//点击修改宠物名字，显示弹窗
ChangePet.addEventListener ("click",()=> {
    overlay.style.display = "block";
    ModalPet.style.display = "block";
    ModalUser.style.display = "none";
})
//点击修改用户名，显示弹窗
ChangeUser.addEventListener ("click",()=> {
    overlay.style.display = "block";
    ModalUser.style.display = "block";
    ModalPet.style.display = "none";
})
//点击确认时，给宠物改名并隐藏弹窗
ConfirmPet.addEventListener ("click",()=> {
    const NewPetName = NewPetNameInput.value;
    if (! NewPetName) {
        alert ("请输入新的宠物名！");
        return ;
    } 
    NewPetNameInput.value = '';
    // const petdata = {
    //     name: NewPetName
    // }
    fetch ('https://eqmaster.redamancyxun.fun:8088/user/updatePetName?petName=' + NewPetName, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
            'session': token
        },
    })
    .then (response => response.json())
    .then (result => {
        if (result.code === 0) {
            // 操作成功
            alert('改名成功！');
            overlay.style.display = "none";

            localStorage.setItem('petName', NewPetName);
        } else {
            // 操作失败
            alert('改名失败：' + result.message);
        }
    })
})
//点击确认时，改用户名并隐藏弹窗
ConfirmUser.addEventListener ("click",()=> {
    const NewUserName = NewUserNameInput.value;
    if (! NewUserName) {
        alert ("请输入新的用户名！");
        return ;
    } 
    NewUserNameInput.value = '';
    const userdata = {
        username: NewUserName
    }
    fetch ('https://eqmaster.redamancyxun.fun:8088/user/updateUserInfo?username=' + NewUserName, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
            'session': token
        },
        body: JSON.stringify (userdata)
    })
    .then (response => response.json())
    .then (result => {
        if (result.code === 0) {
            // 操作成功
            alert('改名成功！');
            overlay.style.display = "none";
        } else {
            // 操作失败
            alert('改名失败：' + result.message);
        }
    })
})
//点击遮罩层时隐藏弹窗
overlay.addEventListener ("click",()=>{
    overlay.style.display = "none";
})
// 防止点击弹窗时，遮罩层消失
document.querySelectorAll(".modal-bg").forEach((modalBg) => {
    modalBg.addEventListener("click", (e) => {
        e.stopPropagation(); 
    });
});
//点击退出登录时跳转到登录页面
QuitLogin.addEventListener('click', () => {
    window.location.href = 'login.html';
});