var ni = document.getElementById("name-input")
var mo = document.getElementById("mark1-input")
var mt = document.getElementById("mark2-input")
var mth = document.getElementById("mark3-input")
var mf = document.getElementById("mark4-input")
var mfv = document.getElementById("mark5-input")
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
var result=""
var p = 0
function addi()
{
    if(ni.value=="" || mo.value=="" || mt.value=="" || mth.value==""|| mf.value=="" || mfv.value=="" || di.value=="" || yi.value=="")
    {
        alert("Please fill all the feilds")
        return
    }
    studentcount++

    total_mark = Number(mo.value)+Number(mt.value)+Number(mth.value)+Number(mf.value)+Number(mfv.value)
    p = (total_mark*5)/100
    if(p>75)
    {
        result="Pass"
    }
    else{
        result ="Fail"
    }
    var l = document.createElement("tr")
    l.innerHTML ="<td>"+ni.value+"</td>"+"<td>"+di.value+"</td>"+"<td>"+yi.value+"</td>"+"<td>"+p+"</td>"+"<td>"+result+"</td>"
    dt.append(l)
    
    ni.value=""
    mo.value=""
    mt.value=""
    mth.value=""
    mf.value=""
    mfv.value=""
    di.value=""
    yi.value=""
    
}
function report(event)
{
    var row = document.createElement("tr")
    row.innerHTML = "<td>"+studentcount+"</td>" + "<td>"+passedstudents+"</td>"+"<td>"+failedstudents+"</td>"+"<td>"+avgm+"</td>"+"<td>"+highm+"</td>"+"<td>"+lowm+"</td>"
    rt.append(row)
    event.target.disabled=true
}

