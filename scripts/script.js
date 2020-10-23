const data = require("../data/en_test.json");
if (typeof require !== "undefined") xlsx = require("xlsx");
var workbook = xlsx.readFile("./data/GreenRoom_Translations.xls");
const csv2csv = require("./csv2csv");
const json2json = require("./json2json");
const json2csv = require("./json2csv");
const csv2json = require("./csv2json");


// https://py-googletrans.readthedocs.io/en/latest/  
var languages = {
  "Chinese (Traditional)": "zh-tw",
  "Chinese (Simplified)": "zh-cn",
  Japanese: "ja",
  Korean: "ko",
  Thai: "th",
  Vietnamese: "vi",
  Indonesian: "id",

};

var filename_template = "outputs/csvs/GreenRoom_Translations_English.xls"
var filename_translate = "outputs/csvs/GreenRoom_Translations_Final.xls"


/* _______________   JSON  --> XLSX  (creates english template)  __________________________ */

json2csv.translate_jsons(data, filename_template);


/* _______________   XLSX(en-template)  --> XLSX    __________________________ */
//workbook = xlsx.readFile(filename_template);

//greenroom = new csv2csv.csv2csv(workbook, languages);
//greenroom.write_sheets(filename_translate);


/* _______________   JSON  --> JSON    __________________________ */

// json2json.translate_jsons(data, languages);


/* _______________   XLSX  --> JSON    __________________________ */

//csv2json.translate_csv(workbook, languages);

console.log("Complete")

            