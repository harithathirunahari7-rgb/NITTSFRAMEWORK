
import { test, expect } from '@playwright/test';
import odbc from 'msnodesqlv8';

test('ODBC direct connection', async () => {
  const connectionString =
    'Driver={ODBC Driver 18 for SQL Server};' +
    'Server=localhost,1433;' +
    'Database=master;' +
    'Trusted_Connection=Yes;' +
    'TrustServerCertificate=Yes;' +
    'Encrypt=No;';

  console.log('Testing ODBC directly...');

  const result = await new Promise((resolve, reject) => {
    odbc.query(
      connectionString,
      'SELECT GETDATE() AS CurrentDate',
      (error, rows) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(rows);
      }
    );
  });

  console.log('SQL Result:', result);

  expect(result).toBeDefined();
});
