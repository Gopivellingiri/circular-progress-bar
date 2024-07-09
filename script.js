

const circularProgress = document.querySelector('.circular-progress');
const progressValue = document.querySelector('.progress-value');

const progressEndValue = 80;
const speed = 100;

function updateProgress(progressStartValue) {
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`;
}

let progressStartValue = 0;
const progress = setInterval(() => {
    progressStartValue++;
    updateProgress(progressStartValue);
    
    if (progressStartValue === progressEndValue) {
        clearInterval(progress);
    }
}, speed);
