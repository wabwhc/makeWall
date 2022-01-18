import block from "./block.js";

export default class floor{
    constructor(Width, ctx, floor){
        this.ctx = ctx;
        this.Width = Width;
        this.floor = floor;
        //blockWidth 블럭별 길이이다.
        this.blockWidth;
        //blockWidths  블럭별 길이를 저장하는 배열
        this.blockWidths = [];
        //count 블럭 개수
        this.count = 0;
        //makeblock block클래스 저장
        this.makeblock = [];
        this.BlockWidth();
    }

    BlockWidth(){
        //남은 길이가 30이하면 마지막으로 생성한다.
        while(this.Width > 30){
            this.blockWidth = Math.floor(Math.random() * 20 + 20);
            this.Width -= this.blockWidth;
            this.blockWidths[this.count] = this.blockWidth;
            this.count += 1;
        }
        this.blockWidth = this.Width;
        this.blockWidths[this.count] = this.blockWidth;
        this.count += 1;
        this.MakeBlock();
    }

    MakeBlock(){
        //x 만들어질 block클래스의 가로 위치
        this.x = 0;
        for(let i = 0; i < this.blockWidths.length; i++){
            this.makeblock[i] = new block(this.blockWidths[i], this.x, this.ctx, this.floor);
            this.x += this.blockWidths[i];
        }
    }
    changemoveY(){
        //속도를 변경한다.
        for(let i = 0; i < this.blockWidths.length; i++){
            this.makeblock[i].changemoveY();
        }
    }
}