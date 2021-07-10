var prevData = "";
document.getElementById("btn").onclick = function(){

    console.log('test');

    var textVal1 = document.querySelector("#name").value;
    console.log(textVal1);

    reg_name1 = /^[a-zA-Z]([a-zA-Z ]+)?[a-zA-Z]$/;
    result1 = reg_name1.test(textVal1);

    var para1 = document.getElementById("message1");
        if(result1){
		    para1.innerHTML = "Valid ";

		 }
		 else{
		 	para1.innerHTML = "Invalid";
		 }

         para1.innerHTML = (result1)?"valid":"Invalid";

    var textVal2 = document.querySelector("#mobile").value;
    console.log(textVal2);

        reg_mob = /^[1-9][0-9]{9}$/;
		result2 = reg_mob.test(textVal2);
		
        var para2 = document.getElementById("message2");
        if(result2){
			var finalAns = "+91-" + textVal2;
			console.log(finalAns);
            para2.innerHTML = "Valid ";
			//console.log(typeof finalAns);

            document.getElementById("mobile").value = "+91 " + textVal2;
		}

        else{
            para2.innerHTML = "Invalid";
        }

        para2.innerHTML = (result2)?"valid":"Invalid";
    

    if(textVal1!="" && textVal2!="" && para1.innerHTML=="valid" && para2.innerHTML=="valid"){

        var tdTag1 = document.createElement("td");
        console.log(tdTag1,typeof tdTag1);

        var tdTag2 = document.createElement("td");
        console.log(tdTag2,typeof tdTag2);

        var objContent1 = document.createTextNode(textVal1);
        console.log(objContent1,typeof objContent1);

        var objContent2 = document.createTextNode(textVal2);
        console.log(objContent2,typeof objContent2);

        var newRow = document.createElement("tr");
        newRow.append(tdTag1);
        newRow.append(tdTag2);

        tdTag1.appendChild(objContent1);
        console.log(tdTag1);

        tdTag2.appendChild(objContent2);
        console.log(tdTag2);

        tdTag1.className="tdData1";
        tdTag2.className="tdData2";

        var removeBtn = document.createElement("button");
        console.log(removeBtn);

        var contentRemove = document.createTextNode("X");
        console.log(contentRemove);

        removeBtn.appendChild(contentRemove);
        console.log(removeBtn);

        removeBtn.addEventListener("click",function(){

            this.parentNode.parentNode.remove();
            prevData = this.parentNode.parentNode;
            

        })

        tdTag1.appendChild(removeBtn);
        tdTag2.appendChild(removeBtn);

        console.log(document.querySelector("tr"));
        document.getElementById("row").appendChild(newRow);
      //  document.getElementById("row").appendChild(newRow);

    }

    else{
        alert("record is empty");
    }





}