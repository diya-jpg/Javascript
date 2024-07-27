const complexData = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA",
      },
      orders: [
        { orderId: "A123", amount: 50.75, status: "completed" },
        { orderId: "B456", amount: 30.25, status: "pending" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      address: {
        street: "456 Oak St",
        city: "Othercity",
        country: "USA",
      },
      orders: [
        { orderId: "C789", amount: 100.5, status: "completed" },
        { orderId: "D012", amount: 75.2, status: "completed" },
      ],
    },
  ]
 let x=complexData.filter((item)=>item.age<=25);
  console.log(x);
 let y=complexData.map(item => item.name);
console. log(y);
let a=complexData.map((item)=>item.orders.filter((item)=>item.amount>50));
console.log(a);
let b=complexData.map((item)=>item.orders.map((item)=>item.orderId));
console.log(b);
let c=complexData.map((item)=>item.orders.filter((item)=>item.status==="pending"));
console.log(c);

let d=complexData.map(item=>({name:item.name,totalamount:item.orders.reduce((total,orders)=>total+orders.amount,0)}));
console.log(d);

let e=complexData.map(item=>item.name).filter((item)=>item.amount>30 &&item.amount<70);
console.log(e);

let f=complexData.map((item)=>({name:item.name,completedorderId:item.orders.filter(order=>order.status==="completed").map(order=>order.orderId)}));
console.log(f);

let g=complexData.filter((item)=>item.address.country==="USA"&& item.orders.some((item)=>item.amount>50));//some()=>atleast
console.log(g);


// Filter users who are aged 25 or younger.
// Map the array to get an array of user names.
// Filter orders with an amount greater than 50.
// Map the array to get an array of order IDs.
// Filter users who have at least one order with a status of 'pending'.
// Map the array to get an array of objects containing user names and their total order amounts.
// Filter orders with an amount between 30 and 70.
// Map the array to get an array of objects containing user names and their completed order IDs.
// Filter users who live in the 'USA' and have at least one order with an amount greater than 50.
// Filter users who live in the 'USA' and have at least one order with an amount greater than 50