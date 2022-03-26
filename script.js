// Display Date

var currentDate = moment().format('dddd MMMM Do YYYY');
$('#currentDay').text(currentDate);

var currentHours=moment().hours();



  

//Set background according to hours

for(var i=9;i<=17;i++){
    var currentHours=moment().hours();
    var hoursEl= document.getElementById(i);

if(currentHours===i){
$(hoursEl).addClass("present")
} else if(currentHours<i){
    $(hoursEl).addClass("future")
}else{
    $(hoursEl).addClass("past")
}

};

//Click the flopy-disk to save the textare into the local storage
$('.fa-floppy-disk').on('click',function(){

    $('#i').html();
    localStorage.setItem(key,value);
})






    

    
