var tape = require('tape')
var percent = require('./')

tape('convert numbers', function(t){

	t.equal(percent(20), '20%', '20')	
	t.equal(percent('20'), '20%', '20')	
	t.equal(percent('20%'), '20%', '20')	

	t.equal(percent(200, 100), '200%', '200%')
	t.equal(percent(.2, 1), '20%', '20% from 1')
	t.equal(percent(.2, .8), '25%', '25% from 1/4')

	t.equal(percent(3.2), '3.2%', 'hold decimals')
	t.equal(percent(3.249), '3.25%', 'hold decimals to 2dp')


	t.equal(percent(), '0%', 'zero value')

	t.end()
})