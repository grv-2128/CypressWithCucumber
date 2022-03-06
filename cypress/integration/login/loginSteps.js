import{ Given, when, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { helperFunctions } from '../../support/helperFunctions';
import { login } from '../../support/login';

Given('I visit Civey {string} application',(env) =>{
    const url = helperFunctions.getURL(env)
    cy.visit(url)
});

And ('User clicks on for media',()=>{
    login.clickOnMedia()
});



