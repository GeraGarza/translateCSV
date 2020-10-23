const tr = require("googletrans").default;
const fs = require("fs");

data = [];
languages = [];
var tooManyReq = false
translate = async (lang = "en") => {
  // Deep copy
  let data_copy = JSON.parse(JSON.stringify(data));

  for (const property in data) {
    for (const index in data[property]) {
      var words_to_translate = data[property][index];
      if(tooManyReq){
        data_copy[property][index] = 0;continue;
      }

      try{
        var result = await tr([words_to_translate], {
          from: "en",
          to: lang,
        });
      data_copy[property][index] = result.text;
      }
      catch{
        data_copy[property][index] = 0;
        tooManyReq=true
        console.log("Too many requests.")
      }
    }
  }

  return data_copy;
};

writeToFile = async (lang) => {
  fs.writeFile(
    `./outputs/json2jsons/${languages[lang]}.json`,
    JSON.stringify(await translate(languages[lang])),
    (e) => {
      if (e) throw e;
    }
  );
};

translate_jsons = async (_data, _languages) => {
  data = _data;
  languages = _languages;
  for (var lang in languages) {
    try {
      await writeToFile(lang);
    } catch (e) {
      // too many requests
      console.log(e);
    }
  }
};

module.exports = {
  translate_jsons,
};
