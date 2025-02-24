document.addEventListener('DOMContentLoaded', function() {
    addNavigation('home-icon', 'main.html');
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
        console.error(`找不到 ID 为 "${elementId}" 的元素！`);
    }
}

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

// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         const response = await fetch('http://localhost:8088/pet/get/{petId}', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'session': token
//             }
//         });

//         // 检查响应状态
//         if (!response.ok) {
//             throw new Error(`服务器响应错误: ${response.status}`);
//         }

//         // 解析响应 JSON 数据
//         const data = await response.json();

//         console.log(data);

//         if (data.code === 0) {
//             document.getElementById('name-text').innerText = data.result.name;
//             document.getElementById('birthday').innerText = data.result.birthday;
//         }    
//     } catch (error) {
//         console.error(error);
//     }
// });

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://eqmaster.redamancyxun.fun:8088/user/getUserInfo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'session': token
            }
        });

        // 检查响应状态
        if (!response.ok) {
            throw new Error(`服务器响应错误: ${response.status}`);
        }

        // 解析响应 JSON 数据
        const data = await response.json();

        console.log(data);

        if (data.code === 0 && data.result.sendBoxHistory.length > 2) {
            document.getElementById('image').src = data.result.sendBoxHistory[0].imageURL;
            document.getElementById('content').innerText = data.result.sendBoxHistory[0].content;
        }    
    } catch (error) {
        console.error(error);
    }
});