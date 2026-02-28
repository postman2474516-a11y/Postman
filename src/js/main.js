/**
 * RedCoast Technology - 主JavaScript文件
 * 处理交互逻辑和动态效果
 */

// ============================================
// 导航栏功能
// ============================================

const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// 滚动时改变导航栏样式
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// 移动端菜单切换
navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
    navToggle?.classList.toggle('active');
});

// 点击菜单项后关闭移动端菜单
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
        navToggle?.classList.remove('active');
    });
});

// ============================================
// 平滑滚动
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// 技术雷达轮播
// ============================================

class TechRadar {
    constructor() {
        this.newsItems = document.querySelectorAll('.news-item');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5秒自动切换

        this.init();
    }

    init() {
        if (!this.newsItems.length) return;

        // 绑定按钮事件
        this.prevBtn?.addEventListener('click', () => this.prev());
        this.nextBtn?.addEventListener('click', () => this.next());

        // 绑定指示器事件
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goTo(index));
        });

        // 启动自动播放
        this.startAutoPlay();

        // 鼠标悬停时暂停自动播放
        const radarNews = document.querySelector('.radar-news');
        radarNews?.addEventListener('mouseenter', () => this.stopAutoPlay());
        radarNews?.addEventListener('mouseleave', () => this.startAutoPlay());

        // 键盘控制
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }

    goTo(index) {
        // 移除当前活动状态
        this.newsItems[this.currentIndex].classList.remove('active');
        this.indicators[this.currentIndex].classList.remove('active');

        // 更新索引
        this.currentIndex = index;

        // 添加新的活动状态
        this.newsItems[this.currentIndex].classList.add('active');
        this.indicators[this.currentIndex].classList.add('active');

        // 重置自动播放
        this.resetAutoPlay();
    }

    next() {
        const nextIndex = (this.currentIndex + 1) % this.newsItems.length;
        this.goTo(nextIndex);
    }

    prev() {
        const prevIndex = (this.currentIndex - 1 + this.newsItems.length) % this.newsItems.length;
        this.goTo(prevIndex);
    }

    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => this.next(), this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}

// 初始化技术雷达
const techRadar = new TechRadar();

// ============================================
// 滚动动画
// ============================================

class ScrollAnimation {
    constructor() {
        this.elements = document.querySelectorAll('.product-card, .about-item, .contact-item');
        this.init();
    }

    init() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            this.observer.observe(el);
        });
    }
}

// 初始化滚动动画
const scrollAnimation = new ScrollAnimation();

// ============================================
// 联系表单处理
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 获取表单数据
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // 验证表单
        if (!this.validateForm(data)) {
            return;
        }

        // 模拟提交（实际项目中替换为真实API调用）
        this.submitForm(data);
    });
}

function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.name || data.name.trim().length < 2) {
        alert('请输入有效的姓名');
        return false;
    }

    if (!data.email || !emailRegex.test(data.email)) {
        alert('请输入有效的邮箱地址');
        return false;
    }

    if (!data.subject || data.subject.trim().length < 2) {
        alert('请输入主题');
        return false;
    }

    if (!data.message || data.message.trim().length < 10) {
        alert('请输入至少10个字符的消息');
        return false;
    }

    return true;
}

function submitForm(data) {
    // 显示加载状态
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '发送中...';
    submitBtn.disabled = true;

    // 模拟API请求
    setTimeout(() => {
        console.log('表单提交成功:', data);

        // 显示成功消息
        alert('消息已发送！我们会尽快联系您。');

        // 重置表单
        contactForm.reset();

        // 恢复按钮状态
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1000);
}

// ============================================
// 动态更新技术雷达数据（模拟）
// ============================================

async function fetchTechNews() {
    // 这里应该是实际的API调用
    // 目前返回模拟数据
    return {
        source: 'Science',
        title: '新型人工智能算法在医疗诊断中实现突破',
        summary: '研究人员开发出一种深度学习模型，能够在早期阶段检测出癌症，准确率达到98%',
        time: '刚刚'
    };
}

// 模拟每24小时更新一次
// 实际部署时可以使用 setInterval 或 Web Workers

// ============================================
// 性能优化：懒加载图片
// ============================================

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imgObserver.observe(img);
    });
}

// ============================================
// 平台检测
// ============================================

const isMobile = () => window.innerWidth < 768;
const isTablet = () => window.innerWidth >= 768 && window.innerWidth < 1024;
const isDesktop = () => window.innerWidth >= 1024;

// 根据设备调整行为
if (isMobile()) {
    document.body.classList.add('mobile');
} else if (isTablet()) {
    document.body.classList.add('tablet');
} else {
    document.body.classList.add('desktop');
}

// ============================================
// 工具函数
// ============================================

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 节流函数
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 格式化日期
function formatDate(date) {
    const now = new Date();
    const diff = now - date;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}天前`;
    if (hours > 0) return `${hours}小时前`;
    if (minutes > 0) return `${minutes}分钟前`;
    return '刚刚';
}

// ============================================
// 控制台欢迎信息
// ============================================

console.log('%c🚀 RedCoast Technology', 'font-size: 24px; font-weight: bold; color: #0071e3;');
console.log('%c"Where decades happen in weeks"', 'font-style: italic; color: #86868b;');
console.log('\n欢迎访问红岸数字科技官网！');
console.log('我们致力于智能化集成与人工智能创新应用开发');
console.log('\n💡 技术栈: HTML5, CSS3, JavaScript');
console.log('🎨 设计风格: 现代简约 + 科技风');
console.log('📱 响应式设计: 支持桌面、平板、移动设备');

// ============================================
// 页面加载完成后执行
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ 页面加载完成');
    console.log('🎨 当前设备:', isMobile() ? '移动端' : isTablet() ? '平板' : '桌面端');
});

// ============================================
// 错误处理
// ============================================

window.addEventListener('error', (e) => {
    console.error('页面错误:', e.error);
});

// 未处理的Promise错误
window.addEventListener('unhandledrejection', (e) => {
    console.error('未处理的Promise错误:', e.reason);
});
