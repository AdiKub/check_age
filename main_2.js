var userData = {
    birthDay: {},
}
var cTer =0;

function createNewUser(idName) {
    cTer =0;
    var inputValue = document.getElementById(idName).value; 
    userData[idName] = inputValue;
}

function createNewDate(idName) {
    cTer++;
    var inputValue = document.getElementById(idName).value; 
    userData.birthDay[idName] = inputValue;
    
}

function generateLiveTime() {
    if (Object.keys(userData).length > 2 && cTer >= 8 ) {
        var birthDate = userData.birthDay.month+
         "-"+userData.birthDay.date+
        "-"+userData.birthDay.year;
        checkAge(birthDate)       
        setTimeout(generateLiveTime, 1000)
    } else {

        var div = document.getElementById("liveDataOutput")
        div.innerHTML = ""
        div.insertAdjacentHTML("afterBegin", `<span class="error">  заполните форму полностью</span> ` )
    }
    
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
    var liveTime = year+' лет '
                 +month+ ' месяца '
                  +date+ ' дня '
                  +hour+ ' часов ' 
                   +min+ ' минут ' 
                   +sec+" секунд "; 
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
    var todayDate = new Date;
    var monthNames = [
      "Янв", "Фев", "Мар",
      "Апр", "Май", "Июнь", "Июль",
      "Авг", "Сен", "Окт",
      "Ноя", "Дек"
    ];
    var day = todayDate.getDate();
    var monthIndex = todayDate.getMonth();
    var year = todayDate.getFullYear();
    var toDay = day + ' ' + monthNames[monthIndex] + ' ' + year;
    document.getElementById("correntDataOutput").innerHTML = toDay;
      
}

setInterval(function() {createAndShowNewData()}, 1000)
