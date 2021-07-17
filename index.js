
    //划线
    document.body.addEventListener('touchmove', function (e) {
      e.preventDefault();
    }, { passive: false });

    let canvas = document.getElementById('canvas')
    canvas.width = document.documentElement.clientWidth
    canvas.height = document.documentElement.clientHeight
    let ctx = canvas.getContext("2d");
    let painting = false
    ctx.fillStyle = "blue";
    var isTouchDevice = 'ontouchstart' in document.documentElement;
    ctx.lineWidth = 10
    ctx.lineCap = 'round'
    let btn1 = document.getElementById('btn1')
    let btn2 = document.getElementById('btn2')
    btn1.onclick = (e) =>{
      ctx.lineWidth ++;

    }
    btn2.onclick = (e) =>{
      ctx.lineWidth --

    }
    let last = [];
    function draw(x1, y1, x2, y2) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }



    if (isTouchDevice) {
      canvas.touchstart = (e) => {
        let x = e.touches[0].clientX
        let y = e.touches[0].clientY


        last = [x, y]
        console.log(last)
      }

      canvas.ontouchmove = (e) => {
        canvas.ontouchmove = (e) => {
          let x = e.touches[0].clientX
          let y = e.touches[0].clientY
          draw(last[0], last[1], x, y)
          last = [x, y]
          console.log(last)

        }

      }
    } else {

      canvas.onmousedown = (e) => {
        painting = true
        last = [e.clientX, e.clientY]
      }
      canvas.onmousemove = (e) => {
        if (painting === true) {

          // ctx.fillRect(e.clientX, e.clientY, 5, 5);
          draw(last[0], last[1], e.clientX, e.clientY)
          last = [e.clientX, e.clientY]
          console.log(last)
        } else {
          console.log('')
        }
      }
      canvas.onmouseup = () => {
        painting = false
      }
    }
