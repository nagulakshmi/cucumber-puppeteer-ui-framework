Feature: Borrowing capacity calculator

  @smoke
  Scenario: Test 1 - Verify Single Borrower Calculation
    Given I launch borrowing capacity calculator application
    Then I select "Single" as application type
    And I select "0" as number of dependents
    And I select "Home to live in" as property you would like to buy
    And I enter "Your income (before tax)" as "80000"
    And I enter "Your other income" as "10000"
    And I feed "Living expenses" as "500"
    And I feed "Current home loan repayments" as "0"
    And I feed "Other loan repayments" as "140"
    And I enter "Other commitments" as "0"
    And I feed "Total credit card limits" as "10000"
    When I click on "Work out how much I could borrow" to calculate
    Then I should see borrowing estimate as "$500,000"
    And I capture the current screen for reference

  @smoke
  Scenario: Test 2 - Start over Borrowing calculator
    Given I launch borrowing capacity calculator application
    Then I select "Joint" as application type
    And I select "2" as number of dependents
    And I select "Residential investment" as property you would like to buy
    And I enter "Your income (before tax)" as "180000"
    And I enter "Your other income" as "0"
    And I feed "Living expenses" as "1500"
    And I feed "Current home loan repayments" as "2200"
    And I feed "Other loan repayments" as "340"
    And I enter "Other commitments" as "100"
    And I feed "Total credit card limits" as "6000"
    When I click on "Work out how much I could borrow" to calculate
    Then I should see borrowing estimate as "$305,000"
    And I capture the current screen for reference
    When I click on "Start over" button
    Then I capture the current screen for reference
    And I should see "Application type" as "Single"
    And I should see Number of dependants as "0"
    And I should see "Property you would like to buy" as "Home to live in"
    And It should display "income (before tax)" as "0"
    And It should display "Your other income" as "0"
    And It should show "Living expenses" as "0"
    And It should show "Current home loan repayments" as "0"
    And It should show "Other loan repayments" as "0"
    And It should display "Other commitments" as "0"
    And It should show "Total credit card limits" as "0"
