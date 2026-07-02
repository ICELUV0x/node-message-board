const { Router } = require('express');
const mainRouter =  Router();


const messages = [
  {
    text: "Hi there!",
    user: "Michael",
    added: new Date()
  },
  {
    text: "Wassssaaaaapppp!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Charles u owe me 15$",
    user: "Nikita",
    added: new Date()
  },
  {
    text: "Bad internet guys, sorry",
    user: "Charles",
    added: new Date()
  },
   {
    text: "Yeah, of course",
    user: "Nikita",
    added: new Date()
  },
  
];

mainRouter.get('/', (req, res) => {
    res.render('index', {messages: messages});
})

mainRouter.post('/new', (req, res) => {
    messages.push({text: req.body.text, user: req.body.user, added: new Date()})
    res.redirect('/')
})

mainRouter.get('/messages/:id', (req, res) => {
    const message = messages[req.params.id];
    res.render('message-detail',{message, id: req.params.id});
})



module.exports = mainRouter;