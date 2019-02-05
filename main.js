var data ={
    firstName: "Adi",
    lastName: "Kub",
    avatar: "link",
    isOnline: false,
    age: 29,
    dataOfBirth: "11-06-1989 21:30:10",
    

    checkAdulthood: function(){
        var isAdulthood = false;
        if (this.age > 17) {
            isAdulthood = true
        } 
        return isAdulthood;
    },

    
            
    checkAge: function() {
        var unixtodayData = Math.floor(new Date().getTime()/1000)
        var unixDataOfBirth = Math.floor(new Date(this.dataOfBirth).getTime()/1000)
        var twoDateDifference = unixtodayData - unixDataOfBirth;
        var differensDate = new Date(twoDateDifference*1000);
        var year = differensDate.getFullYear() - 1970;
        var month =differensDate.getMonth();
        var date = differensDate.getDate();
        var hour = differensDate.getHours();
        var min = differensDate.getMinutes();
        var sec = differensDate.getSeconds();
        var liveTime = year + ' лет '+ month + ' месяца '+date+ ' дня ' + hour + ' часов ' + min + ' минут ' + sec +" секунд "; 
        return liveTime;
        
        }
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
    var outputCorrentData = document.getElementById("correntDataOutput");
    outputCorrentData.innerHTML = liveTime;
}
function inputData() {
    var inputValue = document.getElementsByClassName("inputData")
    console.log("inputValue");
}

setInterval(function() {outputData(data)}, 1000)
setInterval(function() {correntData()}, 1000)



