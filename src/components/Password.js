function passwd(){

    const password = prompt('Enter the password to download the file:');
    if(password.toLowerCase() == "teacher"){
      window.open("../assets/pdfs/Kelvin_Lau_-_Web_Developer.pdf")    
    }else{
      alert("incorrect password!! please try again");
    }
    };

    export default passwd;