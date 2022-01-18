export default class block{
    constructor(width, x, ctx, floor){
        this.ctx = ctx;
        //width block의 길이 floor 층수 x 위치 
        this.width = width;
        this.floor = floor;
        this.x = x;
        //defaultY 처음에 자연스럽게 보이도록 화면 밖에서 시작
        this.defaultY = -20;
        //층수별로 바닥의 높이
        this.ground = 500 + (this.defaultY * this.floor);
        //각 block마다 속도를 다르게한다.
        this.moveY = Math.floor(Math.random() * 6) + 1;
        this.fillStyle = "#" + Math.round(Math.random() * 0xffffff).toString(16);
        window.requestAnimationFrame(this.animate.bind(this))
    }

    animate(){
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.clearRect(this.x, this.defaultY - this.moveY, this.width, 20);
        this.ctx.fillRect(this.x, this.defaultY, this.width, 20);
        this.defaultY += this.moveY;
        
        if(this.defaultY > this.ground){
            this.ctx.clearRect(this.x, this.defaultY - this.moveY, this.width,20);
            this.ctx.fillRect(this.x, this.ground, this.width, 20);
        }else{
            window.requestAnimationFrame(this.animate.bind(this))
        }
        
    }
    changemoveY(){
        //속도 변경
        this.moveY = 10;
    }

}