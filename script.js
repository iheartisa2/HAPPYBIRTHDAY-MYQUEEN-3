let isCardFlipped = false;

function checkPassword() {
  const password = document.getElementById('password-input').value;
  if (password === 'rafxisa') {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-site').style.display = 'block';
    document.body.style.backgroundColor = '#ff69b4'; // Pink background after login
    showCandle(); // Show the birthday candle after login
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
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDuration = `${Math.random() * 1 + 1}s`;
    document.getElementById('confetti').appendChild(confetti);
  }

  // Create Hearts
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 1 + 1}s`;
    document.getElementById('hearts').appendChild(heart);
  }
}

function showCandle() {
  document.getElementById('candle-container').style.display = 'block';
  detectBlow();
}

function detectBlow() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert("Your browser does not support microphone input.");
    return;
  }

  navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(stream);
    const dataArray = new Uint8Array(analyser.fftSize);
    analyser.connect(audioContext.destination);
    microphone.connect(analyser);

    function checkBlow() {
      analyser.getByteTimeDomainData(dataArray);
      const maxVolume = Math.max(...dataArray);
      if (maxVolume > 200) { // Adjust threshold for "blow"
        blowOutCandle();
      } else {
        requestAnimationFrame(checkBlow);
      }
    }

    checkBlow();
  });
}

function blowOutCandle() {
  const flame = document.getElementById('flame');
  flame.style.animation = 'fade-out 2s forwards';
  setTimeout(() => {
    flame.style.display = 'none';
    alert('You blew out the candle! 🎉');
  }, 2000);
}
