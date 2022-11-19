//you are given an array of objects, we need to filter out the ones that are uqiue.
//input const users = [
//     {
//     "id": "1",
//     "name":"Sumit"
//    }, {
//     "id": "2",
//     "name":"Sarah"
//    },{
//     "id":"1",
//     "name": "Jack"
//    }
// ]
// output:
// [
//     {"id": "1", "name": "Sumit"}, {"id":"2", "name": "Sarah"}
// ]

const users = [
  {
    id: "1",
    name: "Sumit",
  },
  {
    id: "2",
    name: "Sarah",
  },
  {
    id: "1",
    name: "Jack",
  },
];

const frequencies = {};
let index = 0;
for (let user of users) {
  frequencies[user.id] = (frequencies[user.id] || 0) + 1;
}

let freqArray = [];
for (let key in frequencies) {
  if (frequencies[key] > 1) {
    freqArray.push(key);
  }
}
console.log(freqArray);
// ['1']
let result = [];
for (let user of users) {
  if (freqArray.includes(user.id)) {
    result.push(user);
  }
}

console.log(result);

// Approach 1:

// store all the ids in an array.
const ids = users.map((user) => user.id);
// console.log(ids);
// ["1", "2", "1"];
const filteredArray = users.filter(
  ({ id }, index) => !ids.includes(id, index + 1)
);
console.log(filteredArray);
// [
//   { id: "2", name: "Sarah" },
//   { id: "1", name: "Jack" },
// ];

// Ask rahul >> how to get sumit and not jack

// Approach 2:
