const users = [
    {username: 'andy', password: '1234'},
    {username: 'bobby', password: '3456'},
    {username: 'candy', password: '4567'}
];

let attempts = 3;

while (attempts > 0) {
    let inp1 = prompt('Enter username:');
    let inp2 = prompt('Enter password:');

    let user = users.find(u => u.username === inp1);

    if (user && user.password === inp2) {
        alert('Welcome');
        break;
    } else {
        alert('No access');
        attempts--;

        if (attempts > 0) {
            alert(`You have ${attempts} attempts left.`);
        } else {
            alert('No more attempts. Access denied.');
        }
    }
}
