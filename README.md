## Dawn

# 取火柴小游戏

### 实现技术
JavaScript、HTML、CSS

### 实现思路   
   构思好页面布局，逻辑部分利用二维数组控制对应行
跟行内的每一个元素，利用玩家输入的对应元素的盒子，获取到前或者用样式隐藏它。
其余两行背景色改为灰色，表示改两行不能动，同时也不能在继续选着，除非点击交换按钮，（按照游戏规则实现这点）
因为游戏规则是：安排两个玩家，每人可以在一轮内，在任意行拿任意根牙签，但不能跨行拿最后一根牙签的人即为输家。
  没有做输了的动画提示，考虑到别人已经输和玩家可以自行知道输赢所以就不做这些嘲讽人的交互了
下方也有注明游戏规则和重新游戏需要按下刷新按钮（F5）
