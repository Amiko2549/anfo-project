const percentage = 67;
const circle = document.getElementById('progress-circle');
const text = document.getElementById('progress-text');

const circumference = 2 * Math.PI * 45;
const totalDashArray = circumference * (percentage / 100);
const offset = circumference - totalDashArray;

circle.style.strokeDasharray = `${totalDashArray}, ${circumference}`;
circle.style.strokeDashoffset = offset;

text.textContent = `${percentage}%`;