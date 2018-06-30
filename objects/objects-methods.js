let restaurant = {
    name: 'Catus Cantina',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        //console.log(partySize); testing method
        //console.log(this)  this gives method a means to access its properties. 
        let seatsleft = this.guestCapacity - this.guestCount;   

        return partySize <= seatsleft;
    },
    seatParty: function(partySize){
        this.guestCount = this.guestCount + partySize;
    },
    removeParty: function(partySize){
        this.guestCount = this.guestCount - partySize;
    }
}

//let status = restaurant.checkAvailability(4);
restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));