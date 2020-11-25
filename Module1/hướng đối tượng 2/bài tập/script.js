class Hero{
    constructor(image, top, left, size , speed) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
        this.speed = speed;
    }
    getHeroElement() {
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;"/>';

    }
    moveRight (){
        this.left += 40;
        console.log('ok: ' + this.left);
}

}

let hero = new Hero('https://github.com/codegym-vn/objects/blob/master/pikachu.png?raw=true', 20, 30, 200);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();