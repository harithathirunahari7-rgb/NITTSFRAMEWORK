
import { test } from '@playwright/test';

test('Node and ODBC information', async () => {
  console.log('Node version:', process.version);
  console.log('Node architecture:', process.arch);
  console.log('Node executable:', process.execPath);
  console.log('Platform:', process.platform);

  console.log('PATH:', process.env.PATH);
  console.log('ODBCINSTINI:', process.env.ODBCINSTINI);
  console.log('ODBCSYSINI:', process.env.ODBCSYSINI);
});

