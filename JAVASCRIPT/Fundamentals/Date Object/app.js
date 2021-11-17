let value;

const now = new Date(); // Şu anki zamanı almamızı sağlar...

const date1 = new Date("12-12-1999 18:15:00");
const date2 = new Date("December 12 1999");
const date3 = new Date("12/12/1999");

value = date1;
value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();


value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMillisec();


date1.setMonth(4);
date1.setDate(2);
date1.setFullYear(1999);
date1.setHours(0);
date1.setMinutes(15);
date1.setSeconds(30);


value = date1;


console.log(value);