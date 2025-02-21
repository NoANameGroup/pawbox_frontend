const closebtn = document.getElementById('close-icon');
closebtn.addEventListener('click', () => {
    window.location.href = 'main.html';
});

const sendbtn = document.getElementById('send-button');
sendbtn.addEventListener('click', () => {
    alert("您的个人界面已更新！");
    window.location.href = 'main.html';
});