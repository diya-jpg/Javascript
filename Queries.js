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
let c=complexData.map((items)=>item.orders.filter((item)=>item.status==="pending"));
console.log(c);


