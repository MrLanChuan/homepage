document.addEventListener('DOMContentLoaded', function() {
  // 获取所有的toggle按钮和内容区域
  var toggleButtons = document.querySelectorAll('.toggle-button');
  var contentAreas = document.querySelectorAll('.content-area');

  // 初始化所有内容区域为默认收起状态
  contentAreas.forEach(function(area) {
    area.classList.add('collapsed'); // 确保所有内容区域初始状态是收起的
  });

  // 初始化所有按钮文本为 '展开'
  toggleButtons.forEach(function(button) {
    button.textContent = '展开';
  });

  // 为每个按钮添加点击事件监听器
  toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var contentArea = this.closest('.content-group').querySelector('.content-area');

      // 切换内容区域的类
      contentArea.classList.toggle('collapsed');
      contentArea.classList.toggle('expanded');

      // 更新按钮文本
      this.textContent = contentArea.classList.contains('expanded') ? '收起' : '展开';
    });
  });
});
// 监听网页加载完成事件
window.onload = function() {
    // 滚动到页面的顶部
    window.scrollTo(0, 0);
};
function applyLQIP(img) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const smallImg = new Image();
    smallImg.src = 'low-quality.jpg'; // 低分辨率图片

    smallImg.onload = () => {
        canvas.width = smallImg.width;
        canvas.height = smallImg.height;
        ctx.filter = 'blur(20px)'; // 根据需要调整模糊程度
        ctx.drawImage(smallImg, 0, 0, canvas.width, canvas.height);
        img.style.backgroundImage = `url(${canvas.toDataURL()})`;
    };
}

// 应用LQIP到所有图片
document.querySelectorAll('img').forEach(img => applyLQIP(img));

