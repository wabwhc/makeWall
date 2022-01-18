import floor from "./floor.js"

class app{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        //floor 만들어지는 층수
        //floors floor클래스를 저장하는 배열
        this.floor = 0;
        this.floors = [];
        document.body.addEventListener('click', () => {
            this.floor += 1;
            this.floors[this.floor - 1] = new floor(this.Width, this.ctx, this.floor);
            for(let i = 0; i < this.floors.length - 1; i++){
                //새로운 층을 만들면 아래층 속도를 변경해 겹치지않게 한다.
                this.floors[i].changemoveY();
            }

        })
        //Width 벽돌 만들때 화면 가로길이에 맞추기 위한 변수
        this.Width = document.body.clientWidth;
        this.resize();

    }

    resize(){
        this.StageWidht = document.body.clientWidth;
        this.StageHeight = document.body.clientHeight;
        this.canvas.width = this.StageWidht;
        this.canvas.height = this.StageHeight;
    }

}

window.onload = () => {
    new app();
}