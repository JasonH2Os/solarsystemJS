const solarSystem = document.querySelector('.solar-system');
const planetsData = [
    { name: 'mercury', size: '10px', color: 'gray', distance: '40px', duration: '1s' },
    { name: 'venus', size: '25px', color: 'goldenrod', distance: '75px', duration: '2s' },
    { name: 'earth', size: '30px', color: 'blue', distance: '110px', duration: '4s' },
    { name: 'mars', size: '20px', color: 'red', distance: '145px', duration: '8s' },
    { name: 'jupiter', size: '60px', color: 'orange', distance: '200px', duration: '12s' },
    { name: 'saturn', size: '50px', color: 'goldenrod', distance: '270px', duration: '30s' },
    { name: 'uranus', size: '40px', color: 'lightseagreen', distance: '320px', duration: '90s' },
    { name: 'neptune', size: '38px', color: 'blue', distance: '360px', duration: '120s' },
];

planetsData.forEach(planet => {
    const planetDiv = document.createElement('div');
    planetDiv.className = 'planet';
    planetDiv.style.width = planet.size;
    planetDiv.style.height = planet.size;
    planetDiv.style.backgroundColor = planet.color;
     planetDiv.style.setProperty('--distance', planet.distance);
    // Set the initial position of the planet based on its distance from the sun
    planetDiv.style.transform = `translate(-50%, -50%) rotate(0deg) translate(${planet.distance}) rotate(0deg)`;
    
    // Set the animation so that it includes both the rotation and the translation to simulate orbiting
    planetDiv.style.animation = `rotatePlanet ${planet.duration} linear infinite`;
    
    solarSystem.appendChild(planetDiv);
});
function drawStars() {
    for (let i = 0; i < numberOfStars; i++) {
        const x = randomBetween(0, canvas.width);
        const y = randomBetween(0, canvas.height);
        const starSize = randomBetween(1, 3);
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(x, y, starSize, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// Modify the keyframes to handle the orbit
const style = document.createElement('style');
style.innerHTML = `
    @keyframes rotatePlanet {
        0% { transform: translate(-50%, -50%) rotate(0deg) translateX(var(--distance)) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg) translateX(var(--distance)) rotate(-360deg); }
    }
`;
document.head.appendChild(style);
