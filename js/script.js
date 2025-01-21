const serviceBoxes = document.querySelectorAll('.service-box');
serviceBoxes.forEach(serviceBox => {
const circle = serviceBox.querySelector('.circle');
const serviceBoxRect = serviceBox.getBoundingClientRect();
serviceBox.addEventListener('mouseenter', () => {
    document.body.style.cursor = 'none';
    circle.style.display = 'block';
});
serviceBox.addEventListener('mouseleave', () => {
    document.body.style.cursor = 'default';
    circle.style.display = 'none';
});
document.addEventListener('mousemove', (e) => {
    let x = e.pageX - serviceBoxRect.left - circle.offsetWidth / 2;
    let y = e.pageY - serviceBoxRect.top - circle.offsetHeight / 2;
    x = Math.max(0, Math.min(serviceBoxRect.width - circle.offsetWidth, x));
    y = Math.max(0, Math.min(serviceBoxRect.height - circle.offsetHeight, y));
    if (circle.style.display === 'block') {
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    }
});
});