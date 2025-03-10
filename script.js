const cube = document.getElementById('cube');

document.addEventListener('mousemove', (e) => {
    let x = (e.clientX / window.innerWidth - 0.5) * 360;
    let y = (e.clientY / window.innerHeight - 0.5) * 360;

    cube.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});
