// const start = document.getElementById ("start");
// const petnameinput = document.getElementById ("name-input");
// start.addEventListener('click', () => {
//     const name = petnameinput.value;
//     if (! name) {
//         alert ("请输入企鹅的名字！");
//         return;
//     }

//     // const petdata = {
//     //     name: name
//     // }
//     console.log(name);
//     fetch ('http://localhost:8088/pet/adopt?petName=' + name, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         // body: JSON.stringify (petdata)
//     })
//     .then (response => response.json())
//     .then (result => {
//         if (result.success) {
//             alert ('起名成功');
//             window.location.href = 'main.html';
//         } else {
//             alert ('起名失败：' + result.message);
//         }
//     })
// });


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("start").addEventListener('click', async event => {

        // 防止表单的默认提交行为
        event.preventDefault();
        const petnameinput = document.getElementById ("name-input");
        
        const name = petnameinput.value;
        if (! name) {
            alert ("请输入企鹅的名字！");
            return;
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
        
        try {
            // 发送 AJAX 请求到后端注册接口
            const response = await fetch('http://eqmaster.redamancyxun.fun:8088/user/adoptPet?petName=' + name, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'session': token
                },
                // body: JSON.stringify (userdata)
                // credentials: 'include' // 携带凭证
            });
    
            console.log("请求发出");
    
            // 检查响应状态
            if (!response.ok) {
                throw new Error(`服务器响应错误: ${response.status}`);
            }
    
            // 解析响应 JSON 数据
            const data = await response.json();
    
            if (data.code === 0) {
                // 注册成功，处理成功逻辑
                alert('起名成功！');
    
                console.log(data);
                console.log(response);
                console.log(response.headers);
                // console.log(response.headers.get('session'));
                // // 从响应头中提取令牌（如果后端返回了令牌）
                // const token = data.result.sessionId;
                // if (token) {
                //     // 将令牌存储到 localStorage 或其他适当位置
                //     localStorage.setItem('session', token);
                //     localStorage.setItem('avatar', data.result.portrait);
                // }

                const petName = data.result.petName;
                localStorage.setItem('petName', petName);
    
                // 例如，重定向到首页
                window.location.href = 'main.html';
            // }else if (data.code === 2003 || data.code == 2004 || data.code === 9041) {
            //     // 会话过期或未授权，重定向到登录页面
            //     alert(`${data.message}`);
            //     window.location.href = 'index.html';
            } else {
                // 注册失败，显示错误信息
                console.log(data);
                console.log(response);
                console.log(response.headers);
                alert(`起名失败：${data.message}`);
                console.error(data.message);
            }
        } catch (error) {
            // 处理网络错误或其他异常
            console.error('网络错误:', error);
            alert('网络错误，请稍后再试。');
        }
        
    });
    
    // const tologinBtn = document.getElementById('login');
    // tologinBtn.addEventListener('click', () => {
    //     window.location.href = 'login.html';
    // });
});
