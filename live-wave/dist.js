'use strict';

var Audio = window.AudioContext || window.webkitAudioContext;
var audioCtx = new Audio();

var canvas = document.createElement('canvas');

canvas.setAttribute('width', '1024px');
canvas.setAttribute('height', '400px');

var ctx = canvas.getContext('2d');
var raw = undefined;

document.body.appendChild(canvas);

(function paintFrame() {
  if (raw) {
    ctx.clearRect(0, 0, 1024, 400);
    raw.forEach(function (v, i) {
      var n = (v + 1) / 2;
      ctx.fillRect(i, n * 400, 2, 2);
    });
  }

  window.requestAnimationFrame(paintFrame);
})();

navigator.webkitGetUserMedia({ audio: true }, function (stream) {
  var mic = audioCtx.createMediaStreamSource(stream);
  var processor = audioCtx.createScriptProcessor(1024, 1, 1);

  mic.connect(processor);
  processor.connect(audioCtx.destination);

  processor.onaudioprocess = function (e) {
    raw = Array.prototype.slice.call(e.inputBuffer.getChannelData(0), 0);
  };
}, function (err) {});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxLQUFLLEdBQUksTUFBTSxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUMsa0JBQWtCLEFBQUMsQ0FBQztBQUNqRSxJQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDOztBQUU3QixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUU5QyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN2QyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFdkMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxJQUFJLEdBQUcsWUFBQSxDQUFDOztBQUVSLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUVsQyxDQUFDLFNBQVMsVUFBVSxHQUFHO0FBQ3JCLE1BQUksR0FBRyxFQUFFO0FBQ1AsT0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMvQixPQUFHLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBSztBQUNwQixVQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUEsR0FBSSxDQUFDLENBQUM7QUFDcEIsU0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDOUIsQ0FBQyxDQUFDO0dBQ0o7O0FBRUQsUUFBTSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0NBQzFDLENBQUEsRUFBRyxDQUFDOztBQUVMLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsRUFBRSxVQUFDLE1BQU0sRUFBSztBQUN0RCxNQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkQsTUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0FBRTNELEtBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkIsV0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRXhDLFdBQVMsQ0FBQyxjQUFjLEdBQUcsVUFBQyxDQUFDLEVBQUs7QUFDaEMsT0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztHQUN0RSxDQUFDO0NBQ0gsRUFBRSxVQUFDLEdBQUcsRUFBSyxFQUFHLENBQUMsQ0FBQyIsImZpbGUiOiJkaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQXVkaW8gPSAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KTtcbmNvbnN0IGF1ZGlvQ3R4ID0gbmV3IEF1ZGlvKCk7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblxuY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTAyNHB4Jyk7XG5jYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnNDAwcHgnKTtcblxubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xubGV0IHJhdztcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG4oZnVuY3Rpb24gcGFpbnRGcmFtZSgpIHtcbiAgaWYgKHJhdykge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgMTAyNCwgNDAwKTtcbiAgICByYXcuZm9yRWFjaCgodiwgaSkgPT4ge1xuICAgICAgbGV0IG4gPSAodiArIDEpIC8gMjtcbiAgICAgIGN0eC5maWxsUmVjdChpLCBuKjQwMCwgMiwgMik7XG4gICAgfSk7XG4gIH1cblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHBhaW50RnJhbWUpO1xufSkoKTtcblxubmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSh7YXVkaW86IHRydWV9LCAoc3RyZWFtKSA9PiB7XG4gIGxldCBtaWMgPSBhdWRpb0N0eC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShzdHJlYW0pO1xuICBsZXQgcHJvY2Vzc29yID0gYXVkaW9DdHguY3JlYXRlU2NyaXB0UHJvY2Vzc29yKDEwMjQsIDEsIDEpO1xuXG4gIG1pYy5jb25uZWN0KHByb2Nlc3Nvcik7XG4gIHByb2Nlc3Nvci5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcblxuICBwcm9jZXNzb3Iub25hdWRpb3Byb2Nlc3MgPSAoZSkgPT4ge1xuICAgIHJhdyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUuaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCksIDApO1xuICB9O1xufSwgKGVycikgPT4geyB9KTtcblxuIl19