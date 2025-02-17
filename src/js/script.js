document.getElementById('loadCssIcon').addEventListener('click', function() {
    // 使用 import 加载 CSS
    import('./styles.css').then(() => {
        console.log('CSS 文件加载完成！');
    }).catch(() => {
        console.error('加载 CSS 文件失败！');
    });
});