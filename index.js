// Initialize date range picker for departure and return date inputs
$(function() {
$('input[name="departure-date"], input[name="return-date"]').daterangepicker({
        opens: 'right',
        autoUpdateInput: false
        
    }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

function activateFlightType(flightType){
    document.getElementById('return-btn').classList.remove('active');
    document.getElementById('one-way-btn').classList.remove('active');
    document.getElementById(flightType).classList.add('active');
}