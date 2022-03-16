



const points = [34, 50, 75, 56, 24, 76, 60, 44, 45, 48, 78, 40];

document.getElementById("demo").innerHTML = points;
function myFunction() {
    for (let i = points.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = points[i]
        points[i] = points[j]
        points[j] = k
    }
    document.getElementById("demo").innerHTML = points;
}


function myFunction1() {
    points.sort(function (a, b) { return a - b });
    document.getElementById("demo1").innerHTML = points;
}
function myFunction2() {
    points.sort(function (a, b) { return b - a });
    document.getElementById("demo1").innerHTML = points;
}

function myFunction3() {
    points.splice(2,100);
    document.getElementById("demo1").innerHTML = points;
}