var ni = document.getElementById("name-input")
var mi = document.getElementById("mark-input")
var dt = document.getElementById("data-table")
var rt = document.getElementById("report-table")
var studentcount = 0
var passedstudents =0
var failedstudents =0
var nestudents=0
var sww = 0
var highm = 0
var lowm = 100
var avgm =0
function addi()
{
    var l = document.createElement("tr")
    l.innerHTML ="<td>"+ni.value+"</td>"+"<td>"+mi.value+"</td>"+"<td>"+ai.value+"</td>"+"<td>"+li.value+"</td>"+"<td>"+ml.value+"</td>"
    dt.append(l)
    studentcount++
    if(Number(mi.value>=40))
    {
        passedstudents++
    }
    else{
        failedstudents++
    }
    if(Number(ai.value<75))
    {
        nestudents++
    }
    else
    {
        sww++
    }
    if(Number(mi.value)>highm)
    {
        highm=Number(mi.value)
    }
    if(Number(mi.value)<lowm)
    {
        lowm=Number(mi.value)
    }

}
