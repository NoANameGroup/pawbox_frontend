const start = document.getElementById ("start");
const NewPetNameInput = document.getElementById ("name-input");

start.addEventListener('click', () => {
    const petname = NewPetNameInput.value;
    if (! petname) {
        alert ("请输入企鹅的名字！");
    } else {
        const PetName = {
            petname: petname
        }

        fetch ('http://127.0.0.1:4523/m1/5871339-5557864-default/pet/adopt', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify (PetName)
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
    }
    
});