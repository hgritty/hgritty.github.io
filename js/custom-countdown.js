(() => {
  const countdown = {
    title: 'hgritty 的考研博客',
    label: '距离 27 考研还有',
    targetDate: '2026-12-19',
    timezoneOffsetHours: 8,
    phase: '当前阶段：节奏重建与基础复盘',
    focus: ['数学基础', '英语阅读', '每周复盘'],
    lines: [
      '追风赶月莫停留，平芜尽处是春山。',
      '以笔为剑，一战成硕。'
    ]
  };

  const toBeijingMidnight = (dateText) => {
    const [year, month, day] = dateText.split('-').map(Number);
    return Date.UTC(year, month - 1, day) - countdown.timezoneOffsetHours * 60 * 60 * 1000;
  };

  const getDaysLeft = () => {
    const target = toBeijingMidnight(countdown.targetDate);
    const diff = target - Date.now();
    return Math.max(Math.ceil(diff / 86400000), 0);
  };

  const renderCountdown = () => {
    const noticeEl = document.querySelector('.announcement_content');
    if (!noticeEl) return;

    const daysLeft = getDaysLeft();
    noticeEl.innerHTML = `
      <div class="exam-countdown" aria-label="${countdown.label} ${daysLeft} 天">
        <div class="exam-countdown__eyebrow">${countdown.title}</div>
        <div class="exam-countdown__main">
          <span>${countdown.label}</span>
          <strong>${daysLeft}</strong>
          <span>天</span>
        </div>
        <div class="exam-countdown__phase">${countdown.phase}</div>
        <div class="exam-countdown__focus">
          ${countdown.focus.map((item) => `<span>${item}</span>`).join('')}
        </div>
        <p>${countdown.lines[0]}</p>
        <p>${countdown.lines[1]}</p>
      </div>
    `;
  };

  document.addEventListener('DOMContentLoaded', renderCountdown);
  document.addEventListener('pjax:complete', renderCountdown);
})();
