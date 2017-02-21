
/* simple Jasmine test suite to illustrate how to unit test a closure */

describe('calculating total costs', function() {

	it('should calculate a simple total', function() {
		try {
			var shopping = new Shopping()
			shopping.setPrice(10)
			shopping.setQuantity(10)
			console.log(shopping.getTotal())
			expect(shopping.getTotal()).toBe(100)
		} catch(err) {
			// no errors should be thrown
			expect(true).toBe(false)
		}
	})
	
	it('should calculate a simple total using a floating point price', function() {
		var shopping = new Shopping()
		shopping.setPrice(2.99)
		shopping.setQuantity(10)
		console.log(shopping.getTotal())
		expect(shopping.getTotal()).toBe(29.90)
	})

	it('should throw an error if quantity is a float', function() {
		try {
			var shopping = new Shopping()
			shopping.setQuantity(10.1)
			expect(true).toBe(false)
		} catch(err) {
			expect(err.message).toBe('quantity needs to a a whole number')
		}
	})
	
})
