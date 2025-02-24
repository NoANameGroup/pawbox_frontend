// // const registerBtn = document.getElementById('register-button');
// // registerBtn.addEventListener('click', () => {
// //     window.location.href = 'register.html';
// // });
// const MailInput = document.getElementById("mail");
// const PasswordInput = document.getElementById ("password");
// const LoginBtn = document.getElementById ("login-button");
// LoginBtn.addEventListener('click', async event => {

//     // 防止表单的默认提交行为
//     event.preventDefault();

//     const email = MailInput.value;
//     const password = PasswordInput.value;
//     MailInput.value = '';
//     PasswordInput.value = '';
//     if (! email || ! password) {
//         alert ("请输入邮箱和密码！");
//         return;
//     }
//     const userdata = {
//         email: email,
//         password: password
//     }
//     fetch ('http://localhost:8088/user/login', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify (userdata)
//     })
//     .then (response => response.json())
//     .then (result => {
//         if (result.code === 200) {
//             // 操作成功
//             alert('登录成功！');
//             window.location.href = 'main.html';
//         } else {
//             // 操作失败
//             alert('登录失败：' + result.message);
//         }
//     })
// });

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("login-button").addEventListener('click', async event => {

        // 防止表单的默认提交行为
        event.preventDefault();
        const MailInput = document.getElementById("mail");
        const PasswordInput = document.getElementById ("password");
        
        const email = MailInput.value;
        const password = PasswordInput.value;
        MailInput.value = '';
        PasswordInput.value = '';
        if (! email || ! password) {
            alert ("请输入邮箱和密码！");
            return;
        }
        
        try {
            // 发送 AJAX 请求到后端注册接口
            const response = await fetch('https://eqmaster.redamancyxun.fun:8088/user/login?email='+email+'&password=' + password, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
    
            console.log("请求发出");
    
            // 检查响应状态s
            if (!response.ok) {
                throw new Error(`服务器响应错误: ${response.status}`);
            }
    
            // 解析响应 JSON 数据
            const data = await response.json();
    
            if (data.code === 0) {
                // 注册成功，处理成功逻辑
                alert('登录成功！');
    
                console.log(data);
                console.log(response);
                console.log(response.headers);
                // console.log(response.headers.get('session'));
                // 从响应头中提取令牌（如果后端返回了令牌）
                const token = data.result.sessionId;
                if (token) {
                    // 将令牌存储到 localStorage 或其他适当位置
                    localStorage.setItem('session', token);
                    // localStorage.setItem('avatar', data.result.portrait);
                }

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
                alert(`登录失败：${data.message}`);
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
