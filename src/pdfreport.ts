import ReportGenerator from "./ReportGenerator";
class pdfreport extends ReportGenerator{
  protected generateFile(): void {
      console.log("generating pdf report");


  }  
}
export default pdfreport;