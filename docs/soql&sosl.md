## SOQL Cheatsheet

| Command           | Description                                                          | Example                                                      |
| ----------------- | -------------------------------------------------------------------- | ------------------------------------------------------------ |
| SELECT            | SELECT is the first command you will need in any SOQL statement and is used as a prefix for returning fields from a dataset, it is required always. Multiple fields can be selected by using a comma to separate them. | `SELECT Name, Type, BillingCountry FROM Account`              |
| FROM              | FROM is the second command you will need in any SOQL statement and is used as a prefix for which dataset you wish to query fields on. This is a required command, and you can only query one dataset at a time. | `SELECT Name, Type, BillingCountry FROM Account`              |
| WHERE             | WHERE is used to filter results of your queries. Multiple filters and operators can be defined. | `SELECT Name FROM Account WHERE Type = 'Customer'`             |
| LIMIT             | LIMIT is used to define how many records you wish to pull. If no LIMIT is used, SOQL will pull every record available. | `SELECT Name FROM Account WHERE Type = 'Customer' LIMIT 5`     |
| OFFSET            | OFFSET is used to skip rows at the start of a query. If you are using multiple queries with LIMIT, this is a great way to make sure you are not repeating values. | `SELECT Name FROM Account WHERE Type = 'Customer' OFFSET 5`    |
| ORDER BY          | ORDER BY is used to sort your query results. Results can be sorted in ascending or descending by field. They can also be sorted by null values first or last. | `SELECT Name FROM Account ORDER BY AnnualRevenue DESC`        |
| AND               | AND is a logical operator which is used with the WHERE command to define multiple fields to filter on. The query will return records where both of these filters are true. | `SELECT Name FROM Account WHERE Type = 'Customer' AND BillingCountry = 'USA'` |
| OR                | OR is also a logical operator which is used with the WHERE command to define multiple fields to filter on. The query will return records where either of these filters are true. | `SELECT Name FROM Account WHERE BillingCity = 'London' OR BillingCountry = 'USA'` |
| LIKE              | LIKE provides a mechanism for matching partial text strings and includes support for wildcards. % is used as a wildcard to match zero or more characters and _ must match exactly one character. The example will return all emails that have force.com and salesforce.com. | `SELECT FirstName, LastName, Email FROM Contact WHERE Email LIKE '%force.com%'` |
| IN                | IN allows you to filter results with the WHERE clause against a list of values. E.g. WHERE BillingState IN ('California', 'New York'). But we can also insert another query into this command to get our list. | `SELECT Name FROM Account WHERE Id IN (SELECT AccountID FROM CustomObject__c WHERE Type__c = 'Customer')` |
| GROUP BY          | GROUP BY is used with aggregate functions to summarize data and roll up query results instead of having individual records. | `SELECT LeadSource, COUNT(Company) FROM Lead GROUP BY LeadSource` |
| COUNT()           | Used to count the number of rows matching the query criteria.       | `SELECT COUNT(Id) FROM Account`                               |
| COUNT_DISTINCT()  | Returns the number of distinct non-null field values matching the query criteria | `SELECT COUNT_DISTINCT(Company) FROM Lead`                    |
| MIN()             | Returns the minimum value of a field.                               | `SELECT MIN(AnnualRevenue) FROM Account`                      |
| MAX()             | Returns the maximum value of a field.                               | `SELECT MAX(AnnualRevenue) FROM Account`                      |
| SUM()             | Returns the total sum of a numeric field.                           | `SELECT SUM(Amount) FROM Opportunity WHERE IsClosed = false AND Probability > 60` |
| AVG()             | Returns the average value of a numeric field.                        | `SELECT AVG(Amount) FROM Opportunity WHERE Type = 'New Customer'` |
| GROUP BY HAVING   | GROUP BY HAVING Clause is used in SOQL to apply a condition based on a group field values. | `SELECT Industry, COUNT(Id) From Account GROUP BY Industry HAVING Industry IN ('Agriculture','Manufacturing','Construction')` |
| GROUP BY ROLLUP   | GROUP BY ROLLUP Clause is used to add subtotals to get aggregates data in the query results. It returns multiple levels of subtotal rows. We can add up to three fields in a comma-separated list in GROUP BY ROLLUP Clause statement. | `SELECT Industry, Type, COUNT(Id) From Account GROUP BY ROLLUP (Industry, Type)` |
| GROUP BY CUBE     | GROUP BY CUBE clause is used in SOQL query to add subtotals for all combinations of a grouped field in the query results. | `SELECT Type, BillingCountry, GROUPING(Type) grpType, GROUPING(BillingCountry) grpCity, COUNT(Id) accnts FROM Account GROUP BY CUBE(Type, BillingCountry) ORDER BY GROUPING(Type), GROUPING(BillingCountry)` |

## SOQL LIKE Operator

| SOQL Expression                    | Description                                    |
| ---------------------------------- | ---------------------------------------------- |
| `WHERE CustomerName LIKE 'a%'`     | Finds any values that start with "a".         |
| `WHERE CustomerName LIKE '%a'`     | Finds any values that end with "a".           |
| `WHERE CustomerName LIKE '%or%'`   | Finds any values that have "or" in any position. |
| `WHERE CustomerName LIKE '_r%'`    | Finds any values that have "r" in the second position. |
| `WHERE CustomerName LIKE 'a_%'`    | Finds any values that start with "a" and are at least 2 characters in length. |
| `WHERE CustomerName LIKE 'a__%'`   | Finds any values that start with "a" and are at least 3 characters in length. |
| `WHERE ContactName LIKE 'a%o'`     | Finds any values that start with "a" and end with "o". |

## SOQL Date Functions

| Command           | Example                                                         |
| ----------------- | --------------------------------------------------------------- |
| TODAY             | `SELECT Name, Amount, CloseDate FROM Opportunity WHERE CloseDate = TODAY` |
| YESTERDAY         | `SELECT Name, Amount, CloseDate FROM Opportunity WHERE CloseDate = YESTERDAY` |
| TOMORROW          | `SELECT Name, Amount, CloseDate FROM Opportunity WHERE CloseDate = TOMORROW` |
| THIS_WEEK         | `SELECT Name, Amount, CloseDate FROM Opportunity WHERE CloseDate = THIS_WEEK` |
| NEXT_MONTH        | `SELECT Name, Amount, CloseDate FROM Opportunity WHERE CloseDate = NEXT_MONTH` |
| LAST_90_DAYS      | `SELECT Name, Amount, CloseDate FROM Opportunity WHERE CloseDate = LAST_90_DAYS` |
| LAST_MONTH        | `SELECT Name, Amount, CloseDate FROM Opportunity WHERE CloseDate = LAST_MONTH` |
| THIS_YEAR         | `SELECT Name, Amount, CloseDate FROM Opportunity WHERE CloseDate = THIS_YEAR` |

## SOSL Cheatsheet

| Command              | Description                                                     | Example                                                                                   |
| -------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| FIND                 | The FIND command is used to search for specific keywords in the Salesforce objects. | `FIND {search_query}` in ALL FIELDS RETURNING Account(Name, Industry), Contact, Opportunity` |
| RETURNING            | The RETURNING command is used to specify the objects and fields to retrieve in the search results. | `FIND {search_query} RETURNING Account(Name, Industry), Contact, Opportunity`            |
| IN                   | The IN command is used to narrow the search to specific objects. | `FIND {search_query} IN NAME FIELDS RETURNING Account(Name, Industry)`                    |
| WITH                 | The WITH command is used to filter the search results based on specific criteria. | `FIND {search_query} WITH DATA CATEGORY Geography__c AT (usa__c) RETURNING Account(Name)` |
| LIMIT                | The LIMIT command is used to limit the number of search results. | `FIND {search_query} RETURNING Account LIMIT 5`                                           |
| IN ALL FIELDS        | The IN ALL FIELDS command is used to search for the query in all searchable fields of the specified objects. | `FIND {search_query} IN ALL FIELDS RETURNING Account(Name), Contact(FirstName, LastName)` |
| DATA CATEGORY        | The DATA CATEGORY command is used to search for records in specific data categories. | `FIND {search_query} WITH DATA CATEGORY Geography__c AT (usa__c) RETURNING Account(Name)` |
| RETURNING SNIPPET()  | The RETURNING SNIPPET() command is used to retrieve snippets of the matched text around the keywords. | `FIND {search_query} RETURNING Account(Name WHERE Name != NULL ORDER BY CreatedDate DESC LIMIT 5) RETURNING SNIPPET(name WHERE Name != NULL) ` |
| WITH HIGHLIGHT       | The WITH HIGHLIGHT command is used to highlight the matched keywords in the search results. | `FIND {search_query} RETURNING Account(Name WHERE Name != NULL ORDER BY CreatedDate DESC LIMIT 5) WITH HIGHLIGHT` |

