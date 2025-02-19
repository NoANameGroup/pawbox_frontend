function login() {
    // 获取表单元素
    var mail = document.getElementById("mail").value;
    var password = document.getElementById("password").value;

    // 表单验证
    if (mail === "" || password === "") {
        alert("用户名和密码不能为空！");
        return false;
    }

    // 模拟登录成功
    alert("欢迎回来，" + username + "！");
    // 在实际开发中，这里应该发送请求到后端进行登录验证
        }

    //！！！以上代码为AI生成，需要修改！！！