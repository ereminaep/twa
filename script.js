document.addEventListener('DOMContentLoaded', function () {
  const user = window.Telegram.WebApp.initDataUnsafe?.user;

  if (user) {
    document.getElementById('username').textContent = `Ты вошёл как ${user.first_name} ${user.last_name || ''}`;
  } else {
    document.getElementById('username').textContent = 'Не удалось загрузить данные пользователя.';
  }

  window.Telegram.WebApp.ready();
});

function showAlert() {
  const user = window.Telegram.WebApp.initDataUnsafe?.user;
  if (user) {
    alert(`Привет, ${user.first_name}!`);
  } else {
    alert("Пользователь не найден.");
  }
}

function trackAndClose() {
  // Отправляем событие в Яндекс.Метрику
  if (typeof ym === 'function') {
    ym(101632153, 'reachGoal', 'pushButtonTest');
    console.log("Цель pushButtonTest отправлена");
  } else {
    console.warn("Яндекс.Метрика не загружена");
  }

  // Закрываем мини-приложение
  window.Telegram.WebApp.close();
}
