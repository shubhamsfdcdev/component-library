# SOQL

## LIMIT
LIMIT is used to define how many records you wish to pull. If no LIMIT Is used, SOQL will pull every record available.
```
SELECT Name FROM Account WHERE Type = 'Customer' LIMIT 5
```

## OFFSET
OFFSET is used to skip rows at the start of a query. If you are using multiple queries with LIMIT, this is a great way to make sure you are not repeating values.
```
SELECT Name FROM Account WHERE Type = 'Customer' OFFSET 5
```

## ORDER BY
ORDERBY is used to sort your query results. Results can be sorted in ascending or descending by field. They can also be sorted by null values first or last.
```
SELECT Name FROM Account ORDER BY AnnualRevenue DESC
```

## IN
IN allows you to filter results with the WHERE clause against a list of values. E.g. WHERE BillingState IN ('California', 'New York'). But we can also insert another query into this command to get our list.
```
SELECT Name FROM Account WHERE Id IN (SELECT AccountID FROM CustomObject__c WHERE Type__c = 'Customer')
```

## GROUP BY
GROUP BY is used with aggregate functions to summarise data and roll up query results instead of having individual records.
```
SELECT LeadSource, COUNT(Company) FROM Lead GROUP BY LeadSource
```

## COUNT()
Used to count the number of rows matching the query criteria.
```
SELECT COUNT(Id) FROM Account
```

## COUNT_DISTINCT
Returns the number of distinct non-null field values matching the query criteria
```
SELECT COUNT_DISTINCT(Company) FROM Lead
```

## MIN()
Returns the minimum value of a field
```
SELECT MIN(AnnualRevenue) FROM Account
```

## MAX()
Returns the maximum value of a field
```
SELECT MAX(AnnualRevenue) FROM Account
```

## SUM()
Returns the total sum of a numeric field
```
SELECT SUM(Amount) FROM Opportunity WHERE IsClosed = false AND Probability > 60
```

## AVG()
Returns the average value of a numeric field
```
SELECT AVG(Amount) FROM Opportunity WHERE Type = 'New Customer'
```

## LIKE
LIKE provides a mechanism for matching partial text strings and includes support for wildcards. % is used as a wildcard to match zero or more characters and _ must match exactly one character. The example will return all emails that have force.com and salesforce.com.
https://www.w3schools.com/sql/sql_like.asp

LIKE Operator	                Description
WHERE CustomerName LIKE 'a%'	Finds any values that start with "a"
WHERE CustomerName LIKE '%a'	Finds any values that end with "a"
WHERE CustomerName LIKE '%or%'	Finds any values that have "or" in any position
WHERE CustomerName LIKE '_r%'	Finds any values that have "r" in the second position
WHERE CustomerName LIKE 'a_%'	Finds any values that start with "a" and are at least 2 characters in length
WHERE CustomerName LIKE 'a__%'	Finds any values that start with "a" and are at least 3 characters in length
WHERE ContactName LIKE 'a%o'	Finds any values that start with "a" and ends with "o"

```
SELECT FirstName, LastName, Email FROM Contact WHERE Email LIKE '%force.com%'
```