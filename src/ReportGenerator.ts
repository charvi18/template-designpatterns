abstract class ReportGenerator {

    // TEMPLATE METHOD
    public generateReport(): void {

        this.fetchData();

        this.processData();

        this.generateFile();

        this.saveFile();

        this.sendNotification();
    }

    // Common methods
    private fetchData(): void {
        console.log("Fetching data from database");
    }

    private processData(): void {
        console.log("Processing report data");
    }

    private saveFile(): void {
        console.log("Saving report file");
    }

    private sendNotification(): void {
        console.log("Sending email notification");
    }

    // Different for each report type
    protected abstract generateFile(): void;
}

export default ReportGenerator;