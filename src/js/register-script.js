document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('register').addEventListener('click', async event => {

        // 防止表单的默认提交行为
        event.preventDefault();

        const RegisterBtn = document.getElementById('register');
        const MailInput = document.getElementById("mail");
        const PasswordInput = document.getElementById ("password");
        const UserNameInput = document.getElementById("username");
        
        const email = MailInput.value;
        const username = UserNameInput.value;
        const password = PasswordInput.value;
        if (! email || ! password || ! username) {
            alert ("请输入用户名、邮箱和密码！");
            return;
        }
    
        const regdata = {
            username: username,
            email: email,
            password: password
        }
        // fetch ('http://localhost:8088/user/register', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify (regdata)
        // })
        // .then (response => response.json())
        // .then(result => {
        //     if (result.code === 200) {
        //         // 操作成功
        //         alert('注册成功！');
        //         // window.location.href = 'login.html';
        //     } else {
        //         // 操作失败
        //         alert('注册失败：' + result.message);
        //     }
        // })
        // .catch(error => {
        //     // 捕获并处理网络错误
        //     console.error('请求失败:', error);
        // })
    
        
        try {
            // 发送 AJAX 请求到后端注册接口
            const response = await fetch('http://localhost:8088/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify (regdata)
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
                alert('注册成功！');
    
                console.log(data);
                console.log(response);
                console.log(response.headers);
                // console.log(response.headers.get('session'));
                // 从响应头中提取令牌（如果后端返回了令牌）
                const token = data.data.sessionId;
                if (token) {
                    // 将令牌存储到 localStorage 或其他适当位置
                    localStorage.setItem('session', token);
                    // localStorage.setItem('avatar', data.result.portrait);
                }
    
                // 例如，重定向到首页
                window.location.href = 'name.html';
            // }else if (data.code === 2003 || data.code == 2004 || data.code === 9041) {
            //     // 会话过期或未授权，重定向到登录页面
            //     alert(`${data.message}`);
            //     window.location.href = 'index.html';
            } else {
                // 注册失败，显示错误信息
                console.log(data);
                console.log(response);
                console.log(response.headers);
                alert(`注册失败：${data.message}`);
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