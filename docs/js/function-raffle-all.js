const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let interval;

function goToSlide(index) {
  currentIndex = index;
  slider.style.transform = `translateX(-${600 * index}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(interval); 
    goToSlide(Number(dot.dataset.index));
    startAutoSlide();
  });
});

function startAutoSlide() {
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % 3;
    goToSlide(currentIndex);
  }, 5000);
}

startAutoSlide();

function openModal() {
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}




function updateGenerateButtonText() {
  const selectedNumber = document.getElementById('ticketCount').value;
  const button = document.getElementById('generateBtn');
  if (selectedNumber === "1") {
    button.textContent = 'Haz clic aquí para generar 1 boleto al azar';
  } else {
    button.textContent = `Haz clic aquí para generar ${selectedNumber} boletos al azar`;
  }
}

function generateTicket() {
  const selectedNumber = parseInt(document.getElementById('ticketCount').value);
  const button = document.getElementById('generateBtn');
  const generatedTickets = [];

  for (let i = 0; i < selectedNumber; i++) {
    const randomTicket = Math.floor(Math.random() * 100);
    generatedTickets.push(randomTicket);
  }

  const generatedTicketsDiv = document.getElementById('generatedTickets');
  let ticketsText = '<h3>Boletos generados:</h3>';
  ticketsText += '<br>' + generatedTickets.join(', ');
  generatedTicketsDiv.innerHTML = ticketsText;

  const selectBtn = document.getElementById('selectTicketsBtn');
  selectBtn.style.display = 'inline-block';

  if (selectedNumber === "1") {
    button.textContent = 'Haz clic aquí para volver a generar 1 boleto al azar';
  } else {
    button.textContent = `Haz clic aquí para volver a generar ${selectedNumber} boletos al azar`;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('ticketContainer');
  for (let i = 0; i < 100; i++) {
    const btn = document.createElement('button');
    btn.classList.add('ticket-btn');
    btn.textContent = i.toString().padStart(2, '0');
    container.appendChild(btn);
  }
});
