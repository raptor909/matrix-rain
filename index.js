const canvas = document.querySelector('.matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '01'
const font = 'monospace'
const fontSize = 16;
const speed = 45;


const columns = canvas.width/fontSize;

const raindrops = []

for(let x  = 0; x < columns; x++){
    raindrops[x]=1;
}

const draw = () => {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px ${font}`;

    for(let i=0; i<raindrops.length;i++){
        const text = chars.charAt(Math.floor(Math.random()*chars.length));
        ctx.fillText(text, i*fontSize, raindrops[i]*fontSize);

        if(raindrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            raindrops[i] = 0;
        }
        raindrops[i]++;
    }
};

setInterval(draw, speed);