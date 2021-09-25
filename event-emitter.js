// Event Emitter (Ao emitir um evento o emitter o consumiu)
/*
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
});
emitter.emit('User logged', { user: 'Rafael Maciel' });
*/

//ou
/*
const EventEmitter = require('events');
class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}
const users = new Users();
users.on('User logged', data => {
    console.log(data);
});
users.userLogged({user: 'Rafael Maciel' });
*/


// ou, consumindo apenas 1 vez, o primeiro
/*
const EventEmitter = require('events');
class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}
const users = new Users();
users.once('User logged', data => {
    console.log(data);
});
users.userLogged({user: 'Rafael Maciel' });
users.userLogged({user: 'Maciel Rafael' });
*/

// ou, consumindo ambos users após 2 segundos

const EventEmitter = require('events');
class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
        this.emit('User logged', data);
        }, 2000);
    }
}
const users = new Users();
users.on('User logged', data => {
    console.log(data);
});
users.userLogged({user: 'Rafael Maciel' });
users.userLogged({user: 'Maciel Rafael' });
