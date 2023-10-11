import {landingPage} from "../../pages/landingPage"
const landingObj = new landingPage()

describe('test landing page', () =>{

    it('landingPage', ()=>{

        landingObj.openURL()
        landingObj.getPageHeader()
        landingObj.getPageSubHeader()
        landingObj.navigateToCheckboxPage()
       
    })
})