class Bush{
    constructor(x,y){
            this.bushImg= loadImage("images/bush.png");
            this.width = 85;
            this.height = 75;
            this.x = x;
            this.y = y;
    }
     display(){
         imageMode(CENTER);
         image(this.bushImg,this.x,this.y,this.width,this.height);
         
     }
}