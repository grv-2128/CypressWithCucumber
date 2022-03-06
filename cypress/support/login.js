require('cypress-xpath');
import * as objectRepoJson from '../fixtures/objectRepo.json';

export class login {

    static clickOnMedia() {
        cy.xpath(objectRepoJson.landingPage.media).click()
    }

    static clickOnRegister() {
        cy.xpath(objectRepoJson.landingPage.register).click()
    }

    static validateLoginSuccess(email) {
        cy.xpath(objectRepoJson.landingPage.menu).click({ force: true })
        cy.xpath(objectRepoJson.landingPage.loggedInUserEmail).invoke('text').then(($text1) => {
            expect($text1).to.equal(email)
        })
    }

    static validateSurveysAvailability() {
        cy.xpath(objectRepoJson.landingPage.countVoteNow).should('have.length', 8)
    }

    static voteNowForSurvey(question,answer){
        cy.xpath(objectRepoJson.landingPage.voteNow.replace('<options>',question)).should('be.visible').click()
        cy.xpath(objectRepoJson.landingPage.answer.replace('<options>',answer)).should('be.visible').click()
    }

    static verifyResults(){
        cy.xpath(objectRepoJson.landingPage.resultContainer).should('be.visible')
    }

    static clickOnCiveyHomePageButton() {
        cy.xpath(objectRepoJson.landingPage.civeyHomePageButton).click()
    }

    static NumberOfSurveys() {
        cy.xpath(objectRepoJson.landingPage.mainTitleContainer).invoke('text').then(($text1) => {
            var splitText = $text1.split(' ')[3]
            expect(splitText).to.equal('1')
        })
    }

} 