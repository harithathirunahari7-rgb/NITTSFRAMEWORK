const sql = require('mssql/msnodesqlv8');

const config = {
  connectionString:
    'Driver={ODBC Driver 18 for SQL Server};' +
    'Server=localhost,1433;' +
    'Database=master;' +
    'Trusted_Connection=Yes;' +
    'TrustServerCertificate=Yes;' +
    'Encrypt=No;'
};

async function testConnection() {
  try {
    console.log('Connecting to SQL Server...');

    const pool = await sql.connect(config);

    console.log('Connected successfully!');

    const result = await pool.request().query(
      'SELECT GETDATE() AS CurrentDate'
    );

    console.log(result.recordset);

    await pool.close();
  } catch (error) {
    console.error('DATABASE ERROR:');
    console.error(error);
  }
}

testConnection();