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
