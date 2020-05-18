let speed = 0; //скорость
let sep = 5; // количество делений
let max = 100; // максимальная скорость
let step = max/sep; // скорость на одном делении

let getSpeedBar = document.getElementById('speed-bar');

for(let i=1; i<=sep; i++){
    let li = document.createElement('li');
    li.id = 'ind-'+i;
    let div = document.createElement('div');
    div.id = 'full-'+i;

    li.append(div);
    getSpeedBar.append(li)
}

let viewSpeed =(step, speed, sep)=>{
    for(let i=1; i<=sep; i++){
        if((speed) > step){
            document.getElementById('full-'+i).style.width = '100%';
            console.log('width: 100%');
            speed -= step;
        }else{
            let proc = speed / step * 100
            document.getElementById('full-'+i).style.width = proc+'%';
            console.log('width: '+proc+ '%');
            speed = 0;
        }
    }
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyW' && speed <=max) {
        viewSpeed(step, speed, sep)
        if (speed >= 0) speed += 0.5
    }
    if (event.code == 'KeyS' && speed >=0) {
        viewSpeed(step, speed, sep)
        if (speed >= 0) speed -= 0.5
    }
});

