arr = [];
let btn_add = document.getElementById("additem");
let btn_delete = document.getElementById("deleted");

function get_update(){
    let title = document.getElementById('title').value;
    let state = document.getElementById('state').value;
    let desc = document.getElementById('description').value;
    arr.push([title,state, desc]);
    update();
    updatepending();

   

}

function update(){
    
    str ='';
    arr.forEach((element,index) => {
        str = str +
        `<tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>${element[2]}</td>
        <td><button type="submit" class="btn btn-info btn-sm " onclick="deleted(${index})" >Delete</button></td>
        </tr>`;


        
    });
    document.getElementById("tableBody").innerHTML = str;
    

    

}
function updatepending(){
    
    str ='';
    arr.forEach((element,index) => {
        str = str +
        `<tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[2]}</td>
        <td></td>
        <td></td>
        <td><button type="submit" class="btn btn-info btn-sm " onclick="deleted(${index})">Delete</button></td>
        </tr>`;


        
    });
    document.getElementById("tablepending").innerHTML = str;
    

    

}

function deleted(item_index){
    arr.splice(item_index,1);
    console.log(arr);
    update();
    updatepending();

}

btn_add.addEventListener("click", () => {
    get_update();
    
});
