const express = require("express");
const app = express();
app.use(express.json()); //Ability to parse json.

const persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  const totalContacts = persons.length;

  response.send(`<p> Phonebook has info for ${totalContacts} people. <br> ${new Date()}`);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
