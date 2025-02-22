const start = document.getElementById ("start");
const petnameinput = document.getElementById ("name-input");
start.addEventListener('click', () => {
    const name = petnameinput.value;
    if (! name) {
        alert ("请输入企鹅的名字！");
        return;
    }

    const petdata = {
        name: name
    }
    fetch ('http://127.0.0.1:4523/m1/5871339-5557864-default/pet/adopt', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify (petdata)
    })
    .then (response => response.json())
    .then (result => {
        if (result.success) {
            alert ('起名成功');
            window.location.href = 'main.html';
        } else {
            alert ('起名失败：' + result.message);
        }
    })
});