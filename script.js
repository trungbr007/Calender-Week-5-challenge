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

//Click the flopy-disk to save the textarea into the local storage


$(document).ready(function() {
    $(".fa-floppy-disk").click(function(event) {
        // Get input name
        var textAreaId=$(this).parent().siblings(".col-8").attr("id");   
        var text=$(this).parent().siblings(".col-8").val();
        // Store data
        localStorage.setItem(textAreaId, text);
       
        
    });


});
  
$('#9').val(localStorage.getItem('9'));
$('#10').val(localStorage.getItem('10'));
$('#11').val(localStorage.getItem('11'));
$('#12').val(localStorage.getItem('12'));
$('#13').val(localStorage.getItem('13'));
$('#14').val(localStorage.getItem('14'));
$('#15').val(localStorage.getItem('15'));
$('#16').val(localStorage.getItem('16'));
$('#17').val(localStorage.getItem('17'));


    

    
