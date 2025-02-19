document.addEventListener('DOMContentLoaded', function() {
    // 添加跳转逻辑
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
        console.error(`找不到 ID 为 "${elementId}" 的元素！`);
    }
}