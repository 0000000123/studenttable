// var body = document.getElementsByTagName("BODY");
// // console.log(body);
// function addValue() {
//   var para = document.createElement("P");
//   //   console.log(para);
//   var txt = "Hello world";
//   var paraText = document.createTextNode(txt);
//   para.appendChild(txt);
//   para.setAttribute("class", "para");
//   body[0].appendChild(para);
// }

// {
//     /* <p>asdasd</p> */
//   }
  // var para = document.getElementById("para");
  // function changeValue() {
  //   //   console.log();
  //   //   para.firstChild.nodeValue = "Pakistan";
  //   //   para.remove();
  // }
  
  // var firstName = "john";
  // var lastName = "Doe";
  // var age = 99;
  // var fatherName = "father";
  // var firstName1 = "www";
  // var lastName = "lll";
  
  var student1 = {
    firstName: "John",
    lastName: "doe",
    age: 99,
    id: Math.random(),
  };
  var student2 = {
    firstName: "king",
    lastName: "john",
    age: 0,
    id: Math.random(),
  };
  var student3 = {
    firstName: "luke",
    lastName: "arthur",
    age: 10,
    id: Math.random(),
  };
  var student4 = {
    firstName: "jojo",
    lastName: "dojo",
    age: 180,
    id: Math.random(),
  };
  var student5 = {
    firstName: "messi",
    lastName: "ronaldo",
    age: 110,
    id: Math.random(),
  };
  
  // console.log(student1.id);
  // console.log(student1["id"]);
  // student1.a();
  // var a = ["pakistan", "india"];
  // console.log(a[0]);
  var list = document.getElementById("list");
  var TS = document.getElementById("TS");
  var studentList = [student1, student2, student3, student4, student5];
  // console.log(studentList[0].firstName);
  // console.log(studentList[1].firstName);
  // console.log(studentList[2].firstName);
  
  function render() {
    TS.innerHTML = studentList.length;
    list.innerHTML = "";
  
    for (var i = 0; i < studentList.length; i++) {
      //   console.log(studentList[i].id);
      list.innerHTML += `<li class=''> S NO ${i + 1} FIRST NAME : ${
        studentList[i].firstName
      } Last Name : ${studentList[i].lastName} Age : ${studentList[i].age} ID : ${
        studentList[i].id
      } </li>`;
    }
  }
  function addStudent() {
    var a = inp.value;
    var b = inp2.value;
    var c = inp3.value;
    var obj = {
      firstName: a,
      lastName: b,
      age: c,
      id: Math.random(),
    };
    studentList.push(obj);
    render();
  }
  render();