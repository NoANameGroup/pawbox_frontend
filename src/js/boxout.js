const closebtn = document.getElementById('close-icon');
closebtn.addEventListener('click', () => {
    window.location.href = 'main.html';
});

// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         const response = await fetch('http://localhost:8088/pet/get/' + , {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // 'session': token
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
//         }
//     } catch (error) {
//         console.error(error);
//     }
// });

// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         const response = await fetch('http://localhost:8088/box/get/ {boxId}', {
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
//             document.getElementById('inputcontent-image').src = data.result.imageURL;
//         }    
//     } catch (error) {
//         console.error(error);
//     }
// });

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

// 从 localStorage 中获取 session 令牌
const token = localStorage.getItem('session');

// 检查令牌是否存在
if (token) {
    console.log('获取到的令牌:', token);
    // 在这里可以使用令牌执行其他操作，例如设置请求头
} else {
    console.log('没有找到令牌');
}

// 获取用户输入的信息
const content = document.getElementById('inputcontent-text').value;
const image = document.getElementById('inputcontent-image').src;

document.getElementById('send-button').addEventListener('click', async event => {

    // 从 localStorage 中获取 session 令牌
    const token = localStorage.getItem('session');

    // 检查令牌是否存在
    if (token) {
        console.log('获取到的令牌:', token);
        // 在这里可以使用令牌执行其他操作，例如设置请求头
    } else {
        console.log('没有找到令牌');
    }

    try {
        // 发送 AJAX 请求到后端登录接口
        const response = await fetch('https://eqmaster.redamancyxun.fun:8088/box/sendBox?imageUrl=' + 'image' + '&content=' + content, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'session': token,
            },
            // body: JSON.stringify({
            //     // "boxId": 56,
            //     // "senderId": 19,
            //     content: "content",
            //     imageUrl: "image",
            // }),
            // credentials: 'include' // 携带凭证
        });

        // 检查响应状态
        if (!response.ok) {
            throw new Error(`服务器响应错误: ${response.status}`);
        }

        // const sendbtn = document.getElementById('send-button');
        // sendbtn.addEventListener('click', () => {
        //     alert("您的个人界面已更新！");
        //     window.location.href = 'main.html';
        // });

        // 解析响应 JSON 数据
        const data = await response.json();

        if (data.code === 0) {
            // 发送成功，处理成功逻辑
            alert('盒子已发送！');
            alert("您的个人界面已更新！");
            window.location.href = 'main.html';

        } else {
            // 发送失败，显示错误信息
            alert(`发送失败：${data.message}`);
            window.location.href = 'main.html';
        }
    } catch (error) {
        // 处理网络错误或其他异常
        console.error('网络错误:', error);
        alert('网络错误，请稍后再试。');
    }
})