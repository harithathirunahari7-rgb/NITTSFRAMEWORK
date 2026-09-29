
import sql from 'mssql/msnodesqlv8';
import dotenv from 'dotenv';

dotenv.config();

const driver = process.env.DB_DRIVER || 'ODBC Driver 18 for SQL Server';
const server = process.env.DB_SERVER || 'localhost';
const port = process.env.DB_PORT || '1433';
const database = process.env.DB_DATABASE || 'master';

const connectionString =
  `Driver={${driver}};` +
  `Server=${server},${port};` +
  `Database=${database};` +
  `Trusted_Connection=Yes;` +
  `TrustServerCertificate=Yes;` +
  `Encrypt=No;`;

console.log('DB configuration:', {
  driver,
  server,
  port,
  database,
});

let pool: sql.ConnectionPool | undefined;

export async function getConnection(): Promise<sql.ConnectionPool> {
  if (!pool) {
    pool = await sql.connect(connectionString);
  }

  return pool;
}

export async function executeQuery<T = any>(
  query: string
): Promise<T[]> {
  const connection = await getConnection();

  const result = await connection
    .request()
    .query<T>(query);

  return result.recordset;
}

export async function closeConnection(): Promise<void> {
  if (pool) {
    await pool.close();
    pool = undefined;
  }
}


