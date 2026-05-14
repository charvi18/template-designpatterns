import ReportGenerator from "./ReportGenerator";

class ExcelReport extends ReportGenerator {

    protected generateFile(): void {
        console.log("Generating Excel report");
    }
}

export default ExcelReport;