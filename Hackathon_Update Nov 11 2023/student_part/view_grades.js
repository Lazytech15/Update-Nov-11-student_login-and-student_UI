
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDFWV4k9-XmABgNGmleyXLTcuEn41rMHK8",
    authDomain: "hackathon-26f12.firebaseapp.com",
    databaseURL: "https://hackathon-26f12-default-rtdb.firebaseio.com",
    projectId: "hackathon-26f12",
    storageBucket: "hackathon-26f12.appspot.com",
    messagingSenderId: "1071789540560",
    appId: "1:1071789540560:web:6227da20f3a3a3a9ab0ad5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  import {
    getFirestore, doc, getDoc, collection, addDoc, setDoc, updateDoc, deleteDoc, deleteField
  }
  from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
  
  //SUBJECT01 getting the value of table data row 1
  var fsub = document.getElementById("sub1");
  var fsub_cd =document.getElementById("cd1");
  var pr1 = document.getElementById("pr1");
  var md1 =document.getElementById("md1");
  var fn1 = document.getElementById("fn1");
  var section =document.getElementById("section1");
  var fn = document.getElementById("fn1");
  var cu = document.getElementById("cu1");
  
  //SUBJECT02 getting the value of table data row 2
  var fsub2 = document.getElementById("sub2");
  var fsub_cd2 =document.getElementById("cd2");
  var pr2 = document.getElementById("pr2");
  var md2 =document.getElementById("md2");
  var fn2 = document.getElementById("fn2");
  var section2 =document.getElementById("section2");
  var fn2 = document.getElementById("fn2");
  var cu2 =document.getElementById("cu2");
  

  const db = getFirestore();

//checking if there is an error in the program
  try
  {

  //getting/verifying the data from firestore using the file path from the data collect in log-in form "Global Variable".
    async function subject01(){
        var ref = doc(db, "CLASS_RECORD", localStorage.getItem('section'), localStorage.getItem('student_id') , localStorage.getItem('sub1') + localStorage.getItem('student_id'));
        const docsnap = await getDoc(ref);

        if(docsnap.exists()){
          //assigning value from firestore to table data
            fsub.innerHTML = docsnap.data().COURSE_CODE;
            fsub_cd.innerHTML=docsnap.data().COURSE_DESCRIPTION;
            pr1.innerHTML = docsnap.data().PRELIM;
            md1.innerHTML=docsnap.data().MIDTERM;
            fn1.innerHTML = docsnap.data().FINALS;
            section.innerHTML=docsnap.data().SECTION;
            fn.innerHTML = docsnap.data().FACULTY_NAME;
            cu.innerHTML=docsnap.data().CREDIT_UNITS; 
          }
      }
    //getting/verifying the data from firestore using the file path from the data collect in log-in form "Global Variable".
      async function subject02(){
        var ref = doc(db, "CLASS_RECORD", localStorage.getItem('section'), localStorage.getItem('student_id') , localStorage.getItem('sub2') + localStorage.getItem('student_id'));
        const docsnap = await getDoc(ref);
        if(docsnap.exists()){  
        //assigning value from firestore to table data
            fsub2.innerHTML = docsnap.data().COURSE_CODE;
            fsub_cd2.innerHTML=docsnap.data().COURSE_DESCRIPTION;
            pr2.innerHTML = docsnap.data().PRELIM;
            md2.innerHTML=docsnap.data().MIDTERM;
            fn2.innerHTML = docsnap.data().FINALS;
            section2.innerHTML=docsnap.data().SECTION;
            fn2.innerHTML = docsnap.data().FACULTY_NAME;
            cu2.innerHTML=docsnap.data().CREDIT_UNITS;
          }
      }
      
   
      
      //autoload the function without human interference
        window.onload=function(){
        //calling function
          subject02();
          subject01();
        }
        
      }
      catch(Error){
        console.log(Error);
      }
       