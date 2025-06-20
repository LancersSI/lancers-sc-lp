// html要素の高さをscroll分を含めて取得し、iframe側に送信
function sendHeight() {
    const height = document.body.scrollHeight;
    window.parent.postMessage({ iframeHeight: height }, "*");
}

// DOMが読み込まれる、もしくはリサイズされた際発火
window.addEventListener("load", sendHeight);
window.addEventListener("resize", sendHeight);

// スクロールアニメーション
// document.addEventListener('DOMContentLoaded', function () {
//     // アニメーション要素を取得
//     const serviceBoxes = document.querySelectorAll('.service-box');
//     const strengthCards = document.querySelectorAll('.strength-card');
//     const newsItems = document.querySelectorAll('.news-item');
//     const companyInfo = document.querySelector('.company-info');

//     // スクロール時のアニメーション
//     function checkScroll() {
//         const triggerBottom = window.innerHeight * 0.8;

//         // サービスボックスのアニメーションは無効化
//         // serviceBoxes.forEach((box, index) => {
//         //     const boxTop = box.getBoundingClientRect().top;
//         //     
//         //     if (boxTop < triggerBottom) {
//         //         setTimeout(() => {
//         //             box.classList.add('animate');
//         //         }, index * 200);
//         //     }
//         // });

//         // サービスボックスは最初から表示させる
//         serviceBoxes.forEach((box) => {
//             box.style.opacity = '1';
//             box.style.transform = 'translateY(0)';
//         });

//         // 強みカードのアニメーション
//         strengthCards.forEach((card, index) => {
//             const cardTop = card.getBoundingClientRect().top;

//             if (cardTop < triggerBottom) {
//                 setTimeout(() => {
//                     card.classList.add('animate');
//                 }, index * 300);
//             }
//         });

//         // ニュースアイテムのアニメーション
//         newsItems.forEach((item, index) => {
//             const itemTop = item.getBoundingClientRect().top;

//             if (itemTop < triggerBottom) {
//                 setTimeout(() => {
//                     item.classList.add('animate');
//                 }, index * 200);
//             }
//         });

//         // 会社情報のアニメーション
//         if (companyInfo) {
//             const infoTop = companyInfo.getBoundingClientRect().top;

//             if (infoTop < triggerBottom) {
//                 companyInfo.classList.add('animate');
//             }
//         }
//     }

//     // スクロールイベントリスナー
//     window.addEventListener('scroll', checkScroll);

//     // 初期チェック
//     checkScroll();

//     // ヘッダースクロール効果
//     const header = document.querySelector('.header');
//     let lastScrollTop = 0;

//     window.addEventListener('scroll', function () {
//         let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//         if (scrollTop > lastScrollTop) {
//             // 下にスクロール
//             header.style.transform = 'translateY(-100%)';
//         } else {
//             // 上にスクロール
//             header.style.transform = 'translateY(0)';
//         }

//         // ヘッダーの背景色を変更（スクロール位置に応じて）
//         if (scrollTop > 50) {
//             header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
//             header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
//         } else {
//             header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
//             header.style.boxShadow = 'none';
//         }

//         lastScrollTop = scrollTop;
//     });
// });
