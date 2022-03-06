Feature: Smoke test

    This feature is for smoke test cases

    #Scenario: Vote for a survey and see the results

     #   Given I visit Civey "qa" application
      #  When I click on register
      #  And I Enter my registered email id and password
      #      | email | password |
      #     | gaurav.malhotra090@gmail.com | Civey@12345 |
       # Then I should be able to login successfully with "gaurav.malhotra090@gmail.com"
       # And I am able to see different surveys
       # When I poll for one of the surveys 
       # | question | answer |
       # | Wen würden Sie wählen, wenn am Sonntag Bundestagswahl wäre? | SPD |
       # Then I should be able to see the overall result
       # And I should be able to see the total number of surveys taken by me on home page

        Scenario: Vote for a survey and see the results

        Given I visit Civey "qa" application
        When I click on register
        And I Enter my registered email id and password
            | email | password |
            | gaurav.malhotra090@gmail.com | Compugain@12345 |