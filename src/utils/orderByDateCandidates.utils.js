/**
 * @author: Benjamín Mancera
 * @author: Ana Lorenzo
 * @fileoverview function to order candidates by register date
 * @param {*} info //contains the candidates
 * @param {*} order //order the candidates by register date selected by the user
 * @returns 
 */

export const orderByDate = (info, order) => {
     //console.log(info);
    // console.log("orden " + order);
  let newOrder;
  if (order === "desc" ) {
    newOrder = info.data.sort((a, b) => {
      return new Date(b.registerAt) - new Date(a.registerAt);
    });
  } else if (order === "asc") {
    newOrder = info.data.sort((a, b) => {
      return new Date(a.registerAt) - new Date(b.registerAt);
    });
  } else {
    newOrder = info.data;
  }
  return newOrder;
};