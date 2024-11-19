var i=1;
var sum=0;
for(i=1;i<=5;i++)
{
    console.log("i="+i)
    console.log("sum="+sum)
    sum=sum+i;
}
var miles;
do{
    miles =parseInt(prompt("Enter miles driven:"));

}while(isNaN(miles) || miles<=0);
var gallons;
do{
    miles =parseInt(prompt("Enter miles driven:"));

}while(isNaN(miles) || gallons<=0);

again=prompt("Do you want to repeat Entries:","Y");
while(again == "Y");

document.write(`<p> the miles per gallones are : </p> $`);
