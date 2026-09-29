
import { test, expect } from '@playwright/test';
import sql from 'mssql/msnodesqlv8';

test('direct SQL connection', async () => {
  const connectionString =
    'Driver={ODBC Driver 18 for SQL Server};' +
    'Server=localhost,1433;' +
    'Database=master;' +
    'Trusted_Connection=Yes;' +
    'TrustServerCertificate=Yes;' +
    'Encrypt=No;';

  console.log('Connecting directly...');

  const pool = await sql.connect(connectionString);

  console.log('Connected successfully!');

  const result = await pool
    .request()
    .query('SELECT GETDATE() AS CurrentDate');

  console.log('SQL Result:', result.recordset);

  expect(result.recordset).toHaveLength(1);

  await pool.close();

  console.log('Connection closed.');
});

