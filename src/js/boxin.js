// 获取按钮和两个弹窗的 DOM 元素
const toggleButton = document.getElementById('open-button');
const popup1 = document.getElementById('pop-up-window');
const popup2 = document.getElementById('content-container');

// 假设初始时第一个弹窗显示，第二个弹窗隐藏
// toggleButton.style.display = 'block';
// popup1.style.display = 'block';
popup2.style.display = 'none';

// 为按钮添加点击事件监听器
toggleButton.addEventListener('click', function () {
    // 关闭第一个弹窗
    popup1.style.display = 'none';
    toggleButton.style.display = 'none';
    // 打开第二个弹窗
    popup2.style.display = 'block';
});

const closebtn = document.getElementById('close-icon');
closebtn.addEventListener('click', () => {
    window.location.href = 'main.html';
});

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://eqmaster.redamancyxun.fun:8088/pet/get/{petId}', {
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

        if (data.code === 0) {
            document.getElementById('name-text').innerText = data.result.name;
        }    
    } catch (error) {
        console.error(error);
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://eqmaster.redamancyxun.fun:8088/box/get/{boxId}', {
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

        if (data.code === 0) {
            document.getElementById('content-image').src = data.result.imageURL;
            document.getElementById('content-text').innerText = data.result.content;
        }    
    } catch (error) {
        console.error(error);
    }
});