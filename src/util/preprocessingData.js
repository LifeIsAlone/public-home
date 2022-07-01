import { readFileSync } from "fs";

const convertToNumber = (string) => {
  return parseInt(string.replace(/(,|개|원)/g, ""));
};

const addCommas = (n) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const preprocessingLH = () => {
  const homesStr = readFileSync(`publichome/src/util/rawDataLH.txt`, "utf-8");
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

const calPrice = (monthPayPercent, transInterestRate, totalPrice, monthPay) => {
  const newTotalPay = Math.floor(monthPay * monthPayPercent * 200 + totalPrice);
  const newMonthPay = Math.round(
    monthPay - ((newTotalPay - totalPrice) * transInterestRate) / 12
  );
  return [newTotalPay, newMonthPay];
};

const preprocessingSH = () => {
  const homesStr = readFileSync(`publichome/src/util/rawDataSH.txt`, "utf-8");
  const homesList = homesStr.split("\n");

  const homesObj = homesList.map((e) => {
    const line = e.split("\t");

    const name = line[1];
    const _totalPrice = convertToNumber(line[6]);
    const _monthPay = convertToNumber(line[7]);
    const newOrOld = line[8];

    const monthPayPercent = name.includes("스윗홈")
      ? 0.8
      : name.includes("아이빌")
      ? 0.8
      : newOrOld.includes("신규")
      ? 0.8
      : newOrOld.includes("재")
      ? 0.6
      : "개발자 오픈톡 신고 바랍니다.";

    const transInterestRate = 0.067;

    const [totalPrice, monthPay] = calPrice(
      monthPayPercent,
      transInterestRate,
      _totalPrice,
      _monthPay
    );
    // console.log(monthPay);
    return {
      address: line[0].split(",")[0].split("(")[0].trimEnd(),
      name,
      classes:
        (line[2] === "-"
          ? "남녀공용"
          : line[2] === "남성"
          ? "남성전용"
          : line[2] === "여성"
          ? "여성전용"
          : "개발자 오픈톡 버그 신고 바랍니다.") +
        " " +
        (line[3] ? line[3] + "동 " : "") +
        Number(line[4]) +
        "호 " +
        line[5].split(".")[0] +
        "㎡",
      totalPrice: addCommas(Math.round(totalPrice / 10000)) + "만원",
      monthPay: addCommas(monthPay) + "원",
    };
  });

  const homesNameList = homesObj.map(({ name }) => name);

  const homesNameSetify = Array.from(new Set(homesNameList));

  const homesReuslt = homesNameSetify.map((name) => {
    return { name, sells: [] };
  });

  homesObj.forEach(({ address, classes, monthPay, name, totalPrice }) => {
    const Obj = homesReuslt.filter((e) => e.name === name)[0];
    Obj.gov = "SH";
    Obj.address = address;
    Obj.sells.push({ classes, totalPrice, monthPay });
  });
  console.log(homesObj[homesObj.length - 1]);
  return homesReuslt;
};

const shList = preprocessingSH();
const lhList = preprocessingLH();
console.log(shList.length);
console.log(lhList.length);
const result = shList.concat(lhList);
console.log(result.length);