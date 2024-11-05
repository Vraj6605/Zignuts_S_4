console.log("Filter In Javascript");

let myNums = [12,54,69,78,23,10,49];

let data = myNums.filter((num) => num > 60);
console.log(data);

let data2 = myNums.filter((num) => { return num > 60});
console.log(data2); 


const books = [
  { title: "Think and Grow Rich", published: "1987", type: "Business" },
  { title: "The Lean Startup", published: "2011", type: "Business" },
  { title: "Atomic Habits", published: "2018", type: "Self-help" },
  { title: "The 7 Habits of Highly Effective People", published: "1989", type: "Self-help" },
  { title: "Zero to One", published: "2014", type: "Business" },
  { title: "Sapiens: A Brief History of Humankind", published: "2011", type: "History" },
  { title: "The Power of Habit", published: "2012", type: "Psychology" },
  { title: "Good to Great", published: "2001", type: "Business" },
  { title: "Outliers: The Story of Success", published: "2008", type: "Psychology" },
  { title: "The Art of War", published: "5th century BC", type: "Strategy" }
];

let userBooks = books.filter((bk) => {
  return bk.published > 2015;
})

console.log(userBooks);

userBooks = books.filter((bk) => {
  return bk.published && bk.type == "Strategy";
})

console.log(userBooks);
