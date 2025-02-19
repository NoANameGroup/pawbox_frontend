document.addEventListener('DOMContentLoaded', function() {
    // �����ת�߼�
    addNavigation('home-icon', 'main.html');
    addNavigation('user-icon', 'user.html');
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
        console.error(`�Ҳ��� ID Ϊ "${elementId}" ��Ԫ�أ�`);
    }
}