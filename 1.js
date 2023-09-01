
//SideBar Menu

const   TheNav= document.querySelector('.sideBar');    //The Nav 

        // Maing Display hidden to make visible later on:
TheNav.style.width = "72px";
function ViewNAV() {
    // Function called when you click on 'Menu' DIV element
    if(TheNav.style.width === "72px"){
        TheNav.style.width = "140px";
    } else{
        TheNav.style.width = "72px";
    }
}




// Cancel btn

const closebtns = document.querySelectorAll('.CancelBtn');
var i;
for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function() {
      this.parentElement.style.display = 'none';
    });
  }






// Profile Menu

const   ProfBtn = document.querySelector('.ProfileMenuBtn'), // The BTN to view User's Profile menu
        ProfMenu= document.querySelector('.UsersMenu');     //  User's Profile menu

        // Maing Display hidden to make visible later on:
ProfMenu.style.display = "none";
function ViewMenu() {  
    // Function called when you click on 'Profile Picture' button element

    if(ProfMenu.style.display === "none"){
        ProfMenu.style.display = "";
    } else {
        ProfMenu.style.display = "none";
    }
    
}

//Prof View

const Profoption = document.querySelector('#Prof-option'),
      ProfView = document.querySelector('.Prof-Div');

        // Making Display none to make it visible later on
    ProfView.style.display = "none";

Profoption.onclick = () => {
    if(ProfView.style.display === "none"){
        ProfView.style.display = "";
        ProfMenu.style.display = "none";
    }
}

// Upload Option

const   SelectorELEM = document.querySelector('.SelType'), // drop-down menu of types
        Upl_Div = document.querySelector('.Upload-Part'),  // whole Upload Div
        Uploption = document.querySelector('#Upl-option');  // Profmenu > li = "Upload a Blog"

        // Maing Display hidden to make visible later on:
    Upl_Div.style.display = "none";

Uploption.onclick = () => {
    // Function called when you click on Option 'Upload a blog' form Profile Menu  button element
    if(Upl_Div.style.display === "none"){
        Upl_Div.style.display = "";
        ProfMenu.style.display = "none";
    }
}
