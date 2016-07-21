'use strict';

var config=require('../../configs');
var railways=require('../../services/railwayapi/apiParser');

exports.handleTrainArrivalsRequest=function(intent, session, response) {
	//intent.slots.Train.value;

	var station=intent.slots.Station.value;
	var durationHours=intent.slots.duration.value;

	railways.getJsonTrainArrivals(station,durationHours, function (events){
		// Create speech output
		var speechOutput =  events;

		if(speechOutput['heading']!=null)
		{
			response.tellWithCardSSML(speechOutput['speech'], speechOutput['heading'] , speechOutput['status']);
		}
		else
		{
			response.ask(speechOutput['speech']);
		}
	});


};



