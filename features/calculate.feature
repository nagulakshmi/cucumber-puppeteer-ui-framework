Feature: Borrowing capacity calculator

  @test
  Scenario: Test 1 - Verify Single Borrower Calculation
    Given I launch borrowing capacity calculator application
    Then I select "Single" as application type
    And I enter "0" as number of dependents
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