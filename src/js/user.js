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

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:8088/pet/get/{petId}', {
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
            document.getElementById('birthday').innerText = data.result.birthday;
        }    
    } catch (error) {
        console.error(error);
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:8088/box/received/{userId}', {
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
            document.getElementById('image').src = data.result.imageURL;
            document.getElementById('content').innerText = data.result.content;
        }    
    } catch (error) {
        console.error(error);
    }
});