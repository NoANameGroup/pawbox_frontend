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
        }    
    } catch (error) {
        console.error(error);
    }
});