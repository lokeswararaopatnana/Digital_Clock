console.log('It is a digital clock')

function time(){
    let a= new Date();
    console.log(a)
    let hh=a.getHours()
    let mm=a.getMinutes()
    let ss=a.getSeconds()

    let clock = `${hh}:${mm}:${ss}`
    console.log(clock)
    document.getElementById("digiclock()").innerHTML=clock;
}
time()
setInterval(time,1000)