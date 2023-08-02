const colors = document.querySelectorAll('.colored');
const colors2 = document.querySelectorAll('.colored2');
const colors3 = document.querySelectorAll('.colored3');
const colors4 = document.querySelectorAll('.colored4');
const colors5 = document.querySelectorAll('.colored5');
const colors6 = document.querySelectorAll('.colored6');
const input = document.getElementById('style1');

function isTouchDevice() {
  // Cihazın dokunmatik ekranı olup olmadığını kontrol etmek için matchMedia kullanılır
  return matchMedia('(hover: none)').matches;
}

function mouseOver(element) {
  if (!isTouchDevice()) {
    element.style.border = `1px solid ${input.value}`;
    element.style.color = 'white';
    element.style.backgroundColor = 'transparent';
  }
}

function mouseOut(element) {
  if (!isTouchDevice()) {
    element.style.backgroundColor = input.value;
    element.style.color = 'rgb(14, 14, 14)';
    element.style.border = `1px solid ${input.value}`;
  }
}

function textOver(element) {
  if (!isTouchDevice()) {
    element.style.setProperty('--text-stroke-color', input.value);
    element.style.color = input.value;
  }
}

function textOut(element) {
  if (!isTouchDevice()) {
    element.style.color = 'transparent';
  }
}

// Check if the animation has been played before
const hasAnimationPlayed = localStorage.getItem('hasAnimationPlayed');

// If the animation has not played before, run the animation
if (!hasAnimationPlayed) {
  const elementsWithHoverEffect = document.querySelectorAll('.hover-effect');
  elementsWithHoverEffect.forEach((element) => {
    element.style.animation = 'fade-in 0.8s ease-in forwards';
  });

  // Save to localStorage to prevent the animation from running again on subsequent page loads
  localStorage.setItem('hasAnimationPlayed', true);
}

// #typing-animation:after stilini güncelleme fonksiyonu
function updateTypingAnimationColor(color) {
  const typingAnimationAfter = document.getElementById('typing-animation').style;
  typingAnimationAfter.setProperty('--after-color', input.value);
}

input.oninput = function () {
  for (let i = 0; i < colors.length; i++) {
    colors[i].style.setProperty('--text-stroke-color', input.value);
    colors[i].style.setProperty('--animation-color', input.value);
  }
  for (let i = 0; i < colors2.length; i++) {
    colors2[i].style.color = input.value;
  }
  for (let i = 0; i < colors3.length; i++) {
    colors3[i].style.backgroundColor = input.value;
    colors3[i].style.border = `1px solid ${input.value}`;
  }
  for (let i = 0; i < colors4.length; i++) {
    colors4[i].style.setProperty('-webkit-text-stroke-color', input.value);
    colors4[i].style.color = 'transparent';
  }
  for (let i = 0; i < colors5.length; i++) {
    colors5[i].style.backgroundColor = input.value;
    colors5[i].style.border = `1px solid ${input.value}`;
  }
  for (let i = 0; i < colors6.length; i++) {
    colors6[i].style.backgroundColor = input.value;
  }

  // #typing-animation:after stilini güncelle
  updateTypingAnimationColor(input.value);

  // Yeni renk değerini localStorage'e kaydediyoruz.
  localStorage.setItem('savedColor', input.value);

  // Kaydırma çubuğu rengini güncelle
  document.documentElement.style.setProperty('--scrollbar-thumb-color', input.value);
};

// Sayfa yüklenirken ve sayfa yenilenirken, kaydedilen rengi yükleriz
window.addEventListener('beforeunload', function () {
  localStorage.setItem('savedColor', input.value);
});

// Sayfa gizlendiğinde veya tarayıcıdan çıkarken tetiklenir
window.addEventListener('pagehide', function () {
  localStorage.setItem('savedColor', input.value);
});

// Sayfanın görünürlüğü değiştiğinde tetiklenir (örneğin, kullanıcı bir sekmeden başka bir sekme geçerse)
document.addEventListener('visibilitychange', function () {
  // Eğer sayfa tamamen görünmez hale gelirse (hidden olduğunda), localStorage'a kayıt yapar
  if (document.visibilityState === 'hidden') {
    localStorage.setItem('savedColor', input.value);
  }
});

// Sayfa yüklendiğinde, eğer daha önce bir renk seçilmişse onu yüklüyoruz.
window.onload = function () {
  const savedColor = localStorage.getItem('savedColor');
  if (savedColor) {
    input.value = savedColor;

    // Aynı şekilde, yüklenen rengi tüm öğelerde kullanılacak renk olarak ayarlıyoruz.
    for (let i = 0; i < colors.length; i++) {
      colors[i].style.setProperty('--text-stroke-color', savedColor);
      colors[i].style.setProperty('--animation-color', savedColor);
    }
    for (let i = 0; i < colors2.length; i++) {
      colors2[i].style.color = savedColor;
    }
    for (let i = 0; i < colors3.length; i++) {
      colors3[i].style.backgroundColor = savedColor;
      colors3[i].style.border = `1px solid ${savedColor}`;
    }
    for (let i = 0; i < colors4.length; i++) {
      colors4[i].style.setProperty('-webkit-text-stroke-color', savedColor);
      colors4[i].style.color = 'transparent';
    }
    for (let i = 0; i < colors5.length; i++) {
      colors5[i].style.backgroundColor = savedColor;
      colors5[i].style.border = `1px solid ${savedColor}`;
    }
    for (let i = 0; i < colors6.length; i++) {
      colors6[i].style.backgroundColor = savedColor;
    }

    // #typing-animation:after stilini güncelle
    updateTypingAnimationColor(savedColor);

    // Update the scrollbar thumb color on page load
    document.documentElement.style.setProperty('--scrollbar-thumb-color', savedColor);
  }
};
