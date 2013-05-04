$(document).ready(function() {


  var year = new Date().getFullYear();
  var month = new Date().getMonth();
  var day = new Date().getDate();


    var $calendar = $('#calendar').weekCalendar({
      timeslotsPerHour: 4,
      scrollToHourMillis : 0,
    startOnFirstDayOfWeek : true,
        firstDayOfWeek:1,
        businessHours:  {start: 8, end: 18, limitDisplay: true},
        allowCalEventOverlap:true,
        buttons:false,
      height: function($calendar){
        return $(window).height() - $('h1').outerHeight(true);
      },
      eventRender : function(calEvent, $event) {
        if(calEvent.end.getTime() < new Date().getTime()) {
          $event.css('backgroundColor', '#eee');
          $event.find('.time').css({'backgroundColor': '#999', 'border':'1px solid #888'});
        }
      },
      eventNew : function(calEvent, $event) {
        alert('You\'ve added a new event. You would capture this event, add the logic for creating a new event with your own fields, data and whatever backend persistence you require.');
      },
      data: function(start, end, callback) {
        var dataSource = $('#data_source').val();

        if (dataSource === '1') {
          callback(eventData1);
        } else if(dataSource === '2') {
          callback(eventData2);
        } else if(dataSource === '3') {
          callback(eventData3);
        } else {
          callback([]);
        }
      }
    });

    
    $('#data_source').change(function() {
      $calendar.weekCalendar('refresh');
      updateMessage();
    });

    function updateMessage() {
      var dataSource = $('#data_source').val();
      $('#message').fadeOut(function(){
        if(dataSource === '1') {
          $('#message').text('Displaying event data set 1 with timeslots per hour of 4 and timeslot height of 20px');
        } else if(dataSource === '2') {
          $('#message').text('Displaying event data set 2 with timeslots per hour of 3 and timeslot height of 30px');
        } else if(dataSource === '3') {
          $('#message').text('Displaying event data set 3 with allowEventDelete enabled. Events before today will not be deletable. A confirmation dialog is opened when you delete an event.');
        } else {
          $('#message').text('Displaying no events.');
        }
        $(this).fadeIn();
      });
    }

    updateMessage();
  });