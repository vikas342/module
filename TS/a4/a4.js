var arr = [];
function add() {
    var nm = document.getElementById("itm").value;
    var qty = document.getElementById("qty").value;
    //alert(nm+" "+qty)
    arr.push({ Name: nm, Qty: qty });
    console.log(arr);
    document.getElementById("tbl").innerHTML = "";
    print();
}
function print() {
    document.getElementById("tbl").innerHTML = "";
    for (var i in arr) {
        document.getElementById("tbl").innerHTML += "<tr><td>".concat(arr[i].Name, "</td><td>").concat(arr[i].Qty, "</td> <td><button class=\"btn btn-primary\" onclick=\"remove(").concat(i, ")\">\u2212</button></td></tr>");
    }
}
function remove(x) {
    document.getElementById("tbl").innerHTML = "";
    var index = x;
    var srtqty = arr[x].Qty;
    var q = arr[x].Qty;
    q--;
    if (q < 5) {
        alert("order for inventory");
    }
    if (q < 0) {
        q = srtqty;
    }
    arr.push({ Name: arr[x].Name, Qty: q });
    for (var i in arr) {
        document.getElementById("tbl").innerHTML += "<tr><td>".concat(arr[i].Name, "</td><td>").concat(arr[i].Qty, "</td> <td><button class=\"btn btn-primary\" onclick=\"remove(").concat(i, ")\">\u2212</button></td></tr>");
    }
    // for(let i in arr){
    // document.getElementById("tbl")!.innerHTML=``;
    //     var q=x;
    //     q--;
    //     arr.push({Name:arr[i].Name,Qty:q})
    //     document.getElementById("tbl")!.innerHTML +=`<tr><td>${arr[i].Name}</td><td>${q}</td> <td><button class="btn btn-primary" onclick="remove(${q})">−</button></td></tr>`
    // }
}
