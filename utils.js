/* eslint-disable no-unused-vars */
// import * as FileSaver from "file-saver";
// import XLSX from "sheetjs-style";
import Exceljs from "exceljs";

export const exportToExcel = async (excelData, fileName) => {
  const workbook = new Exceljs.Workbook();
  const sheet = workbook.addWorksheet("My Sheet");

  sheet.columns = [
    { header: "Water Flowmeter", key: "waterFlowmeter", width: 32 },
    {
      header: "Air FlowMeter",
      key: "airFlowmeter",
      width: 20,
    },
    {
      header: "CO2 Flowmeter",
      key: "co2Flowmeter",
      width: 20,
    },
    {
      header: "Water Temperature",
      key: "waterTemperature",
      width: 15,
    },
    {
      header: "CO2 Temperature",
      key: "co2Temperature",
      width: 10,
    },
    {
      header: "CO2 Concentration",
      key: "co2Concentration",
      width: 30,
    },
    {
      header: "Final CO2 Rate",
      key: "finalCO2Rate",
      width: 30,
    },
  ];

  //   waterFlowmeter
  // airFlowmeter
  // co2Flowmeter
  // waterTemperature
  // co2Temperature
  // co2Concentration
  // finalCO2Rate
  excelData.map((item) => {
    sheet.addRow({
      waterFlowmeter: item.waterFlowmeter,
      airFlowmeter: item.airFlowmeter,
      co2Flowmeter: item.co2Flowmeter,
      waterTemperature: item.waterTemperature,
      co2Temperature: item.co2Temperature,
      co2Concentration: item.co2Concentration,
      finalCO2Rate: item.finalCO2Rate,
    });
  });

  workbook.xlsx.writeBuffer().then(function (data) {
        const blob = new Blob([data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "download.xlsx";
        anchor.click();
        window.URL.revokeObjectURL(url);
      });

  //   const worksheet = XLSX.utils.json_to_sheet(excelData);
  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  //   // Buffer to store the generated Excel file
  //   const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  //   const blob = new Blob([excelBuffer], {
  //     type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  //   });

  //   FileSaver.saveAs(blob, "exportedData.xlsx");
};
