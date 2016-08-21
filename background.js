setTimeout(function(){

var button = document.getElementsByClassName('_s53mj')[2]

button.addEventListener("click", function(){

setTimeout(function(){

var _72gdz = document.getElementsByClassName('_q44m8 _7z4zb')


var btn = document.createElement("A");
    var t = document.createTextNode("UnFollow All");
    btn.style.width = "100px";
    btn.style.height =  "50px"
    btn.id = "button_unfollow"
    btn.style.background ="#2980b9"
    btn.style.float = "right";
    btn.style.color = "white"
    btn.appendChild(t);

_72gdz[0].appendChild(btn);

    document.getElementById('button_unfollow').addEventListener("click", function(){
        var button = document.getElementsByClassName('_aj7mu _r4e4p _95tat _o0442')
        var event = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': true
        });

        var newarray  = []

        for(var i = 0; i < button.length;i++){
            newarray.push(button[i]);
        }


        newarray.forEach(function(item){
            item.dispatchEvent(event)
        })

    })

}, 1000);

}, false);


 }, 1000);
