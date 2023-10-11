describe("Count All Links on the Internet Page", () => {
    it("Counts all links", () => {
      let totalLinksCount = 0; 
  
      
      cy.visit("https://the-internet.herokuapp.com/");
  
     
      cy.get("a").each(() => {
        totalLinksCount++; 
      }).then(() => {
        
        cy.log(`Total links on the page: ${totalLinksCount}`);
      });
    });
  });