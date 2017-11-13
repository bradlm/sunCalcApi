# SunCalc RESTful API

The SunCalc RESTful API supports GET requests for the following endpoints: 

## /api/time
The time endpoint can retrieve a list of event times or a specific event time. Returns epoch time. 

### Parameters
Required: lat, lng
Optional: epoch, event
#### lat
The target latitude.

#### lng
The target longitude.

#### epoch
An epoch time during the target date.

#### event
The target event. Leaving unspecified will return all possible events during the day. 

### Example: 
/api/time?event=sunrise&epoch=1510470881731,lat=45,lng=45