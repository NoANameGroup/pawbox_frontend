document.addEventListener('DOMContentLoaded', function() {
    addNavigation('home-icon', 'main.html');
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
        console.error(`找不到 ID 为 "${elementId}" 的元素！`);
    }
}
