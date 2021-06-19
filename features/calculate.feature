Feature: Borrowing capacity calculator

  @test
  Scenario: Test 1 - Verify Single Borrower Calculation
    Given I launch borrowing capacity calculator application
    Then I select "Joint" as application type
    And I enter "0" as number of dependents
    And I select "Home to live in" as property you would like to buy