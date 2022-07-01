import { readFileSync } from "fs";

const convertToNumber = (string) => {
  return parseInt(string.replace(/(,|개|원)/g, ""));
};

const addCommas = (n) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const preprocessing = (gov) => {
  const homesStr = readFileSync(
    `publichome/src/util/rawData${gov}.txt`,
    "utf-8"
  );
  const homesList = homesStr.split("\n");

  const homesObj = homesList.map((e) => {
    const line = e.split("\t");
    return {
      address: line[0].split("(")[0],
      name: line[1],
      classes:
        line[2] +
        " " +
        (line[3] ? line[3] + "동 " : "") +
        line[4] +
        "호 " +
        line[5].split(".")[0] +
        "㎡",
      totalPrice: addCommas(convertToNumber(line[6]) / 10000) + "만원",
      monthPay: line[7].trim() + "원",
    };
  });

  const homesNameList = homesObj.map(({ name }) => name);

  const homesNameSetify = Array.from(new Set(homesNameList));

  const homesReuslt = homesNameSetify.map((name) => {
    return { name, sells: [] };
  });

  homesObj.forEach(({ address, classes, monthPay, name, totalPrice }) => {
    const Obj = homesReuslt.filter((e) => e.name === name.split("-")[0])[0];
    Obj.gov = "LH";
    Obj.address = address;
    Obj.sells.push({ classes, totalPrice, monthPay });
  });
  return homesReuslt;
};

const lhList = preprocessing("LH");
console.log(lhList);
