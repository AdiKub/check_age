var userData = {
    birthDay: {},
}


function createNewData(idName) {
    var inputValue = document.getElementById(idName).value; 
    userData[idName] = inputValue;
}

function createNewDate(idName) {
    var inputValue = document.getElementById(idName).value; 
    userData.birthDay[idName] = inputValue;
}

function generateLiveTime() {
    var birthDate = userData.birthDay.month+
         "-"+userData.birthDay.date+
        "-"+userData.birthDay.year;
        checkAge(birthDate)       
}

 function checkAge(d) {
    var unixtodayData = Math.floor(new Date().getTime()/1000)
    var unixDataOfBirth = Math.floor(new Date(d).getTime()/1000)
    var twoDateDifference = unixtodayData - unixDataOfBirth;
    var differensDate = new Date(twoDateDifference*1000);
    var year = differensDate.getFullYear() - 1970;
    var month = differensDate.getMonth();
    var date = differensDate.getDate();
    var hour = differensDate.getHours();
    var min = differensDate.getMinutes();
    var sec = differensDate.getSeconds();
    var liveTime = year + ' лет '+ month + ' месяца '+date+ ' дня ' + hour + ' часов ' + min + ' минут ' + sec +" секунд "; 
    outputData(liveTime); 
}

function outputData (val) {
    var correntData = document.getElementById("liveDataOutput")
    correntData.innerHTML = "";
    var out ="<span>" +userData.firstName+"  "+userData.lastName+ " вы прожил"+ "</span>"+
            "<span>"+val+"</span>";
    correntData.innerHTML = out;
   }


   function createAndShowNewData() {
    unixTodayData = Math.floor(new Date().getTime()/1000);
    var todayDate = new Date(unixTodayData*1000);
    var year = todayDate.getFullYear();
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var month = months[todayDate.getMonth()];
    var date = todayDate.getDate();
    var hour = todayDate.getHours();
    var min = todayDate.getMinutes();
    var sec = todayDate.getSeconds();
    var liveTime = month + '-'+date+"-"+year+  ' ' +hour+ ':' +min+ ':' +sec;
    document.getElementById("correntDataOutput").innerHTML = liveTime;
}


setInterval(function() {createAndShowNewData()}, 1000)
