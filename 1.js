const   TheNav= document.querySelector('.NavMenu'),    //The Nav 
        Menu  = document.querySelector('.menu');      // The Menu Btn for Nav


TheNav.style.display = "none";
function ViewNAV() {
    // Function called when you click on 'Menu' DIV element
    if(TheNav.style.display === "none"){
        TheNav.style.display = "";
    } else {
        TheNav.style.display = "none";
    }
}



const   ProfBtn = document.querySelector('.ProfileMenuBtn'), // The BTN to view User's Profile menu
        ProfMenu= document.querySelector('.UsersMenu');     //  User's Profile menu

        
ProfMenu.style.display = "none";
function ViewMenu() {  
    // Function called when you click on 'Profile Picture' button element

    if(ProfMenu.style.display === "none"){
        ProfMenu.style.display = "";
    } else {
        ProfMenu.style.display = "none";
    }
    
}