$(document).ready(function() {
  $('#get-attendees-button').click(function() {
    $.get('https://138.197.214.133/api/v1/attendee', function(response) {
      response.forEach(function(attendeeInformation){
        $('#list-of-attendees').append(
         '<div class="well attendee-entry">' +
           '<b>Age Range: </b>' + attendeeInformation.age_range + '<br>' +
           '<b>Job Category: </b>' + attendeeInformation.job_category + '<br>' +
           '<b>Gender: </b>' + attendeeInformation.gender + '<br>' +
           '<b>Ethnicity: </b>' + attendeeInformation.ethnicity + '<br>' +
         '</div>'
       );
      })
    });
  });
});
