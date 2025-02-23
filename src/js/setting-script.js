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
    const petdata = {
        name: NewPetName
    }
    fetch ('http://localhost:8088/pet/update', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify (petdata)
    })
    .then (response => response.json())
    .then (result => {
        if (result.code === 200) {
            // 操作成功
            alert('改名成功！');
            overlay.style.display = "none";
        } else {
            // 操作失败
            alert('改名失败：' + result.message);
        }
    })
})
//点击确认时，改用户名并隐藏弹窗
ConfirmUser.addEventListener ("click",()=> {
    const NewUserName = NewPetNameInput.value;
    if (! NewUserName) {
        alert ("请输入新的用户名！");
        return ;
    } 
    NewUserNameInput.value = '';
    const userdata = {
        username: NewUserName
    }
    fetch ('http://localhost:8088/user/update', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify (userdata)
    })
    .then (response => response.json())
    .then (result => {
        if (result.code === 200) {
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