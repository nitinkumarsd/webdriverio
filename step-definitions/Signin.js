const assert = require('assert');
//import {Given,When,Then} from 'cucumber'
var {defineSupportCode} = require("cucumber");
var date=new Date();

defineSupportCode(function({Given,When,Then}){

    Given(/^I'm on home page$/, async function(){

    browser.url("http://automationpractice.com/index.php");
    browser.maximizeWindow();
    
});

    When(/^Click Signin on the landing page$/,async function(){
    // Click on signin button
    const elm= await $('//*[@id="header"]/div[2]/div/div/nav/div[1]/a');
    await elm.click();
   
   
});

    Then(/^Create Account by entering email address$/, async function(){
    const emailBox= await $('#email_create');
    // enter rendom email address
    await emailBox.setValue("abc12344321"+date.getMinutes() + date.getSeconds() + "@gmail.com");
    const emailButton= await $('#SubmitCreate');
    await emailButton.click();
    
});

    Then(/^Fill personal information$/, async function(){
    //enter customer first name
    const FirstName= await $('#customer_firstname');
    await FirstName.setValue("Nitin");
    //enter customer last name
    const lastName= await $('#customer_lastname');
    await lastName.setValue("Kumar");
    //enter password
    const pass= await $('#passwd');
    await pass.setValue("abc@1234567");
    //enter date of birth
    const day= await $('#days');
    await day.selectByIndex(3);
    const month= await $('#months');
    await month.selectByIndex(3);
    const year= await $('#years');
    await year.selectByIndex(3);
    
});

    Then(/^Fill address$/, async function(){
        //select gender
        const gender= await $('#id_gender1');
        if(gender.isSelected===false){
           await gender.click(); 
        }
        //enter first name
        const firstNameAddress= await $('#firstname');
        await firstNameAddress.setValue("Nitin");
        //enter last name
        const lastNameAddress= await $('#lastname');
        await lastNameAddress.setValue("Kumar");
        //enter company name
        const company= await $('#company');
        await company.setValue("abc tech limited");
        //enter address
        const add= await $('#address1');
        await add.setValue("abc tech limited, B Block");
        //enter city
        const city= await $('#city');
        await city.setValue("Falcon");
        //enter state
        const state= await $('#id_state');
        await state.selectByVisibleText("Virginia");
        //enter zip code
        const zipCode= await $('#postcode');
        await zipCode.setValue("00000");
        //enter country
        const country= await $('#id_country');
        await country.selectByVisibleText("United States");
        //enter mobile num
        const mobileNum= await $('#phone_mobile');
        await mobileNum.setValue("1234567890");
        //enter address alisas
        const addressAlias= await $('#alias');
        await addressAlias.clearValue();
        await addressAlias.setValue("1234567890");
});

    Then(/^Click Register$/, async function(){
        //click registerbutton
        const registerButton= await $('#submitAccount');
        await registerButton.click();

});
    Then(/^Validate correct name and surname is displayed on landing screen$/, async function(){
    //validate username on landing page
    const userName= await $('//*[@id="header"]/div[2]/div/div/nav/div[1]/a/span');
    console.log(await userName.getText());
    assert.equal(await userName.getText(), 'Nitin Kumar');
   
});

});
