$(document).ready(function(){

  const key = "3294a89da7c5a56d2d1531d480deacfa"
  $.ajax({
    url: 'http://data.fixer.io/api/latest?access_key=' + key,
    dataType: 'jsonp',
    success: function(json) {
		var gbpRate = json.rates.GBP;
	  var usdRate = json.rates.USD;
		var eurRate = json.rates.EUR;
		var audRate = json.rates.AUD;
	  
	  console.log(json.rates);
		console.log('the rate for gbp is ' + gbpRate);
		console.log('the rate for eur is ' + eurRate);
		console.log('the rate for usd is ' + usdRate);
		
		
		function calculate(){
		  console.log( "Handler for .click() called." );
			
		  var input = $(".inputAmount").val();
		  var inputID = $("#inputX :checked" ).attr('id');
		  var outputID = $("#outputX :checked" ).attr('id');

		  var output = ((input/eval("json.rates."+$(".inputX:checked" ).attr('id')))*eval("json.rates."+$(".outputX:checked" ).attr('id'))).toFixed(2);
		  $(".outputText").text(input + " " + inputID + " is equal to " + output + " " + outputID );
			
		}
		
		$( ".radioX" ).click(function() {
			calculate();
		});

		$(".inputAmount").change(function(){
			calculate();
		});

		$(".inputAmount").keyup(function(){
			calculate();
		});

		$("#inputX :input").change(function() {
			calculate();
		});

		$("#outputX :input").change(function() {
			calculate();
		});


    },
    fail: function(xhr, statusText, body) {
      console.log(body);
    }
  });
});