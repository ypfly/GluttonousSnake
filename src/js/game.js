function Game(map, food, snake) {
    this.food = food;
    this.snake = snake;
    this.map = map;
    that = this;
    this.timeId=null;
    
}
Game.prototype.init = function () {
    this.food.init(this.map);
    this.snake.init(this.map);
     
}
Game.prototype.gameStart=function(){
    this.init();
    this.runSnake(this.food,this.map);
    this.bindKey();
}
Game.prototype.gameStop=function(){
    clearInterval(this.timeId);
}
Game.prototype.runSnake = function (food, map) {
    this.timeId= setInterval(function () {
        this.snake.move(food, map);
        var maxX = map.offsetWidth / this.snake.width;
        //纵坐标的最大值
        var maxY = map.offsetHeight / this.snake.height;
        //小蛇的头的坐标
        var headX = this.snake.body[0].x;
        var headY = this.snake.body[0].y;
        //横坐标
        if (headX < 0 || headX >= maxX) {
          //撞墙了,停止定时器
          clearInterval(this.timeId);
          alert("游戏结束");
        }
        //纵坐标
        if (headY < 0 || headY >= maxY) {
          //撞墙了,停止定时器
          clearInterval(this.timeId);
          alert("游戏结束");
        }
    }.bind(that), 150);
};

Game.prototype.bindKey = function () {
    document.addEventListener("keydown", function (e) {
        switch (e.keyCode) {
            case 37: this.snake.direction = "left"; break;
            case 38: this.snake.direction = "top"; break;
            case 39: this.snake.direction = "right"; break;
            case 40: this.snake.direction = "bottom"; break;
        }
    }.bind(that),false);
};