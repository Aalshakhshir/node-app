
const dummyUser = {
    id: '1',
    username: "abood",
    firstname: 'Abdelrahman',
    lastname: 'AlShakhshir',
    created_date: '2020/07/29'
}
function getUsers(req, res) {
     res.json([dummyUser])
}

module.exports = {
    getUsers,
}