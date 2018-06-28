
function Snake(width, height, direction) {
    this.width = width || 20;
    this.height = height || 20;
    this.direction = direction || "right"
    this.body = [
        { element: document.createElement("div"), x: 3, y: 2, color: "red" },
        { element: document.createElement("div"), x: 2, y: 2, color: "orange" },
        { element: document.createElement("div"), x: 1, y: 2, color: "orange" }
    ];
}
Snake.prototype.init = function (map) {
    for (var i = 0; i < this.body.length; i++) {
        var obj = this.body[i];
        var div = this.body[i].element;

        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = obj.color;
        div.style.position = "absolute";

        div.style.left = obj.x * this.width + "px";
        div.style.top = obj.y * this.height + "px";

        map.appendChild(div);
    }
}
Snake.prototype.move = function (food, map) {
    var headX = 0;
    var headY = 0;
   
    for (var i = this.body.length - 1; i > 0; i--) {
        this.body[i].x = this.body[i - 1].x;
        this.body[i].y = this.body[i - 1].y;
        // console.log("自己X:" + this.body[i].x + "\n自己y:" + this.body[i].y)
        // console.log("前面一個x:" + this.body[i - 1].x + "\n前面一個y:" + this.body[i - 1].y)
        this.body[i].element.style.left = this.body[i].x * this.width + "px";
        this.body[i].element.style.top = this.body[i].y * this.height + "px";

    }
    switch (this.direction) {
        case "right":
            this.body[0].x += 1;

            headX = this.body[0].x * this.width;
            this.body[0].element.style.left = this.body[0].x * this.width + "px";
            headY = this.body[0].y * this.height;
            break;
        case "left":
            this.body[0].x -= 1;
            headX = this.body[0].x * this.width ;
            this.body[0].element.style.left = this.body[0].x * this.width + "px";
            headY = this.body[0].y * this.height;
            break;
        case "top":
            this.body[0].y -= 1;
            headY = this.body[0].y * this.height ;
            this.body[0].element.style.top = this.body[0].y * this.height + "px";
            headX = this.body[0].x * this.width;
            break;
        case "bottom":
            this.body[0].y += 1;
            headY = this.body[0].y * this.height;
            this.body[0].element.style.top = this.body[0].y * this.height + "px";
            headX = this.body[0].x * this.width;
            break;
    }

    //console.log("headX:"+headX+"--food.x:"+food.x+"--headY:"+headY+"--food.y:"+food.y)
    if (headX == food.x && headY == food.y) {
        console.log("吃到了")
        var last = this.body[this.body.length - 1];
        this.body.push({
            element: document.createElement("div"),
            x: last.x,
            y: last.y,
            color: last.color
        });
        var divobj = this.body[this.body.length - 1].element;
        
        divobj.style.width = this.width+"px";
        divobj.style.height = this.height+"px";
       
        divobj.style.backgroundColor = this.body[this.body.length-1].color;
        divobj.style.position = "absolute";
        divobj.style.left = divobj.x * this.width + "px";
        divobj.style.top = divobj.y * this.height + "px";
        map.appendChild(divobj);
        food.render(Random.getRandom(0, map.offsetWidth / food.width) * food.width,
            Random.getRandom(0, map.offsetHeight / food.height) * food.height)
    }

}