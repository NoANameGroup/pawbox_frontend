document.addEventListener('DOMContentLoaded', function () {
    // 添加跳转逻辑
    addNavigation('user-icon', 'user.html');
    addNavigation('boxin-icon', 'boxin.html');
    addNavigation('boxout-icon', 'boxout.html');
    addNavigation('setting-icon', 'setting.html');
});

function addNavigation(elementId, targetPage) {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('click', () => {
            window.location.href = targetPage;
        });
    } else {
        console.error(`找不到 ID 为 "${elementId}" 的元素！`);
    }
}


document.addEventListener('DOMContentLoaded', async () => {

    // 从 localStorage 中获取 session 令牌
    const token = localStorage.getItem('session');

    // 检查令牌是否存在
    if (token) {
        console.log('获取到的令牌:', token);
        // 在这里可以使用令牌执行其他操作，例如设置请求头
    } else {
        console.log('没有找到令牌');
    }
    // 从 localStorage 中获取 session 令牌
    const nnname = localStorage.getItem('petName');

    // 检查令牌是否存在
    if (nnname) {
        console.log('获取到:', nnname);
        // 在这里可以使用令牌执行其他操作，例如设置请求头
    } else {
        console.log('没有找到');
    }
    document.getElementById('name-text').innerText = nnname;

    // try {
    //     const response = await fetch('http://localhost:8088/pet/get/{petId}', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'session': token
    //         }
    //     });

    //     // 检查响应状态
    //     if (!response.ok) {
    //         throw new Error(`服务器响应错误: ${response.status}`);
    //     }

    //     // 解析响应 JSON 数据
    //     const data = await response.json();

    //     console.log(data);

    //     if (data.code === 0) {
    //         document.getElementById('name-text').innerText = data.result.name;
    //     }    
    // } catch (error) {
    //     console.error(error);
    // }
});