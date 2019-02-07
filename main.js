var data ={
    firstName: "Adi",
    lastName: "Kub",
    avatar: "link",
    isOnline: false,
    age: 29,
    dataOfBirth: "11-06-1989 20:30:00",
    
            
    
}

    
function outputData (obj) {
    var correntData = document.getElementById("liveDataOutput")
    correntData.innerHTML = obj.checkAge();
   }

function correntData() {
    unixtodayData = Math.floor(new Date().getTime()/1000);
    var differensDate = new Date(unixtodayData*1000);
        var year = differensDate.getFullYear();
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var month = months[differensDate.getMonth()];
        var date = differensDate.getDate();
        var hour = differensDate.getHours();
        var min = differensDate.getMinutes();
        var sec = differensDate.getSeconds();
        var liveTime = month + '-'+date+"-"+year +  ' ' + hour + ':' + min + ':' + sec;
        document.getElementById("correntDataOutput").innerHTML = liveTime;
}


function inputData() {
    var inputValue = document.getElementsByClassName("inputData")
    console.log("inputValue");
};




setInterval(function() {outputData(data)}, 1000)




