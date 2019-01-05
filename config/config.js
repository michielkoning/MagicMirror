var config = {
	address:
		"localhost", // Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "", "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [
		"127.0.0.1",
		"::ffff:127.0.0.1",
		"::1"
	], // Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language:
		"nl",
	timeFormat: 24,
	units:
		"metric",

	modules: [
		{
			module:
				"alert"
		},
		{
			module:
				"updatenotification",
			position:
				"top_bar"
		},
		{
			module:
				"clock",
			position:
				"top_left"
		},
		{
			module:
				"calendar",
			header:
				"Agenda",
			position:
				"top_left",
			config: {
				maximumNumberOfDays: 7,
				displaySymbol: false,
				calendars: [
					{
						url:
							"webcal://user.fm/calendar/v1-73c26125-5bfa-4d1e-a0ec-d22e604a1b91/Calendar.ics"
					}
				]
			}
		},
		{
			module:
				"currentweather",
			position:
				"top_left",
			config: {
				location:
					"Wageningen",
				locationID:
					"2745088",
				appid:
					"bffa20080f9fdae66cb0e841bad56b88"
			}
		},
		{
			module:
				"weatherforecast",
			position:
				"top_left",
			header:
				"Weersvoorspellingen",
			config: {
				location:
					"Wageningen",
				locationID:
					"2745088",
				appid:
					"bffa20080f9fdae66cb0e841bad56b88"
			}
		},
		{
			module:
				"compliments",
			position:
				"lower_third"
		},
		{
			module:
				"MMM-Sonos",
			position:
				"top_right", // you may choose any location
			config: {
				showRoomName: false
			}
		},
		{
			module:
				"newsfeed",
			position:
				"bottom_bar",
			config: {
				maxNewsItems: 1,
				feeds: [
					{
						title:
							"New York Times",
						url:
							"http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: false,
				showPublishDate: false
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
