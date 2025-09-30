const printMessage =(msg)=>{
    console.log(msg);
}
const wait = (msg,sec)=>{
    setTimeout(()=>{
        printMessage(msg);
    },sec);
}


const bookTicket=()=>{
    printMessage("Welcome");
    wait("Login Sucessfully",3000);
    wait("seat has been selected sucessfully",4000);
    wait("your seat has been booked",3000);
    wait("Payment has been done",4000);
    wait("Ticket has been confirmed",3000);
}






