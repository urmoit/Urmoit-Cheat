// JavaScript for the tilt effect on cards
document.querySelectorAll('.animated-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        let rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        let centerX = rect.width / 2;
        let centerY = rect.height / 2;
        let deltaX = (x - centerX) / 10;
        let deltaY = (y - centerY) / 10;
        
        card.style.transform = `rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
    });

    card.addEventListener('mouseleave', function() {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});
