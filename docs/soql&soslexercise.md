### Question 1:
Retrieve a list of all Account names along with their related Opportunities' names and amounts. Also, include only those Opportunities with an Amount greater than $10,000. Sort the results by Account Name in ascending order.
```
SELECT Id, Name, Amount, Account.Name 
FROM Opportunity 
WHERE Amount > 10000 
ORDER BY Account.Name ASC
```
### Question 2:
Retrieve the total amount (sum) of all Opportunities for each Account. 
```
SELECT Account.Name, SUM(Amount) 
FROM Opportunity 
WHERE Amount > 10000 
GROUP BY Account.Name
```
### Question 3:
Retrieve the count of Opportunities for each Account. Include only those Accounts that have at least five Opportunities.
```
SELECT Count(Id) NosOpp, Account.Name 
FROM Opportunity 
GROUP BY Account.Name 
HAVING Count(Id)>=5
```
### Question 4:
Retrieve the maximum (highest) and minimum (lowest) Amount from all closed/won Opportunities.
```
SELECT MAX(Amount), MIN(Amount) 
FROM Opportunity 
WHERE StageName = 'Closed Won'
```
### Question 5:
Retrieve the count of Opportunities and the total amount (sum) of all Opportunities for each Account. Include only Opportunity with an Amount greater than $5,000.
```
SELECT Count(Id), Account.Name, SUM(Amount) 
FROM Opportunity 
WHERE Amount >= 5000 
GROUP BY Account.Name
```
