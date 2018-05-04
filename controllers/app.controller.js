module.exports = {
    // A func that takes in two parameters `req` and `res` [request, response]
    getIndexPage : (req, res) => {
        console.log('run the getIndexPage function')
        res.send("Hey");
    }
}
