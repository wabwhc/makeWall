import block from "./block.js";

export default class floor{
    constructor(Width, ctx){
        this.ctx = ctx;
        this.Width = Width;
        this.blockWidth;
        this.blocks = [];
        this.count = 0;
        this.BlockWidth();
    }

    BlockWidth(){
        while(this.Width > 30){
            this.blockWidth = Math.floor(Math.random() * 20 + 20);
            this.Width -= this.blockWidth;
            this.blocks[this.count] = this.blockWidth;
            this.count += 1;
        }
        this.blockWidth = this.Width;
        this.blocks[this.count] = this.blockWidth;
        this.count += 1;
        this.MakeBlock();
    }

    MakeBlock(){
        this.x = 0;
        for(let i = 0; i < this.blocks.length; i++){
            new block(this.blocks[i], this.x, this.ctx);
            this.x += this.blocks[i];
        }
    }
}