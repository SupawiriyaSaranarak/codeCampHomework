const sales = [
  {
    id: 1,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "01-01-2021",
    customer: "Sun",
    discount: 0.2,
    type: "Cash",
  },
  {
    id: 2,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "01-01-2021",
    customer: "Tle",
    type: "Credit",
  },
  {
    id: 3,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 36900,
    },
    saleDate: "01-01-2021",
    customer: "Beer",
    type: "Cash",
  },
  {
    id: 4,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "01-01-2021",
    customer: "Jit",
    discount: 0.2,
    type: "Credit",
  },
  {
    id: 5,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 36900,
    },
    saleDate: "01-01-2021",
    customer: "Palm",
    type: "Cash",
  },
  {
    id: 6,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "01-01-2021",
    customer: "Top",
    type: "Credit",
  },
  {
    id: 7,
    product: {
      id: 4,
      name: "Oppo",
      model: "A15",
      unitPrice: 4299,
    },
    saleDate: "02-01-2021",
    customer: "Sun",
    type: "Credit",
  },
  {
    id: 8,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "02-01-2021",
    customer: "Snap",
    discount: 0.1,
    type: "Credit",
  },
  {
    id: 9,
    product: {
      id: 5,
      name: "iPhone",
      model: "11 Pro",
      unitPrice: 36900,
    },
    saleDate: "02-01-2021",
    customer: "Ham",
    discount: 0.25,
    type: "Credit",
  },
  {
    id: 10,
    product: {
      id: 6,
      name: "Samsung",
      model: "A31",
      unitPrice: 7999,
    },
    saleDate: "02-01-2021",
    customer: "Ham",
    discount: 0.25,
    type: "Credit",
  },
  {
    id: 11,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "02-01-2021",
    customer: "Tle",
    discount: 0.3,
    type: "Airpay",
  },
  {
    id: 12,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "02-01-2021",
    customer: "Micky",
    type: "Credit",
  },
  {
    id: 13,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "02-01-2021",
    customer: "Boss",
    type: "Cash",
  },
  {
    id: 14,
    product: {
      id: 7,
      name: "Oppo",
      model: "Reno5",
      unitPrice: 19990,
    },
    saleDate: "02-01-2021",
    customer: "Sila",
    type: "Airpay",
  },
  {
    id: 15,
    product: {
      id: 8,
      name: "Xiaomi",
      model: "Redmi 9C",
      unitPrice: 3399,
    },
    saleDate: "02-01-2021",
    customer: "Top",
    type: "Cash",
  },
  {
    id: 16,
    product: {
      id: 9,
      name: "Samsung",
      model: "A42",
      unitPrice: 11990,
    },
    saleDate: "03-01-2021",
    customer: "Cin",
    type: "Cash",
  },
  {
    id: 17,
    product: {
      id: 6,
      name: "Samsung",
      model: "A31",
      unitPrice: 7999,
    },
    saleDate: "03-01-2021",
    customer: "Cin",
    type: "Cash",
  },
  {
    id: 18,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 36900,
    },
    saleDate: "03-01-2021",
    customer: "Sine",
    discount: 0.3,
    type: "Airpay",
  },
  {
    id: 19,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "03-01-2021",
    customer: "Note",
    type: "Credit",
  },
  {
    id: 20,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "03-01-2021",
    customer: "Micky",
    type: "Credit",
  },
  {
    id: 21,
    product: {
      id: 10,
      name: "Vivo",
      model: "V20 Pro",
      unitPrice: 14999,
    },
    saleDate: "04-01-2021",
    customer: "Bank",
    type: "Cash",
  },
  {
    id: 22,
    product: {
      id: 10,
      name: "Vivo",
      model: "V20 Pro",
      unitPrice: 14999,
    },
    saleDate: "04-01-2021",
    customer: "Bank",
    type: "Cash",
  },
  {
    id: 23,
    product: {
      id: 7,
      name: "Oppo",
      model: "Reno5",
      unitPrice: 19990,
    },
    saleDate: "04-01-2021",
    customer: "Leo",
    type: "Cash",
  },
  {
    id: 24,
    product: {
      id: 9,
      name: "Samsung",
      model: "A42",
      unitPrice: 11990,
    },
    saleDate: "04-01-2021",
    customer: "Game",
    type: "Cash",
  },
  {
    id: 25,
    product: {
      id: 6,
      name: "Samsung",
      model: "A31",
      unitPrice: 7999,
    },
    saleDate: "04-01-2021",
    customer: "U",
    discount: 0.3,
    type: "Airpay",
  },
  {
    id: 26,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "05-01-2021",
    customer: "Boy",
    type: "Credit",
  },
  {
    id: 27,
    product: {
      id: 11,
      name: "Vivo",
      model: "X50 Pro",
      unitPrice: 19999,
    },
    saleDate: "05-01-2021",
    customer: "Boom",
    type: "True Wallet",
  },
  {
    id: 28,
    product: {
      id: 12,
      name: "Vivo",
      model: "V20",
      unitPrice: 10999,
    },
    saleDate: "05-01-2021",
    customer: "Boom",
    type: "True Wallet",
  },
  {
    id: 29,
    product: {
      id: 9,
      name: "Samsung",
      model: "A42",
      unitPrice: 11990,
    },
    saleDate: "05-01-2021",
    customer: "Am",
    type: "Cash",
  },
  {
    id: 30,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "06-01-2021",
    customer: "Um",
    type: "True Wallet",
  },
  {
    id: 31,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "06-01-2021",
    customer: "Win",
    discount: 0.25,
    type: "Airpay",
  },
  {
    id: 32,
    product: {
      id: 7,
      name: "Oppo",
      model: "Reno5",
      unitPrice: 19990,
    },
    saleDate: "06-01-2021",
    customer: "Cin",
    type: "Cash",
  },
  {
    id: 33,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "07-01-2021",
    customer: "Palm",
    discount: 0.1,
    type: "Credit",
  },
  {
    id: 34,
    product: {
      id: 5,
      name: "iPhone",
      model: "11 Pro",
      unitPrice: 36900,
    },
    saleDate: "07-01-2021",
    customer: "Dom",
    discount: 0.15,
    type: "Credit",
  },
  {
    id: 35,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "07-01-2021",
    customer: "Sern",
    type: "True Wallet",
  },
  {
    id: 36,
    product: {
      id: 13,
      name: "iPhone",
      model: "SE2000",
      unitPrice: 14900,
    },
    saleDate: "07-01-2021",
    customer: "Beer",
    type: "Cash",
  },
  {
    id: 37,
    product: {
      id: 14,
      name: "iPhone",
      model: "12 Mini",
      unitPrice: 25900,
    },
    saleDate: "07-01-2021",
    customer: "Game",
    discount: 0.2,
    type: "Credit",
  },
  {
    id: 38,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "07-01-2021",
    customer: "Sun",
    discount: 0.25,
    type: "Airpay",
  },
  {
    id: 39,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "07-01-2021",
    customer: "Tom",
    type: "Cash",
  },
  {
    id: 40,
    product: {
      id: 14,
      name: "iPhone",
      model: "12 Mini",
      unitPrice: 25900,
    },
    saleDate: "08-01-2021",
    customer: "Ham",
    type: "Cash",
  },
  {
    id: 41,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "08-01-2021",
    customer: "Dom",
    type: "Credit",
  },
  {
    id: 42,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "08-01-2021",
    customer: "Cin",
    type: "True Wallet",
  },
  {
    id: 43,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "08-01-2021",
    customer: "Tle",
    type: "Cash",
  },
  {
    id: 44,
    product: {
      id: 7,
      name: "Oppo",
      model: "Reno5",
      unitPrice: 19990,
    },
    saleDate: "09-01-2021",
    customer: "U",
    type: "Cash",
  },
  {
    id: 45,
    product: {
      id: 11,
      name: "Vivo",
      model: "X50 Pro",
      unitPrice: 19999,
    },
    saleDate: "09-01-2021",
    customer: "Am",
    discount: 0.35,
    type: "Airpay",
  },
  {
    id: 46,
    product: {
      id: 10,
      name: "Vivo",
      model: "V20 Pro",
      unitPrice: 14999,
    },
    saleDate: "10-01-2021",
    customer: "Sern",
    type: "Cash",
  },
  {
    id: 47,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "10-01-2021",
    customer: "Game",
    discount: 0.3,
    type: "Credit",
  },
  {
    id: 48,
    product: {
      id: 9,
      name: "Samsung",
      model: "A42",
      unitPrice: 11990,
    },
    saleDate: "10-01-2021",
    customer: "Jit",
    type: "Cash",
  },
  {
    id: 49,
    product: {
      id: 14,
      name: "iPhone",
      model: "12 Mini",
      unitPrice: 25900,
    },
    saleDate: "10-01-2021",
    customer: "Snap",
    type: "True Wallet",
  },
  {
    id: 50,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "10-01-2021",
    customer: "Micky",
    type: "Cash",
  },
  {
    id: 51,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "11-01-2021",
    customer: "Boss",
    discount: 0.2,
    type: "Credit",
  },
  {
    id: 52,
    product: {
      id: 8,
      name: "Xiaomi",
      model: "Redmi 9C",
      unitPrice: 3399,
    },
    saleDate: "11-01-2021",
    customer: "Leo",
    discount: 0.05,
    type: "Credit",
  },
  {
    id: 53,
    product: {
      id: 10,
      name: "Vivo",
      model: "V20 Pro",
      unitPrice: 14999,
    },
    saleDate: "11-01-2021",
    customer: "Sine",
    discount: 0.15,
    type: "True Wallet",
  },
  {
    id: 54,
    product: {
      id: 14,
      name: "iPhone",
      model: "12 Mini",
      unitPrice: 25900,
    },
    saleDate: "07-01-2021",
    customer: "Um",
    discount: 0.1,
    type: "Cash",
  },
];

// 1. จำนวน transaction ทั้งหมด

// const numberOfTransaction = sales.length;
// console.log(numberOfTransaction);

// 2. จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง แต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง

// const customer = [];
// for (let k of sales) {
//   customer.filter((item) => item === k.customer)[0]
//     ? null
//     : customer.push(k.customer);
// }
// let customerData = [];

// for (let k of customer) {
//   const paidAmount = sales.reduce((acc, item) => {
//     let x = acc;
//     if (item.customer === k) {
//       if (+item.discount) {
//         x += +item.product.unitPrice * (1 - +item.discount);
//       } else {
//         x += +item.product.unitPrice;
//       }
//     }
//     return x;
//   }, 0);
//   const noOfDevice = sales.reduce((acc, item) => {
//     let x = acc;
//     if (item.customer === k) {
//       x++;
//     }
//     return x;
//   }, 0);

//   const x = {
//     customer: k,
//     paidAmount,
//     noOfDevice,
//   };

//   customerData.push(x);
// }
// console.log("customerData", customerData);

// 3. ยอดขายทั้งหมด (หลังหัก discount)

// const totalSale = sales.reduce((acc, item) => {
//   let x = acc;
//   if (+item.discount) {
//     x += +item.product.unitPrice * (1 - +item.discount);
//   } else {
//     x += +item.product.unitPrice;
//   }
//   return x;
// }, 0);
// console.log("totalSale", totalSale);

// 4. สินค้าที่ถูกขายมี่กี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่

// const productName = [];
// for (let k of sales) {
//   productName.filter((item) => k.product.name === item)[0]
//     ? null
//     : productName.push(k.product.name);
// }
// console.log("productName", productName);

// const paidPerProductName = [];

// for (let k of productName) {
//   const paidAmount = sales.reduce((acc, item) => {
//     let x = acc;
//     if (item.product.name === k) {
//       if (+item.discount) {
//         x += +item.product.unitPrice * (1 - +item.discount);
//       } else {
//         x += +item.product.unitPrice;
//       }
//     }
//     return x;
//   }, 0);
//   const noOfSale = sales.reduce((acc, item) => {
//     let x = acc;
//     if (item.product.name === k) {
//       x++;
//     }
//     return x;
//   }, 0);
//   const y = {
//     productName: k,
//     paidAmount,
//     noOfSale,
//   };
//   paidPerProductName.push(y);
// }
// console.log("paidPerProductName", paidPerProductName);
// 5. สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่

// const productName = [];
// for (let k of sales) {
//   productName.filter((item) => k.product.name === item)[0]
//     ? null
//     : productName.push(k.product.name);
// }
// console.log(productName);

// const productModel = [];
// for (let k of productName) {
//   const modelName = [];
//   let model = sales.filter((item) => item.product.name === k);
//   console.log("model", model);
//   for (let m of model) {
//     console.log("m", m);
//     modelName.filter((item) => m.product.model === item)[0]
//       ? null
//       : modelName.push(m.product.model);
//   }
//   console.log("modelName", modelName);
//   const x = {
//     productName: k,
//     noOfModel: modelName.length,
//     modelName,
//   };
//   productModel.push(x);
// }
// console.log("productModel", productModel);

// let modelPaidAmount = [];
// for (let b of productModel) {
//   const models = [];
//   for (let m of b.modelName) {
//     const paidAmount = sales.reduce((acc, item) => {
//       // let x = acc;
//       if (item.product.model === m) {
//         if (+item.discount) {
//           return acc + +item.product.unitPrice * (1 - +item.discount);
//         } else {
//           return acc + +item.product.unitPrice;
//         }
//       }
//       return acc;
//     }, 0);
//     const noOfSale = sales.reduce((acc, item) => {
//       if (item.product.model === m) {
//         acc++;
//       }
//       return acc;
//     }, 0);
//     const y = {
//       modelName: m,
//       paidAmount,
//       noOfSale,
//     };
//     models.push(y);
//   }
//   const z = {
//     productName: b.productName,
//     noOfModel: b.noOfModel,
//     models,
//   };
//   modelPaidAmount.push(z);
// }
// console.log("nmodelPaidAmount", modelPaidAmount);

// 6. หายอดรวมของการจ่ายแต่ละประเภท (Cash, Credit, ...)
// const paidType = sales.reduce((acc, item) => {
//   const {
//     product: { unitPrice },
//     discount,
//     type,
//   } = item;
//   let hasType = false;

//   console.log("acc", acc);
//   for (let k of acc) {
//     console.log("k", k);
//     console.log("k.type", k.type);
//     console.log("item", type);
//     if (k.type === type) hasType = true;
//   }
//   const index = acc.findIndex((item) => item.type === type);
//   console.log(index);
//   if (hasType) {
//     console.log("acc[index].totalPaidAmount", acc[index].totalPaidAmount);
//     if (+discount) {
//       acc[index].totalPaidAmount += +unitPrice * (1 - +item.discount);
//     } else {
//       acc[index].totalPaidAmount += +item.product.unitPrice;
//     }
//   } else {
//     let totalPaidAmount = 0;
//     if (+item.discount) {
//       totalPaidAmount = +item.product.unitPrice * (1 - +item.discount);
//     } else {
//       totalPaidAmount = +item.product.unitPrice;
//     }
//     const x = { type, totalPaidAmount };
//     acc.push(x);
//   }
//   return acc;
// }, []);
// console.log(paidType);
// 7. หายอดรวมในแต่ละวัน
// const paidPerDate = sales.reduce((acc, item) => {
//   const {
//     product: { unitPrice },
//     discount,
//     saleDate,
//   } = item;
//   let hasDate = false;

//   console.log("acc", acc);
//   for (let k of acc) {
//     console.log("k", k);
//     console.log("k.saleDate", k.saleDate);
//     console.log("saleDate", saleDate);
//     if (k.saleDate === saleDate) hasDate = true;
//   }
//   const index = acc.findIndex((item) => item.saleDate === saleDate);
//   console.log(index);
//   if (hasDate) {
//     console.log("acc[index].totalPaidAmount", acc[index].totalPaidAmount);
//     if (+discount) {
//       acc[index].totalPaidAmount += +unitPrice * (1 - +item.discount);
//     } else {
//       acc[index].totalPaidAmount += +item.product.unitPrice;
//     }
//   } else {
//     let totalPaidAmount = 0;
//     if (+item.discount) {
//       totalPaidAmount = +item.product.unitPrice * (1 - +item.discount);
//     } else {
//       totalPaidAmount = +item.product.unitPrice;
//     }
//     const x = { saleDate, totalPaidAmount };
//     acc.push(x);
//   }
//   return acc;
// }, []);
// console.log(paidPerDate);
// 8. เรียงยอดขายของแต่ละรุ่นจากมากไปน้อย
// const paidPerModel = sales.reduce((acc, item) => {
//   const {
//     product: { unitPrice, model },
//     discount,
//   } = item;
//   let hasModel = false;

//   console.log("acc", acc);
//   for (let k of acc) {
//     console.log("k", k);
//     console.log("k.saleDate", k.model);
//     console.log("saleDate", model);
//     if (k.model === model) hasModel = true;
//   }
//   const index = acc.findIndex((item) => item.model === model);
//   console.log(index);
//   if (hasModel) {
//     console.log("acc[index].totalPaidAmount", acc[index].totalPaidAmount);
//     if (+discount) {
//       acc[index].totalPaidAmount += +unitPrice * (1 - +item.discount);
//     } else {
//       acc[index].totalPaidAmount += +item.product.unitPrice;
//     }
//   } else {
//     let totalPaidAmount = 0;
//     if (+item.discount) {
//       totalPaidAmount = +item.product.unitPrice * (1 - +item.discount);
//     } else {
//       totalPaidAmount = +item.product.unitPrice;
//     }
//     const x = { model, totalPaidAmount };
//     acc.push(x);
//   }
//   return acc;
// }, []);
// console.log(paidPerModel);
// paidPerModel.sort((a, b) => b.totalPaidAmount - a.totalPaidAmount);
// console.log(paidPerModel);
// 9. เรียงลูกค้าที่ซื้อมากที่สุดจากมากไปน้อย
const paidPerCustomer = sales.reduce((acc, item) => {
  const {
    product: { unitPrice },
    customer,
    discount,
  } = item;
  let hasCustomer = false;

  console.log("acc", acc);
  for (let k of acc) {
    console.log("k", k);
    console.log("k.saleDate", k.customer);
    console.log("saleDate", customer);
    if (k.customer === customer) hasCustomer = true;
  }
  const index = acc.findIndex((item) => item.customer === customer);
  console.log(index);
  if (hasCustomer) {
    console.log("acc[index].totalPaidAmount", acc[index].totalPaidAmount);
    if (+discount) {
      acc[index].totalPaidAmount += +unitPrice * (1 - +item.discount);
    } else {
      acc[index].totalPaidAmount += +item.product.unitPrice;
    }
  } else {
    let totalPaidAmount = 0;
    if (+item.discount) {
      totalPaidAmount = +item.product.unitPrice * (1 - +item.discount);
    } else {
      totalPaidAmount = +item.product.unitPrice;
    }
    const x = { customer, totalPaidAmount };
    acc.push(x);
  }
  return acc;
}, []);
console.log(paidPerCustomer);
paidPerCustomer.sort((a, b) => b.totalPaidAmount - a.totalPaidAmount);
console.log(paidPerCustomer);
