let currentBackgroundIndex = 1;
let intervalId;

function changeBackground() {
    const newsSection = document.querySelector('.news');
    const title = document.querySelector('h1');
    currentBackgroundIndex++; 
    if (currentBackgroundIndex > 4) {
        currentBackgroundIndex = 1;
    }
    newsSection.style.backgroundImage = `url("assets/img/${currentBackgroundIndex}.jpg")`;
    if (currentBackgroundIndex === 1) {
        title.textContent = "【競賽】全國最大資訊服務相關領域學生專題創新競賽";
    } else if (currentBackgroundIndex === 2) {
        title.textContent = "【徵才】靜宜大學資料科學暨大數據分析與應用學系誠徵教師";
    } else if (currentBackgroundIndex === 3) {
        title.textContent = "【論文徵稿】第35屆國際資訊管理學術研討會";
    } else if (currentBackgroundIndex === 4) {
        title.textContent = "【徵才】第35屆國際資訊管理學術研討會";
    }
}

function startAutoChange() {
    intervalId = setInterval(changeBackground, 5000);//三秒換一次
}

//停止換圖片
function stopAutoChange() {
    clearInterval(intervalId);
}

//開始換圖片
document.addEventListener('DOMContentLoaded', function() {
    startAutoChange();
});

//使用者滑鼠移入news區停止
const newsSection = document.querySelector('.news');
newsSection.addEventListener('mouseenter', function() {
    stopAutoChange();
});

//使用者滑鼠移出news區開始
newsSection.addEventListener('mouseleave', function() {
    startAutoChange();
});
