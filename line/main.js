
/*function addOnWheel(elem, handler) 
      {
        if (elem.addEventListener) 
        {
          if ('onwheel' in document) 
          {
            // IE9+, FF17+
            elem.addEventListener("wheel", handler);
          } 
          else if ('onmousewheel' in document) 
          {
            // устаревший вариант события
            elem.addEventListener("mousewheel", handler);
          } 
          else 
          {
            // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
            elem.addEventListener("MozMousePixelScroll", handler);
          }
        } 
        else 
        { // IE8-
          text.attachEvent("onmousewheel", handler);
        }
}
        /* translate *//*
        var scale = 1;

        addOnWheel(text, function(e) {

          function getMousePosition(e) {
            var x = 0;
            var y = 0;

            if (!e) {
              var e = window.event;
            }

            if (e.pageX || e.pageY) {
              x = e.pageX;
              y = e.pageY;
            } else if (e.clientX || e.clientY) {
              x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
              y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }

            return {
              x: x,
              y: y
            }
          }

        /* zoom *//*

        text.onmousedown = function(e) {
          deltaX = e.pageX - text.offsetLeft;
          deltaY = e.pageY - text.offsetTop;
          window.addEventListener('mousemove', getMouse);
        }

        text.onmouseup = function(e) {
          window.removeEventListener('mousemove', getMouse);
        }



        var delta = e.deltaY || e.detail || e.wheelDelta;

        // отмасштабируем при помощи CSS
        setTimeout(() => { if (delta > 0) { 
          scale -= 0.5;
          if (scale < 0.25) scale = 0.25;

        } else {
          scale += 0.5;
          if (scale > 1.5) scale = 1.5;
        }}, 500);

        text.style.transform = text.style.WebkitTransform = text.style.MsTransform = 'scale(' + scale + ')';

        console.log(text.style.left)

        /*_______________________________*//*
 
        var deltaX;
        var deltaY;
        var divStyle = document.getElementById("divStyle");
        var divLeft = divStyle.offsetLeft;
        var divRight = divStyle.offsetLeft + divStyle.offsetWidth;

        function getMouse(e) {
          text.style.left = (e.pageX - deltaX) + "px";
          text.style.top = (e.pageY - deltaY) + "px";
          if (text.offsetLeft >= 700) {
            text.style.left = 699 + "px";
          }
          if (text.offsetTop <= 200 || text.offsetTop >= 202) {
            text.style.top = 201 + "px";
          }
          if (getMousePosition(e).x < divLeft || getMousePosition(e).x > divRight) {
            console.log(getMousePosition(e).x < divLeft || getMousePosition(e).x > divRight)
            window.removeEventListener('mousemove', getMouse);
          }

        }

});
*/
import baseJson from 'base.json' assert {type: 'json'};
const nameStationList = document.querySelector('.name-station__list');
const mapInfo = document.querySelector(".map-info")
const mapInfoCloser = document.querySelector(".info-closer")
const nameStations = document.querySelectorAll(".name-station")

function mapInfoOpen() {
  if(mapInfo){
    mapInfo.classList.add("open")
  }
}

function mapInfoClose() {
  if(mapInfo){
    mapInfo.classList.remove("open")
  }
}

mapInfoCloser.addEventListener("click", function(event) {
  if(mapInfoCloser) {
    mapInfoClose();
  }
});

nameStationList.addEventListener("click", function(event) {
  if(event.target.closest(".name-station")) {
    mapInfoOpen();
  }
});

nameStations.forEach(nameStations => {
  nameStations.addEventListener('click', function() {
    mapInfo.querySelector('.info__title').innerText = baseJson.line1_2.name;
  })
})