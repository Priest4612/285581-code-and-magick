'use strict';
window.renderStatistics = function (ctx, names, times) {
  var drawCloud = function (x, y, width, height, roundoff, offset) {
    ctx.beginPath();
    ctx.moveTo(x + roundoff + offset, y + offset);
    ctx.lineTo(x + width - roundoff + offset, y + offset);
    ctx.quadraticCurveTo(x + width + offset, y + offset, x + width + offset, y + roundoff + offset);
    ctx.lineTo(x + width + offset, y + height - roundoff + offset);
    ctx.quadraticCurveTo(x + width + offset, y + height + offset, x + width - roundoff + offset, y + height + offset);
    ctx.lineTo(x + roundoff + offset, y + height + offset);
    ctx.quadraticCurveTo(x + offset, y + height + offset, x + offset, y + height - roundoff + offset);
    ctx.lineTo(x + offset, y + roundoff + offset);
    ctx.quadraticCurveTo(x + offset, y + offset, x + roundoff + offset, y + offset);
    ctx.closePath();
  };

  var drawMessage = function (message, color, fontSize, font, x, y) {
    ctx.fillStyle = color;
    ctx.font = [fontSize, 'px ', font].join('');
    ctx.fillText(message, x, y);
  };

  var drawHisto = function () {
    var getMaxOfArray = function (numArray) {
      return Math.max.apply(null, numArray);
    };

    var drawRect = function (x1, y1, x2, y2, color) {
      ctx.fillStyle = color || '#000000';
      ctx.fillRect(x1, y1, x2, y2);
    };

    var randomColor = function () {
      return ['rgba(0, 0, ', (Math.random() * 255).toFixed(0), ', ', (0.5 + Math.random() * (1 - 0.5)).toFixed(1), ')'].join('');
    };

    var histoHeight = 150;
    var histoX = 140;
    var startColumn = 250;
    var widthColumn = 40;
    var columnIndent = widthColumn + 50;
    var step = histoHeight / getMaxOfArray(times);
    var correntColor;

    for (var i = 0; i < times.length; i++) {
      var name = names[i];
      var height = step * times[i];
      var indent = histoX + columnIndent * i;

      if (name === 'Вы') {
        correntColor = 'rgba(255, 0, 0, 1)';
      } else {
        correntColor = randomColor();
      }
      drawRect(indent, startColumn, widthColumn, -height, correntColor);
      ctx.fillText(name, indent, startColumn + 20);
      ctx.fillText(times[i].toFixed(0), indent, startColumn - height - 5);
    }
  };

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drawCloud(100, 10, 420, 270, 30, 10);
  ctx.fill();

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  drawCloud(100, 10, 420, 270, 30, 0);
  ctx.fill();
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 5;
  ctx.stroke();

  drawMessage('Ура вы победили!', '#000000', 24, 'PT Mono', 210, 40);
  drawMessage('Список результатов:', '#000000', 18, 'PT Mono', 130, 65);
  drawHisto(names, times);
};
