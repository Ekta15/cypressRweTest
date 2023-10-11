export class landingPage {

    weblocators = {
        pageHeader:  "h1.heading",
      pageSubHeader: "h2",
      dropdownLink: 'li a[href="/dropdown"]',
      checkboxLink: 'li a[href="/checkboxes"]',

    }


    openURL() {

        cy.visit(Cypress.env('URL'))
    }
    getPageHeader() {
        cy.get(this.weblocators.pageHeader)
      }
    
      getPageSubHeader() {
        cy.get(this.weblocators.pageSubHeader);
      }
    
    
      navigateToCheckboxPage() {
        cy.get(this.weblocators.checkboxLink).click();
      }
    
      navigateToDropdownPage() {
        cy.get(this.weblocators.dropdownLink).click();
      }

     
}