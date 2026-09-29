
import odbc from 'msnodesqlv8';
import dotenv from 'dotenv';

dotenv.config();

const connectionString =
  `Driver={${process.env.DB_DRIVER || 'ODBC Driver 18 for SQL Server'}};` +
  `Server=${process.env.DB_SERVER || 'localhost'},${process.env.DB_PORT || '1433'};` +
  `Database=${process.env.DB_DATABASE || 'master'};` +
  `Trusted_Connection=Yes;` +
  `TrustServerCertificate=Yes;` +
  `Encrypt=No;`;

export async function executeQuery<T = any>(
  query: string
): Promise<T[]> {
  return new Promise((resolve, reject) => {
    odbc.query(
      connectionString,
      query,
      (error, rows) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(rows as T[]);
      }
    );
  });
}

