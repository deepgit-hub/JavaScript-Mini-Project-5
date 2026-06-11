var ni = document.getElementById("name-input")
var mi = document.getElementById("mark-input")
var di = document.getElementById("department-input")
var yi = document.getElementById("year-input")
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
var total_mark=0
var am = 0
function addi()
{
    var l = document.createElement("tr")
    l.innerHTML ="<td>"+ni.value+"</td>"+"<td>"+mi.value+"</td>"+"<td>"+di.value+"</td>"+"<td>"+yi.value+"</td>"
    dt.append(l)
    ni.value=""
    mi.value=""
    di.value=""
    yi.value=""

    studentcount++
    if(Number(mi.value>=40))
    {
        passedstudents++
    }
    else{
        failedstudents++
    }
    if(Number(mi.value)>highm)
    {
        highm=Number(mi.value)
    }
    if(Number(mi.value)<lowm)
    {
        lowm=Number(mi.value)
    }
    total_mark+=Number(mi.value)
    am = total_mark/studentcount

}
function report(event)
{
    var row = document.createElement("tr")
    row.innerHTML = "<td>"+studentcount+"</td>" + "<td>"+passedstudents+"</td>"+"<td>"+failedstudents+"</td>"+avgm+"</td>"+"<td>"+highm+"</td>"+"<td>"+lowm+"</td>"
    rt.append(row)
    event.target.disabled=true
}

