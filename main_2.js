var userData = {};

const checkData=obj=> {
    if (Object.keys(obj).length >2 && 
    Object.keys(obj["birthDay"]).length >9 
    ) {return true} else {return false};
    
}


const createNewUser = idName =>{
    let inputValue = document.getElementById(idName).value; 
    userData[idName] = inputValue;
}

const generateLiveTime=()=> {
    if (checkData(userData)) {
        var birthDate = userData["birthDay"];
        checkAge(birthDate)       
        setTimeout(generateLiveTime, 1000)
    } else {
        var div = document.getElementById("liveDataOutput")
        div.innerHTML = ""
        div.insertAdjacentHTML("afterBegin", `<span class="error">  заполните форму полностью</span> ` )
    }
    
}



const checkAge = (d) => {
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

const outputData = val => {
    var correntData = document.getElementById("liveDataOutput")
        correntData.innerHTML = "";
    var out =`<span class="userData" > ${userData.firstName} ${userData.lastName} </span>
            <br><span>вы прожил</span>
            <br><span> ${val}</span>`;
        correntData.innerHTML = out;
        
   }


const createAndShowNewData = () => {    
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
