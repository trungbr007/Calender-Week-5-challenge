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


$(document).ready(function() {
    $(".fa-floppy-disk").click(function(event) {
        // Get input name
        var addText = $(".col-8").val();
        console.log(parent(event.target).id);
        // Store data
        localStorage.setItem("", addText);
       
        
    });

    $(".col-8").textContent=localStorage.getItem(".fa-floppy-disk")
}); 


    

    
