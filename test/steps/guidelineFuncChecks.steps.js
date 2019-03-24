const {Given, When, Then } = require('cucumber');
var home = require('../pages/home.page');
var common = require('../pages/common.page');
var guidelineFirstPage= require('../pages/guidelineFirst.page');
var guidelineSecondPage= require('../pages/guidelineSecond.page');
var repoPage = require('../pages/repo.page');
var leftSideBar = require('../pages/leftSideBar.page');
var answerTab = require('../pages/answersTab.page');
var expect = require('chai').expect;
var basePage = require('../pages/base.page')

Given(/^user navigates to the WebTester Test Site$/,()=>{
    browser.url('./');
    browser.windowHandleFullscreen();
    console.log("user navigates to the WebTester Test Site...!!!");
});

When(/^user navigates to "(.*)" repo$/,(repoName)=>{
   console.log(`user navigates to ${repoName} repo...!!!`);
   basePage.webWaitForVisible(home.mainPageLink("TESTFOLDER"));
   basePage.webClick(home.mainPageLink("TESTFOLDER"))
   browser.pause(1000);
});

When(/^user runs the "(.*)" Guideline$/,(guidelineName)=>{
    console.log(`user runs the ${guidelineName} Guideline...!!!`);
    basePage.webWaitForVisible(repoPage.guidelineNameLink(guidelineName));
    basePage.webClick(repoPage.guidelineNameLink(guidelineName));
});

When(/^user submits the "(.*)" as a distance value$/,(distValue)=>{
    console.log(`user runs the ${distValue} Guideline...!!!`);
    browser.pause(1000);
    basePage.webWaitForVisible(guidelineFirstPage.distanceToCoverLbl,5000);
    basePage.webSetValue(guidelineFirstPage.distanceToCoverTxtBox,distValue);
    basePage.webClick(guidelineFirstPage.nextBtn);
    console.log(`after clicking on next button`);
    basePage.webWaitUntilAppeared(guidelineSecondPage.decisionLblSel("Longer"),5000);
    console.log(`after waiting for decision label`);
    browser.pause(2000);

});

Then(/^user should see the "(.*)" label$/,(labelName)=>{
    console.log(`user should see the ${labelName} label...!!!`);
   // browser.pause(5000);
    var actualLabelName = basePage.webGetTextSel(guidelineFirstPage.distanceToCoverLblSel,5000);
    console.log("Text : "+actualLabelName)
    browser.pause(2000);
});

Then(/^user should see "(.*)" for "(.*)" value in Answers tab$/,(distValue,distLabelName)=>{
    console.log(`user should see ${distValue} for ${distLabelName} value in Answers tab...!!!`);
    basePage.webClickSel(leftSideBar.answerTabSel);
    browser.pause(2000);
    var expecTextVal = basePage.webGetText(answerTab.firstRowValue);
    var expecTextLabel = basePage.webGetText(answerTab.firstRowLabel);
    expect(distValue).to.equal(expecTextVal)
    expect(distLabelName).to.equal(expecTextLabel);
    
});