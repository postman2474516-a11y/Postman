# 红岸数字科技官方网站 - RedCoast Technology

## 📋 项目概述

为上海红岸洲际数字科技有限公司打造的企业官方网站，展示公司产品业务及专业能力，体现人文艺术与科学技术完美融合的品牌定位。

### 基本信息

- **公司全称**: 上海红岸洲际数字科技有限公司
- **公司简称**: 红岸数字科技
- **英文名称**: RedCoast Technology
- **主营业务**: 智能化集成与人工智能创新应用开发
- **公司Slogan**: "There are decades where nothing happens, and there are weeks where decades happen."

### 核心优势

- ✅ 供应链+工具链优势
- ✅ 技术雷达和细分场景应用开发能力
- ✅ 核心算法团队+工程设计师
- ✅ 链接产业上下游生态

### 业务覆盖

- 上游：智能工业设计、设备厂、原料、元器件、电子配件组装
- 下游：定制化需求方、渠道商、平台

---

## 🎨 设计理念

### 设计风格

采用**现代简约 + 科技风**的设计理念，参考：
- Apple官网的设计语言
- 特斯拉官网的视觉风格
- 深圳红岸未来信息科技有限公司官网（https://redcoast.info/zh-CN）

### 核心设计原则

1. **设计美感优先** - 注重视觉呈现和用户体验
2. **交互逻辑其次** - 简洁直观的交互设计
3. **兼顾内容** - 完整展示产品和服务信息

---

## 📁 项目结构

```
redcoast-website/
├── index.html              # 主页面
├── README.md              # 项目说明
├── src/
│   ├── css/
│   │   └── style.css      # 主样式文件
│   ├── js/
│   │   └── main.js        # 主JavaScript文件
│   └── assets/
│       ├── images/        # 图片资源
│       └── fonts/         # 字体文件
├── data/                  # 数据文件
│   └── radar-news.json    # 技术雷达数据
└── scripts/               # 脚本文件
    ├── deploy.sh          # 部署脚本
    └── build.sh           # 构建脚本
```

---

## 🌐 页面结构

### 1. Hero Section（首页横幅）

- 公司名称（中英文）
- Slogan展示
- 主营业务简介
- CTA按钮

### 2. About Section（关于我们）

- 公司定位
- 核心优势
- 生态体系（上游+下游）

### 3. Products & Services（产品与服务）

8大业务领域：
- 智能交互硬件
- 智能屏显示设备
- 多用途机器人
- 无人机系统
- 空中成像设备
- 智能穿戴设备
- 智能农业设备
- 智能安防

### 4. Tech Radar（技术雷达站）

- 雷达可视化展示
- 科技动态轮播
- 多平台信息来源（Science、Nature、小红书、知乎、抖音）
- 每24小时自动更新

### 5. Contact Section（联系我们）

- 公司信息
- 联系表单

### 6. Footer（页脚）

- 链接导航
- 版权信息

---

## 🚀 技术雷达站功能

### 功能特性

1. **可视化雷达**
   - SVG动画雷达扫描效果
   - 360度旋转扫描
   - 渐变填充效果

2. **动态新闻轮播**
   - 自动轮播（5秒切换）
   - 手动控制（上一页/下一页）
   - 指示器导航
   - 键盘控制（左右箭头）
   - 鼠标悬停暂停

3. **信息来源**
   - Science
   - Nature
   - 小红书
   - 知乎
   - 抖音

4. **自动更新**
   - 每24小时自动采集
   - 智能分析总结
   - 实时推送

### 数据格式

```json
{
  "news": [
    {
      "source": "Science",
      "title": "新型人工智能算法在医疗诊断中实现突破",
      "summary": "研究人员开发出一种深度学习模型...",
      "time": "2小时前"
    }
  ]
}
```

---

## 💻 技术栈

### 前端

- **HTML5**: 语义化标签
- **CSS3**: 现代CSS特性
  - Flexbox布局
  - Grid布局
  - CSS动画和过渡
  - CSS变量
  - 媒体查询（响应式）
- **JavaScript (ES6+)**:
  - ES6语法
  - 异步编程
  - DOM操作
  - 事件处理
  - Intersection Observer API

### 设计

- **响应式设计**: 支持桌面、平板、移动设备
- **无障碍设计**: ARIA标签、键盘导航
- **性能优化**:
  - 懒加载
  - 防抖和节流
  - Intersection Observer

---

## 📱 响应式断点

- **移动端**: < 768px
- **平板**: 768px - 1023px
- **桌面**: ≥ 1024px

---

## 🎯 特色功能

### 1. 平滑滚动

所有锚点链接支持平滑滚动效果。

### 2. 滚动动画

元素进入视口时触发淡入动画。

### 3. 导航栏效果

- 滚动时改变透明度和阴影
- 移动端汉堡菜单
- 点击菜单项后自动关闭移动端菜单

### 4. 技术雷达

- SVG动画效果
- 自动轮播
- 交互控制

### 5. 表单验证

- 实时表单验证
- 邮箱格式验证
- 提交状态反馈

---

## 🔧 本地开发

### 安装依赖

本项目为纯静态网站，无需构建工具，直接打开即可。

### 启动本地服务器

使用Python启动简单HTTP服务器：

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

使用Node.js：

```bash
npx http-server
```

访问：http://localhost:8000

---

## 🚀 部署

### 方式1：GitHub Pages

1. 创建GitHub仓库
2. 推送代码
3. 在Settings > Pages中启用
4. 访问：https://yourusername.github.io/redcoast-website/

### 方式2：Netlify

1. 拖拽文件夹到Netlify
2. 自动部署
3. 获取访问链接

### 方式3：Vercel

1. 连接Git仓库
2. 自动部署
3. 获取访问链接

### 方式4：自定义域名

配置自定义域名，建议包含"RedCoast Tch"字样：

1. 购买域名（如：redcoast-tch.com）
2. 在DNS提供商处添加CNAME记录
3. 在部署平台配置自定义域名
4. 启用SSL证书（HTTPS）

---

## 📊 性能优化

### 已实现的优化

1. **CSS优化**
   - 使用CSS变量减少重复
   - 优化选择器性能
   - 使用transform和opacity进行动画（GPU加速）

2. **JavaScript优化**
   - 防抖和节流
   - Intersection Observer懒加载
   - 事件委托

3. **资源优化**
   - 压缩CSS和JavaScript
   - 使用SVG图标代替图片
   - 响应式图片

### 建议的优化

1. **图片优化**
   - 使用WebP格式
   - 响应式图片（srcset）
   - 懒加载

2. **缓存策略**
   - 设置Cache-Control头
   - 使用CDN

3. **代码分割**
   - 按需加载JavaScript
   - 异步加载非关键脚本

---

## 🔍 SEO优化

### 已实现的SEO

- 语义化HTML标签
- Meta标签（description, keywords）
- Open Graph标签
- 合理的标题层级
- 内部链接

### 建议的SEO优化

1. **结构化数据**
   - 添加JSON-LD
   - Organization schema
   - Product schema

2. **性能**
   - Core Web Vitals优化
   - 移动端友好性

3. **内容**
   - 定期更新内容
   - 添加博客功能

---

## 📝 浏览器兼容性

### 支持的浏览器

- ✅ Chrome (最新版)
- ✅ Firefox (最新版)
- ✅ Safari (最新版)
- ✅ Edge (最新版)
- ✅ 移动浏览器

### 使用的现代特性

- CSS Grid
- CSS Variables
- ES6+ JavaScript
- Intersection Observer API

---

## 🔐 安全性

### 已实现的安全措施

1. **XSS防护**
   - 输入验证
   - 输出编码

2. **HTTPS**
   - 启用SSL证书

3. **CSP (Content Security Policy)**
   - 建议配置CSP头

---

## 📞 联系信息

### 公司名称

上海红岸洲际数字科技有限公司
RedCoast Technology

### 联系方式

- 邮箱：contact@redcoast.com
- 地址：上海市

---

## 📄 许可证

Copyright © 2024 上海红岸洲际数字科技有限公司. All rights reserved.

---

## 🙏 致谢

设计参考：
- Apple官网
- 特斯拉官网
- 深圳红岸未来信息科技有限公司官网

---

## 📞 技术支持

如有问题或建议，请联系：
- 邮箱：contact@redcoast.com
- 技术支持：tech@redcoast.com

---

**项目状态**: ✅ 已完成
**最后更新**: 2024年
**版本**: 1.0.0
