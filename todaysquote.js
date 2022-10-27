
async function fun1()
 {
    var url ="https://type.fit/api/quotes";

    const response=await fetch(url);
    const allQuotes =await response.json();
    const indx =Math.floor(Math.random()*allQuotes.length);
    const quote =allQuotes[indx].text;
    const authur=allQuotes[indx].author;
    const text=document.getElementById("quotee");
    const writer=document.getElementById("write");

    text.innerHTML='\"'+quote+'\"';
    writer.innerHTML='\"'+authur+'\"';

 }
 fun1();