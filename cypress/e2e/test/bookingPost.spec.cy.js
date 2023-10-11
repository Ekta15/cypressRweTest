describe('API Tests', () => {
    it('should create a booking', () => {
      cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        body: {
          "firstname": "John",
          "lastname": "Doe",
          "totalprice": 123,
          "depositpaid": true,
          "bookingdates": {
            "checkin": "2023-10-10",
            "checkout": "2023-10-15"
          },
          "additionalneeds": "Breakfast"
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('bookingid');
      });
    });
  
    it('should retrieve a booking', () => {
      cy.request('GET', 'https://restful-booker.herokuapp.com/booking/1').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('firstname', 'Eric');
      });
    });
  
    
  });