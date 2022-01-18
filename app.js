import floor from "./floor.js"

class app{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.Width = document.body.clientWidth;
        this.resize();
        
        new floor(this.Width, this.ctx);
    }

    resize(){
        this.StageWidht = document.body.clientWidth;
        this.StageHeight = document.body.clientHeight;
        this.canvas.width = this.StageWidht;
        this.canvas.height = this.StageHeight;
    }


    animate(){

    }



}

window.onload = () => {
    new app();
}