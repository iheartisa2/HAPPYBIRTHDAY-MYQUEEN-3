let isCardFlipped = false;

function checkPassword() {
  const password = document.getElementById('password-input').value;
  if (password === 'rafxisa') {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-site').style.display = 'block';
    document.body.style.backgroundColor = '#ff69b4'; // Pink background after login
  } else {
    alert('Incorrect password! Please try again.');
  }
}

function toggleCard() {
  const giftBox = document.getElementById('gift-box');
  if (isCardFlipped) {
    giftBox.style.transform = 'rotateY(0deg)'; // Flip it back to the front
  } else {
    giftBox.style.transform = 'rotateY(180deg)'; // Flip to the back
    createConfettiAndHearts(); // Trigger the confetti and hearts animation
  }
  isCardFlipped = !isCardFlipped;
}

function createConfettiAndHearts() {
  // Create Confetti
  for (let i = 0; i < 20; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = ${Math.random() * 100}%;
    confetti.style.animationDuration = ${Math.random() * 1 + 1}s;
    document.getElementById('confetti').appendChild(confetti);
  }

  // Create Hearts
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = ${Math.random() * 100}%;
    heart.style.animationDuration = ${Math.random() * 1 + 1}s;
    document.getElementById('hearts').appendChild(heart);
  }
}

