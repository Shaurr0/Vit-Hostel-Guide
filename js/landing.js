function enterWebsite() {
    const landingContent = document.querySelector('.landing-content');
    landingContent.style.animation = 'fadeOutDown 0.6s ease-in forwards';
    
    setTimeout(() => {
        window.location.href = './index.html';
    }, 600);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOutDown {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(30px);
        }
    }
`;
document.head.appendChild(style);
