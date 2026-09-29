import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const config: sql.config = {
  server: process.env.DB_SERVER!,
  port: Number(process.env.DB_PORT || 1433),
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
  options: {
    encrypt: process.env.DB_ENCRYPT === 'true',
    trustServerCertificate:
      process.env.DB_TRUST_SERVER_CERTIFICATE === 'true',
  },
};

let pool: sql.ConnectionPool;

export async function getConnection() {
  if (!pool) {
    pool = await sql.connect(config);
  }

  return pool;
}

export async function executeQuery<T = any>(
  query: string,
  params: Record<string, any> = {}
): Promise<T[]> {
  const connection = await getConnection();

  const request = connection.request();

  for (const [key, value] of Object.entries(params)) {
    request.input(key, value);
  }

  const result = await request.query<T>(query);

  return result.recordset;
}