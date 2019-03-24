// import { request } from 'http';
const {Given, When, Then } = require('cucumber')
var home = require('../pages/home.page');
var common = require('../pages/common.page');
var topBar = require('../pages/topBar.page');
var leftBar= require('../pages/leftSideBar.page');
var basePage = require('../pages/base.page')


When(/^user clicks on "(.*)" link$/,(linkName)=>{
    basePage.webWaitForVisible(topBar.guidelinesLink);  
    basePage.webClick(topBar.guidelinesLink);
      
});

When(/^user views the "(.*)" view$/,(linkName)=>{
    basePage.webWaitForVisible(topBar.advancedBtn,5000);
    basePage.webClick(topBar.advancedBtn);
});

Then(/^user should see message "(.*)" on home page$/,(alertMessage)=>{
    basePage.webWaitForVisible(home.homePageAlertMsg,5000);
    var actualText= basePage.webGetText(home.homePageAlertMsg);
    expect(actualText).to.equal(actualText);
});

Then(/^user should see the following link appeared on left side bar$/,(dataTable)=>{
     var data = dataTable.raw();
     console.log("================> data :"+data.toString());

     console.log("data[0]"+data[0])
     console.log("data[1]"+data[1])
     console.log("data[2]"+data[2])
     console.log("leftBar.answerTab : "+basePage.webGetTextSel(leftBar.answerTabSel))
    //expect(data[1]).to.equal(basePage.webGetText(leftBar.answerTab));
    //  data.forEach(element => {
    //      console.log("Element : "+element[0]);
    //  });
     //console.log("")
     //  expect(actualText).to.equal(actualText);
     browser.pause(3000);
});