describe("Check All Links on the Internet Page", () => {
    it("Finds and checks all links", () => {
      
      cy.visit("https://the-internet.herokuapp.com/");
  
      
      cy.get("a").each(($link) => {
        const href = $link.prop("href"); 
  
      
        if (href) {
          
          cy.request(href).then((response) => {
           
            expect(response.status).to.be.oneOf([200, 201, 202, 204]);
          });
        } else {
          
          cy.log(`Skipping link with empty href: ${$link.text()}`);
        }
      });
    });
  });