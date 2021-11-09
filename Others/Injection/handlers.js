module.exports.get = axios => async (req, res) => {
    const { data } = await axios.get('https://jsonplacerholder.typicode.com/users')
    res.send(data)
}