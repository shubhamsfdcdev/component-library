### Question:
Retrieve a list of all Account names along with their related Opportunities' names and amounts. Also, include only those Opportunities with an Amount greater than $10,000. Sort the results by Account Name in ascending order.
```
SELECT Id, Name, Amount, Account.Name 
FROM Opportunity 
WHERE Amount > 10000 
ORDER BY Account.Name ASC
```