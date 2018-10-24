(function () {
        //Part 1: Create hotel object and write out the offer details

        //Create a hotel object using object literal syntax
        let hotel = {
            name: "Park",
            roomRate: 240, //Amount in dollars
            discount: 15, //Percentage discount
            offerPrice: function () {
                let offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }

    //Write out the hotel name, standard rate, and special rate
    let hotelName, roomRate, specialRate; //Declare variables

    hotelName = document.getElementById('hotelName'); //get elements
    roomRate = document.getElementById("roomRate"); 
    specialRate = document.getElementById("specialRate");

    hotelName.textContent = hotel.name; //Write hotel name
    roomRate.textContent = "$" + hotel.roomRate.toFixed(2); //Write room rate
    specialRate.textContent = "$" + hotel.offerPrice();


    //PART TWO: calculate and write out the expiry details for the offer

    let expiryMSG; //Message displayed to users
    let today; //Today's date
    let elEnds; //The element that shows the message about the offer ending

    function offerExpires(today) {
        //Declare variables within the function for local scope
        let weekFromToday, day, date, month, year, dayNames, monthNames;
        //Add 7 days time (in milliseconds)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        //Create arrays to hold the names of days / months
        dayNames = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];
        monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
        //Collect the parts of the date to show on the page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();
        //Create the message
        expiryMSG = "Offer expires next ";
        expiryMSG += day + " <br /> (" + date + " " + month + " " +year + ")";
        return expiryMSG;
    }
    today = new Date();                             //Put todays date in varible
    elEnds = document.getElementById("offerEnds");  //Get the offerEnds element
    elEnds.innerHTML = offerExpires(today);         //Add the expiry message
//Finish the immediately invoked function expression
}());