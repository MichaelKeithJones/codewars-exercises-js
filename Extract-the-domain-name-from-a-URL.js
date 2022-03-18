// Author: Michael K. Jones

"use strict";

// Version 1
//////////////////////////////
// Works but Codewars rejects it (:|)
 let domainName = (url) => {
     let x = url.search("//");
     if (x !== -1) {
         x = url.search("www");
         if (x !== -1) {
            let x = url.split("//www.");        //--| "//www."
            let output = x[1].split(".");
            return output[0];
         } else {
             let x = url.split("//");           //--| "//"
             let output = x[1].split(".");
             return output[0];
         }
     } else {
         x = url.search("www");
         if (x !== -1) {                        //--| "www."
             let x = url.split("www.");
             let output = x[1].split(".");
             return output[0];
         } else {                               //--| ""
             let x = url.split(".");
             return x[0];
         }
     }
 }

console.log(domainName("7garz4rxd.info/warez/"));