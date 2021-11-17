   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
     apiKey: "AIzaSyA1eIsNv6jgME94d8ptQT45JxCk2HswuyY",
     authDomain: "project-109e2.firebaseapp.com",
     databaseURL: "https://project-109e2.firebaseio.com",
     projectId: "project-109e2",
     storageBucket: "project-109e2.appspot.com",
     messagingSenderId: "994321863318",
     appId: "1:994321863318:web:10d3b180f8ff995d9ba8b7",
     measurementId: "G-Y83PD3D9Q5"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);

  import{getDatabase, ref, set, get, child, update, remove}
  from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";
  
  const db= getDatabase();
  
  var nameV, rollV, secV, genV;

  function Ready(){
      nameV= document.getElementById("namebox").value;
      rollV= document.getElementById("rollbox").value;
      secV= document.getElementById("secbox").value;
     genV= document.getElementById("genbox").value;
      
  }
  function InsertData(){
            Ready();
            alert("start")
            set(ref(db, 'student/'+rollV),{
                NameOfStudent: nameV,
                RollNo: rollV,
                section: secV,
                Gender: genV
            })
            .then(()=>{
              alert("stored")
            })
           .catch((error)=>{
             alert(error);
           })
  }
  document.getElementById("insert").addEventListener('click', InsertData);

  function SelectData(){
    Ready()
    const dbref=ref(db);
    get(child(dbref,"upload/")).then((snapshot)=>{
      if(snapshot.exists()){
        var arr = snapshot.val()
        var idx=0;
        var key= Object.keys(arr)[2]
       var value=arr[key]
         console.log(value["category"])
       
        
      }
    })

    .catch((error)=>{
      alert(error)
    })
  }

  document.getElementById("select").addEventListener('click', SelectData);
  function UpdateData(){
    Ready()
    update(ref(db, "student/"+rollV),{
      NameOfStudent: nameV,
      section: secV,
      Gender: genV
    })
    .then(()=>{
      alert("Updated")
    })
   .catch((error)=>{
     alert(error);
   });
  }
  document.getElementById("update").addEventListener('click', UpdateData);
  function RemoveData(){
    remove(ref(db, "student/"+rollV))
    .then(()=>{
      alert("Deleted")
    })
   .catch((error)=>{
     alert(error);
   });
  }
  document.getElementById("delete").addEventListener('click', RemoveData);