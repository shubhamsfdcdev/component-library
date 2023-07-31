# SOQL

## Command

**LIMIT**
```
SELECT Name FROM Account WHERE Type = 'Customer' LIMIT 5
```

**OFFSET**
```
SELECT Name FROM Account WHERE Type = 'Customer' OFFSET 5
```

**ORDER BY**
```
SELECT Name FROM Account ORDER BY AnnualRevenue DESC
```

**OFFSET**
```
SELECT Name FROM Account WHERE Type = 'Customer' OFFSET 5
```

**IN**
```
SELECT Name FROM Account WHERE Id IN (SELECT AccountID FROM CustomObject__c WHERE Type__c = 'Customer')
```

**GROUP BY**
```
SELECT LeadSource, COUNT(Company) FROM Lead GROUP BY LeadSource
```

**COUNT()**
```
SELECT COUNT(Id) FROM Account
```

**COUNT_DISTINCT**
```
SELECT COUNT_DISTINCT(Company) FROM Lead
```

**MIN()**
```
SELECT MIN(AnnualRevenue) FROM Account
```

**MAX()**
```
SELECT MAX(AnnualRevenue) FROM Account
```

**SUM()**
```
SELECT SUM(Amount) FROM Opportunity WHERE IsClosed = false AND Probability > 60
```

**AVG()**
```
SELECT AVG(Amount) FROM Opportunity WHERE Type = 'New Customer'
```