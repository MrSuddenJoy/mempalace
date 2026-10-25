const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile('dane.xlsx');
const sheet = workbook.getWorksheet('Arkusz1');
sheet.eachRow(row => console.log(row.values));

Workbook.getWorksheet(`Sheet1`);
onload.apply(workbook);