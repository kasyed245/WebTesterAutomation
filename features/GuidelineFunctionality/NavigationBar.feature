@navBar
Feature: 2-NavigationBarFeature
As a tester, I want to check different controls on navigation bar
so that I can use them confidently

Background:
    Given user navigates to the WebTester Test Site

@test2
Scenario: 21-Check the Guideline home link
     When user navigates to "TESTFOLDER" repo
     And user runs the "SimpleDistance" Guideline
     And user clicks on "Guideline" link
     Then user should see message "Please select a location from the list on the left." on home page
