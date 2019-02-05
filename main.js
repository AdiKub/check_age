var data ={
    firstName: "Adi",
    lastName: "Kub",
    avatar: "link",
    isOnline: false,
    age: 29,
    dataOfBirth: "11-06-1989",
    
    checkAdulthood: function(){
        var isAdulthood = false;
        if (this.age > 17) {
            isAdulthood = true
        } 
        return isAdulthood;
    },

    
            // var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            // var month = months[differensDate.getMonth()];
    checkAge: function() {
        var unixtodayData = Math.floor(new Date().getTime()/1000)
        var unixDataOfBirth = Math.floor(new Date(this.dataOfBirth).getTime()/1000)
        var twoDateDifference = unixtodayData - unixDataOfBirth;
        
        var differensDate = new Date(twoDateDifference*1000);

        var year = differensDate.getFullYear()-1970;
        var month =differensDate.getMonth();
        var date = differensDate.getDate();
        var hour = differensDate.getHours();
        var min = differensDate.getMinutes();
        var sec = differensDate.getSeconds();
        var liveTime = " вы прожили " + year + ' лет '+ month + ' месяца '+date+ ' дня ' + hour + ' часов ' + min + ' минут ' + sec +" секунд ";

    return liveTime;
        
        }


    }
        
   

    // function getDataOfBirth(data) {
    //     for (key in data) {
    //         if (key === "dataOfBirth") 
    //             return data[key]
    //         }
    //     }
    // };

    
    


// console.log(getDataOfBirth(data));


console.log(data.checkAge());
