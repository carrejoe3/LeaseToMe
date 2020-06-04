module.export = {
  register () {
    app.post('/register', (req, res) => {
      res.send({
        message: 'This is working :o'
      })
    })
  }
}