import PDFReport from "./pdfreport";
import ExcelReport from "./excelreport";
import WordReport from "./wordreport";

console.log("===== PDF REPORT =====");

const pdf = new PDFReport();

pdf.generateReport();

console.log();

console.log("===== EXCEL REPORT =====");

const excel = new ExcelReport();

excel.generateReport();
console.log("===== WORD REPORT ====");
const word =new WordReport();
word.generateReport();
console.log();