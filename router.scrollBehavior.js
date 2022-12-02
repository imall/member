

export default function(to, from, savedPosition) {
      // 切換頁面時讓 Element 回到頂部
      const el = document.querySelector('.member__container');
      if (el) {
        setTimeout(() => {
          el.scrollTop = 0;
        }, 500);
      }

      // 讓 window 回到頂部
      return { x: 0, y: 0 };
    }
