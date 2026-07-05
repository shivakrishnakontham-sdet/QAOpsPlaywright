Feature: Ecommerce Validations
  @Validation
  @foo

  Scenario Outline: Placing the Order
    Given   a login to Ecommerce2 application with "anshika@gmail.com" and "Iamking@000"
   Then Verify Error message is displayed

   Example:
   | username           | pawwsord
   | anshike@gmail.com  | Iamking@000
   