
import { test, expect } from '@playwright/test';
import { executeQuery } from '../database/dbConnection';

test('connect to SQL Server', async () => {
  const result = await executeQuery<{
    CurrentDate: Date;
  }>(
    'SELECT GETDATE() AS CurrentDate'
  );

  console.log('SQL Result:', result);

  expect(result).toHaveLength(1);
  expect(result[0].CurrentDate).toBeDefined();
});



test('verify user in database', async () => {
  const result = await executeQuery<{
    UserId: number;
    FirstName: string;
    LastName: string;
    Email: string;
    IsActive: boolean;
  }>(
    `SELECT UserId, FirstName, LastName, Email, IsActive
     FROM dbo.Users
     WHERE Email = 'john.test@example.com'`
  );

  console.log('User:', result);

  expect(result).toHaveLength(1);
  expect(result[0].FirstName).toBe('John');
  expect(result[0].LastName).toBe('Test');
  expect(result[0].Email).toBe('john.test@example.com');
  expect(result[0].IsActive).toBe(true);
});



