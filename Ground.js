class Ground
{
constructor(x,y,q,t){
    let options={
        isStatic:true
    };
    this.body=Bodies.rectangle(x,y,q,t,options);
    this.q=q;
    this.t=t;
    World.add(world,this.body);
}

show(){
    var pos=this.body.position;
    push ();
    rectMode(CENTER);
    stroke (100);
    fill (rgb(115, 201, 151));
    rect (pos.x,pos.y,this.q,this.t);
    pop ();
}
}