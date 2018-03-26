$(document).ready(function(){

  const key = "3294a89da7c5a56d2d1531d480deacfa"
  $.ajax({
    url: 'http://data.fixer.io/api/latest?access_key=' + key,
    dataType: 'jsonp',
    success: function(json) {
      var gbpRate = json.rates.GBP;
	  var usdRate = json.rates.USD;
	  var eurRate = json.rates.EUR;
	  
	  
		console.log('the rate for gbp is ' + gbpRate);
		console.log('the rate for eur is ' + eurRate);
		console.log('the rate for usd is ' + usdRate);
		
		
		function calculate(){
		  console.log( "Handler for .click() called." );
			
		  var input = $(".inputAmount").val();
		  var inputID = $(".input:checked" ).attr('id');
		  var outputID = $(".output:checked" ).attr('id');

		  var output = ((input/eval("json.rates."+$(".input:checked" ).attr('id')))*eval("json.rates."+$(".output:checked" ).attr('id'))).toFixed(2);
		  $(".output").text(input + " " + inputID + " is equal to " + output + " " + outputID );
			
		}
		
		$( ".radio" ).click(function() {
			calculate();
		});

		$(".inputAmount").change(function(){
			calculate();
		});

		$(".inputAmount").keyup(function(){
			calculate();
		});


    },
    fail: function(xhr, statusText, body) {
      console.log(body);
    }
  });
});