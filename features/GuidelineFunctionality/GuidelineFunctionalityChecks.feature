@guideline
Feature: 1-GuidelineFunctionalityCheck
  As a user, I want to check the basic guideline functionatlity,
  so that I can use it with great ease

Background:
   Given user navigates to the WebTester Test Site

@test1
Scenario: 11-Checking the Loading Guideline Functionality
   When user navigates to "TESTFOLDER" repo
   And user runs the "SimpleDistance" Guideline
   Then user should see the "Distance To Cover" label