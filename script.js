// ==========================================================
// YOUNICO
// JavaScript
//
// 後ほどここに
// ・プラン選択
// ・オプション選択
// ・カート
// ・料金自動計算
// ・予約フォーム
// を追加します。
// ==========================================================

/* ========================================
   BRAND CARD SCROLL ANIMATION
======================================== */

const brandCards = document.querySelectorAll('.home-plan-item');

const brandObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');

        // 一度表示したら監視終了
        observer.unobserve(entry.target);
      }

    });

  },
  {
    threshold: 0.2
  }
);

brandCards.forEach(card => {
  brandObserver.observe(card);
});

/* ========================================
   PLAN TITLE SCROLL ANIMATION
======================================== */

const planHeading = document.querySelector('.home-plan-heading');

if (planHeading) {

  const headingObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.3
    }
  );

  headingObserver.observe(planHeading);
}

/* ========================================
   SHICHI-GO-SAN
   SCROLL FADE
========================================= */

const shichigosanPage = document.querySelector(".shichigosan-page");

if (shichigosanPage) {

  const fadeTargets = document.querySelectorAll(
    ".shichigosan-plan .section-heading, " +
    ".shichigosan-plan .plan-card, " +
    ".option-section .section-heading, " +
    ".option-section .option-item, " +
    ".gallery-section .section-heading, " +
    ".gallery-section .gallery-item"
  );


  /* 最初に透明状態を付ける */
  fadeTargets.forEach((target) => {
    target.classList.add("scroll-fade");
  });


  /* スクロール監視 */
  const scrollObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("is-visible");

          scrollObserver.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px"
    }
  );


  /* 次の描画から監視開始 */
  requestAnimationFrame(() => {

    fadeTargets.forEach((target) => {
      scrollObserver.observe(target);
    });

  });

}
