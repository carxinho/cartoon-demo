!function(){
    var duration = 50
    $('.actions button').on('click',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings().removeClass('active')
        switch(speed){
            case 'slow':
            duration = 100
            break
            case 'normal':
            duration = 50
            break
            case 'fast':
            duration = 10
            break
        }
    })
    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id
        id = setTimeout(function run(){
            n+=1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n <code.length){
                id = setTimeout(run,duration)
            }else{
                fn && fn.call()
            }
        },duration)
    }
    let code = `
    /*
    *首先，我们先来个好看点的背景吧
    */
    .preview{
      height: 100%;
      display:flex;
      justify-content:center;
      align-items:flex-end;
      background-color: rgb(242,189,203);
    }
    .preview{
      width: 100%; 
    }
    /*
    *接下来我们来画玻尿酸鸭圆滚滚的头吧
    */
    .headwrapper{
      margin: 0 auto;
      position: relative;
    }
    .head{
      border:3px solid black;
      width: 180px;
      height: 170px;
      background: rgb(254,219,117);
      border-radius:50% 50% 45% 45%;
      margin:0 auto;
      top:80px;
      position: relative;
    }
    /*
    *给可爱的玻尿酸鸭戴个帽子吧
    */
    .hat{
        border-width:100px 80px 0 0;
        border-style:solid;
        border-color: transparent black; 
      transform:rotate(10deg);
        position:absolute;
      left: 80px;
      top: 7px;
    }
    .hat::before{
      content:'';
        border-width:100px 80px 0 0;
        border-style:solid;
        border-color: transparent  rgb(139,166,213); 
        position:absolute;
        top: -95px;
        left: -2px;
    }
    /*
    *帽子加个毛球更可爱
    */
    .hat::after{
      content:'';
      display: block;
      width: 20px;
      height: 20px;
      border:3px solid black;
      border-radius: 50%;
      background-color: rgb(168,224,250);
          position:absolute;
        top: -105px;
        left: 65px;
    }
    /*
    *来一双水汪汪的大眼睛呀
    */
    .eye{
      background-color: #000;
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
    /*
    *左眼睛
    */
    .eye.left{
      position: absolute;
      top: 50%;
      right: 50%;
      margin-right:15px;
    }
    /*
    *右眼睛
    */
    .eye.right{
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left:15px;
    }
    /*
    *玻尿酸鸭重点魅力腮红也加上吧
    */
    .cheek{
      background-color: rgb(255,189,206);
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border:3px solid black;
    }
    /*
    *左腮红
    */
    .cheek.left{
      position: absolute;
      top: 50%;
      right: 50%;
      margin-top:10px;
      margin-right:30px;
    }
    /*
    *右腮红
    */
    .cheek.right{
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top:10px;
      margin-left:30px;
    }
    /*
    *还要加上致命的嘟嘟嘴
    */
    .lip{
      background-color: rgb(255,119,59);
      border:2px solid black;
      position: absolute;
      left: 50%;
      margin-left: -30px;
    } 
    /*
    *上嘴唇
    */
    .lip.up{
      height: 20px;
      width: 60px;
        border-radius: 50% 50% 0 0/100% 100% 0 0;
        border-bottom: none;
        top: 102px;
    }
    /*
    *下嘴唇
    */
    .lip.down{
      height: 20px;
      width: 60px;
      border-radius:50%;
      overflow:hidden;
      top: 110px;
    }
    .lip.down::before{
      content:'';
      display: block;
      height: 12px;
      margin-top: -1px;
      border-radius:50%;
      background-color: rgb(154,26,10);
    }
    /*
    *给玻尿酸鸭加个胖嘟嘟的身体也不错呀
    */
    .mainwrapper{
        margin: 0 auto;
        width: 140px;
    }
    .main{
      background: rgb(254,219,117);
      border:3px solid;
      border-radius: 50% / 100% 100% 0 0;
      height:130px;
    }
    /*
    *戴个小铃铛装饰一下吧
    */
    .ling{
      border:3px solid;
      height: 30px;
      width: 30px;
      border-radius:50%;
      background-color: rgb(254,237,83);
      margin: 70px auto;
    }
    .ling::before{
      content:'';
      display: block;
      height: 7px;
      width: 7px;
      margin:10px auto;
      border-radius:50%;
      background-color: black;
    }
    .ling::after{
      content:'';
      display: block;
    border:2px solid;
      width: 0;
      height: 6px;
      margin:-10px auto;
    }
    /*
    *最后来一双肉肉的小手
    */
    .hand{
      background: rgb(254,219,117);
      border:3px solid;
      width: 45px;
      height: 40px;
      border-radius:100% 0 0 100%/50%;
      border-right:none;
    }
    /*
    *左手
    */
    .hand.left{
      transform:rotate(-45deg);
      margin-top: -101px;
      margin-left:-18px;
      border-bottom: none;
    }
    /*
    *右手
    */
    .hand.right{
      transform:rotate(225deg);
      margin-top: -41px;
      margin-left:108px;
      border-top: none;
    }
    /*
    *可爱的玻尿酸鸭就画好了
    */
    `
    writeCode('',code)
}.call()

