// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

window.onload = function(){
	/// DO NOT EDIT ABOVE THIS LINE ///

	/// Application Logic ///
	var Stopwatch = {
		advanceTheClock: function(){ // Provided Code : DO NOT EDIT THIS FUNCTION
			if (Stopwatch.isRunning) {
				Stopwatch.updateTimeValues();
				setTimeout(Stopwatch.advanceTheClock, 10);
			}
		},
		isRunning: false,
		mins: 0,
		secs: 0,
		millisecs: 0,
		laps: [],

	updateTimeValues: function(){
    Stopwatch.millisecs += 10;
    // millisecs is millisec plus 10
    if(Stopwatch.millisecs >= 1000) {
  	// if millisecs is greater than or equal to 1,000
	  Stopwatch.secs++;
	  // increase seconds
	  Stopwatch.millisecs -= 1000;
	  //  reset millisecs to 0 (millisecs equals millisecs minus 1,000)
	  if(Stopwatch.secs >= 60) {
		// if seconds are greater than or equal to 60
		Stopwatch.secs -= 60;
		// reset seconds to 0 (second equals seconds - 1000)
		Stopwatch.mins++;
		// increase minutes
			}
		}
			Display.updateTimeDisplay();

		},
		reset: function(){
			Stopwatch.isRunning = false;
			// If stop is not running
			Stopwatch.millisecs = 0;
			// millisecs is zero
			Stopwatch.secs = 0;
			// seconds is zero
			Stopwatch.mins = 0;
			// minutes is zero
			Stopwatch.laps = [];
			// Empty the laps array
			document.getElementById("lap-list").innerHTML = "";
			// get element lap list and change innerHTML to empty string
			Display.updateTimeDisplay();
		},
		start: function(){
			Stopwatch.isRunning = true;
			// if stopwatch is running
			console.log("starting", Stopwatch.isRunning);
			Stopwatch.advanceTheClock();
			// advanceTheClock
		},
		stop: function(){
			Stopwatch.isRunning = false;
				// stopwatch is not running
			console.log("stopping", Stopwatch.isRunning);

		},
		lap: function(){
			console.log('lap', Stopwatch.isRunning);
			var time = Display.zeroFill(Stopwatch.mins,2) + " : " +
			// Fill lap display minutes with two zeros turn to string
			 Display.zeroFill(Stopwatch.secs,2) + " : " +
			//Fill lap display seconds with two zeros turn to string
			  Display.zeroFill(Stopwatch.millisecs,3);
			Stopwatch.laps.push(time);
			Display.updateLapList(time);

		}
	};


  	// *** Watch Display *** //
		var Display = {
		// call all four display elements
		m :  document.getElementById("millisecs"),
		s :  document.getElementById("secs"),
		mn:  document.getElementById("mins"),
		lap_list : document.getElementById("lap-list"),



		zeroFill: function(number, length){
			var num = number.toString();
			// variable num is number to string
			var deficit = length - num.length;
			// variable deficit is length minus the strings length
			while(deficit > 0) {
				// while deficit is greater than 0
				num = "0" + num
				// variable num is string "0" + number to string
				deficit--;

			}
			return num;

		},
		updateTimeDisplay: function(){
		Display.m.innerText = Display.zeroFill(Stopwatch.millisecs,3);
		// millisecs inner text will fill display with 3 zeros
		Display.s.innerText = Display.zeroFill(Stopwatch.secs,2);
		// second inner text will fill display with 2 zeros
		Display.mn.innerText = Display.zeroFill(Stopwatch.mins,2);
		// minutes inner text will fill display with 2 zeros
		},
		updateLapList: function(time){
			var lap = document.createElement('li');
			// create list
			lap.className = "lapInfo";
				// give the list a class name of lap info
			lap.innerHTML = time;
			//give lap info an innerHTML of the time paramter
			Display.lap_list.appendChild(lap);
			// add the lap info to the display

		},
	};


// *** EventHandlers ****
	var EventHandlers = {
		onClickStart: function() {
			if(Stopwatch.isRunning == false) {
				// if Stopwatch is not running
				console.log("start");
				Stopwatch.start();
				// run dat shit | Stopwatch call start function
			}
		},
		onClickLap: function(){
			if(Stopwatch.isRunning == true) {
			  // if lap is clickity clacked
				console.log('lap');
				Stopwatch.lap();
				// Stopwatch call lap function
			}
		},
		onClickStopReset: function(){
			console.log("stop");
			if(Stopwatch.isRunning == true)
			// if stopwatch is running
				Stopwatch.stop();
				  // Stopwatch stop call stop function
			else {
				Stopwatch.reset();
				// otherwise reset calling lap function
			}
		}
	};
// *** Event Listeners *** //
	document.getElementById('start').addEventListener("click", EventHandlers.onClickStart);
	document.getElementById('stop').addEventListener("click", EventHandlers.onClickStopReset);
	document.getElementById('lap').addEventListener("click", EventHandlers.onClickLap);

};
