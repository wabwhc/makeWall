export default class block{
    constructor(width, x, ctx){
        this.ctx = ctx;
        this.width = width;
        this.x = x;
        this.defaultY = -20;
        this.moveY = (Math.random() * 6) + 1;
        this.fillStyle = "#" + Math.round(Math.random() * 0xffffff).toString(16);
        window.requestAnimationFrame(this.animate.bind(this))
    }

    animate(){
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.clearRect(this.x, 0, this.width, document.body.clientHeight);
        this.ctx.fillRect(this.x, this.defaultY, this.width, 20);
        this.defaultY += this.moveY;
        
        if(this.defaultY > 500){
            this.ctx.clearRect(this.x, this.defaultY - this.moveY, this.width, 20);
            this.ctx.fillRect(this.x, 500, this.width, 20);

        }else{
            window.requestAnimationFrame(this.animate.bind(this))
        }
        
    }

}