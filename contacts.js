const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  const contacts = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(contacts);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  return contact || null;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  if (!contact) return null;
  const results = contacts.filter((contact) => contact.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(results, null, 2));
  return contact;
}

async function addContact(name, email, phone) {
  const newContact = { name, email, phone, id: nanoid() };
  const contacts = await listContacts();
  const newContacts = [...contacts, newContact];
  await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
  return newContact;
}
module.exports = { listContacts, getContactById, removeContact, addContact };
