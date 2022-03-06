import { Given, when, Then, And, When } from 'cypress-cucumber-preprocessor/steps';
import { helperFunctions } from '../../support/helperFunctions';
import { smoke } from '../../support/smoke';
import { login } from '../../support/login';

Given('I visit Civey {string} application', (env) => {
    const url = helperFunctions.getURL(env)
    cy.visit(url)
})

When('I click on register', () => {
    login.clickOnRegister()
})

And('I Enter my registered email id and password', (datatable) => {
    datatable.hashes().forEach(element => {
        smoke.login(element.email, element.password)
    });
})

Then('I should be able to login successfully with {string}',(email)=>{
    login.validateLoginSuccess(email)
})

And('I am able to see different surveys',() =>{
    login.validateSurveysAvailability()
})

When('I poll for one of the surveys',(datatable) =>{
    datatable.hashes().forEach(element => {
    login.voteNowForSurvey(element.question, element.answer)
});

Then('I should be able to see the overall result',()=>{
    login.verifyResults()
})

And('I should be able to see the total number of surveys taken by me on home page',()=>{
    login.clickOnCiveyHomePageButton()
    login.NumberOfSurveys()
})


})





