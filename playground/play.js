// const sq = x => x * x;

// console.log(sq(3));

const event = {
    name: 'past one',
    guestlist: ['mahmoud', 'amina'],
    list() {
        console.log(this.name);
        this.guestlist.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
            console.log(this);
        });
    }
};

event.list();