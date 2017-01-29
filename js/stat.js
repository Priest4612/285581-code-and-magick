'use strict';
window.renderStatistics = function (ctx, names, times) {
  var drowCloud = function (ctx, x, y, width, height, roundoff, offset){
    ctx.beginPath();
    ctx.moveTo(x + roundoff + offset, y + offset);
    ctx.lineTo(x + width - roundoff + offset, y + offset); //1 линия
    ctx.quadraticCurveTo(x + width + offset, y + offset, x + width + offset, y + roundoff + offset); //скругление в п
    ctx.lineTo(x + width + offset, y + height - roundoff + offset); //2 линия впу к нпу
    ctx.quadraticCurveTo(x + width + offset, y + height + offset, x + width - roundoff + offset, y + height + offset);
    ctx.lineTo(x + roundoff + offset, y + height + offset);
    ctx.quadraticCurveTo(x + offset, y + height + offset, x + offset, y + height - roundoff + offset);
    ctx.lineTo(x + offset, y + roundoff + offset);
    ctx.quadraticCurveTo(x + offset, y + offset, x + roundoff + offset, y + offset);
    ctx.closePath();
  };

  var drowHisto = function(ctx, names, times) {
    function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
    }
    var histoHeight = 150;
    var histoX = 140;
    var startColumn = 250;
    var widthColumn = 40;
    var columnIndent = widthColumn + 50;
    var step = histoHeight / getMaxOfArray(times);

    for (var i = 0; i < times.length; i++) {
      var name = names[i];
      var time = times[i];
      var height = step * time;

      if(name === 'Вы'){
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = ['rgba(0, 0, ', ((Math.random() * 5) * 50).toFixed(0), ', ', (0.5 + Math.random() * (1 + 0.5)).toFixed(1), ')'].join('');
      }
      ctx.fillRect(histoX + columnIndent * i, startColumn, widthColumn, -height);
      ctx.fillText(name, histoX + columnIndent * i, startColumn + 20);
      ctx.fillText(time.toFixed(0), histoX + columnIndent * i, startColumn - height - 5);
    }
  }

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drowCloud(ctx, 100, 10, 420, 270, 30, 10);
  ctx.fill();

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  drowCloud(ctx, 100, 10, 420, 270, 30, 0);
  ctx.fill();
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.fillStyle = '#000000';
  ctx.font = '24px PT Mono';
  ctx.fillText('Ура вы победили!', 210, 40);

  ctx.fillStyle = '#000000';
  ctx.font = '18px PT Mono';
  ctx.fillText('Список результатов:', 130, 65);
  drowHisto(ctx, names, times);
};



