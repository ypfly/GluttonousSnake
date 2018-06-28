(function (window) {
    function Random() { };
    Random.prototype.getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    window.Random = new Random();
})(window);


function Food(width, height, color) {
    this.width = width || 20;
    this.height = height || 20;
    this.color = color || "red";
    this.x = 0;
    this.y = 0;
    this.element = document.createElement("div");
};

Food.prototype.init = function (map) {
    this.element.style.width = this.width + "px"; //设置宽度
    this.element.style.height = this.height + "px";//设置高度
    this.element.style.backgroundColor = this.color;    //设置背景颜色
    this.element.style.position = "absolute";  //相对定位 脱离文本流

    map.appendChild(this.element); //把食物放到地图上
    var leftValue = Random.getRandom(0, map.offsetWidth / this.width) * this.width;
    var topValue = Random.getRandom(0, map.offsetHeight / this.height) * this.height;
   
    this.render( leftValue, topValue);
};

Food.prototype.render = function (leftValue, topValue) {    
    this.x = leftValue;
    this.y = topValue;
    this.element.style.top = this.y + "px";
    this.element.style.left = this.x + "px";
};