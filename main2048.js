var board = new Array();
var score = 0;
$(function () {
    newgame();
});
function newgame() {
    //初始化棋盘
    init();
    //在随机格子生成两个数字
    generateOneNumber();
    generateOneNumber();
}
function init(){
    //初始化棋盘
    for (var i = 0; i < 4; i++){
        for (var j = 0; j < 4; j++ ){
            var gridCell = $("#grid-cell-" + i + "-" + j);
            gridCell.css("top", getPosTop(i, j));
            gridCell.css("left", getPosLeft(i, j));
        }
    }
    //初始化cell-number的值
    for(var i = 0; i < 4; i++){
        board[i] = new Array();
        for (var j = 0; j < 4; j++){
            board[i][j] = 0;
        }
    }
    //根据cell-number的值来初始化棋子
    updateBoardView();
}
//
function updateBoardView(){
    //清空棋子
    $(".number-cell").remove();
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            $("#grid-container").append('<div class="number-cell" id="number-cell-' + i + '-' + j +'"></div>');
            var theNumberCell = $("#number-cell-" + i + "-" + j);
            if (board[i][j] == 0){
                theNumberCell.css("height", "0px");
                theNumberCell.css("width", "0px");
                theNumberCell.css("top", getPosTop(i, j) + 50);
                theNumberCell.css("left", getPosLeft(i, j) + 50);
            }
            else{
                theNumberCell.css("height", "100px");
                theNumberCell.css("width", "100px");
                theNumberCell.css("top", getPosTop());
                theNumberCell.css("left", getPosLeft());
                theNumberCell.css("background-color", getNumberCellBackgroundcolor(board[i][j]));
                theNumberCell.css("color", getNumberCellColor(board[i][j]));
                theNumberCell.text(board[i][j]);
            }
        }
    }
}
function generateOneNumber(){
    //判断是否还有空格
    if (nospace(board)){
        //没有空格
        return false;
    }
    //随机生成一个位置
    var randx = parseInt(Math.floor((Math.random() * 4)));
    var randy = parseInt(Math.floor((Math.random() * 4)));
    //判断随机随机生成的位置上面有没有数字
    while (true){
        if (board[randx][randy] == 0){
            break;
        }
        randx = parseInt(Math.floor((Math.random() * 4)));
        randy = parseInt(Math.floor((Math.random() * 4)));
    }
    //随机生成数字2,4
    var randNumber = Math.random() < 0.5 ? 2 : 4;
    //在随机位置以动画的方式显示随机数字
    board[randx][randy] = randNumber;

    showNumberWithAnimation(randx, randy, randNumber);
    return true;
}

