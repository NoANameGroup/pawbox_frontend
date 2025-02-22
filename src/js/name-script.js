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
    fetch ('http://eqmaster.redamancyxun.fun:8088/pet/adopt', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify (petdata)
    })
    .then (response => response.json())
    .then (result => {
        if (result.code === 200) {
            // 操作成功
            alert('起名成功！');
        } else {
            // 操作失败
            alert('起名失败：' + result.message);
        }
    })
});