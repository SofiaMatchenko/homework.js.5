/**
 * Created by СПС on 24.09.2017.
 */
//First task

document.getElementById('rst').onclick = function (){
    var str = document.getElementById('first').value;
    var result = document.getElementById('result');
    result.innerHTML = str.length;
};

//Second task

var showImg = document.getElementById('img');

showImg.onclick = function() {
    var massImg = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
    var result2 = document.getElementById('result2');

    for (var i = 0; i < massImg.length; i++) {
        var allImg = document.createElement('img');
        allImg.src = 'img/' + massImg[i];
        result2.insertBefore(allImg, result2.children[0]);
    }
};

//Third task()

document.getElementById('shortcut').onclick = function() {
    var third = document.getElementById('third').value;
    var out = third.split('//');
    document.getElementById('short').innerHTML = out[1];
};

//Fourth task

document.getElementById('shortcut2').onclick = function() {
    var fourth = document.getElementById('fourth').value;
    var short2 = document.getElementById('short2');
    var out2 = '';
    if (~fourth.indexOf('http://')) {
        out2 = fourth.slice(7);
        short2.innerHTML = out2;
        if (~fourth.indexOf('http://www.')) {
            out2 = fourth.slice(11);
            short2.innerHTML = out2;
        }
    }
    else if (~fourth.indexOf('https://')) {
        out2 = fourth.slice(8);
        short2.innerHTML = out2;
        if (~fourth.indexOf('https://www.')) {
            out2 = fourth.slice(12);
            short2.innerHTML = out2;
        }
    }
    else {
        out2 = fourth.slice(0);
        short2.innerHTML = out2;
    }
};

// Fifth task

var btn = document.getElementById('btnSubmit');
var valid = document.getElementById('validation');

btn.onclick = function () {
    var surname = document.getElementById('surname').value;
    var name = document.getElementById('name').value;
    var nameA = '';
    nameA = surname.trim();
    var nameC = String(nameA);
    console.log(nameC);
    var nameB = '';
    nameB = name.trim();
    var nameD = String(nameB);
    console.log(nameD);
    var password = document.getElementById('password').value;
    var pass = '';
    if (password.length >= 5){
        pass = 1;
    }
    else {
        pass = 0;
    };
    console.log(pass);
    var mail = document.getElementById('mail').value;
    var m = '';
    if (~mail.indexOf('@')){
        var m = 1;
    }
    else {
        m = 0;
    };
    console.log(m);
    if (nameC.length > 0 && nameD.length > 0 && pass == 1 && m == 1){
        valid.innerHTML = 'You are Great!';
        return (console.log(true));
    }
    else {
        valid.innerHTML = 'You shall not pass!!!';
        return (console.log(false))
    }
};

//Sixth task

document.getElementById('sixth').onkeypress = function(event) {
    document.getElementById('resultNumber').innerHTML += event.charCode +'<br>';
};

