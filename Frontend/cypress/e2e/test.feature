Feature: Fetch and display medical records

  Scenario: Displaying a medical record
    Given the user is on the medical records page
    When the user fetches the medical record for person "Anna Svensson"
    Then the medical record with description "Annual check-up" should be visible
      And the record's creation date "2023-12-01" should be visible
      And the associated person's name "Anna Svensson" should be visible
      And the associated person's birthdate "1999-03-15" should be visible