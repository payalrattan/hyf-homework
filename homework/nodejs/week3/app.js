import "dotenv/config";
import express from 'express';
import knexInstance from "./database.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
//Returns all contacts
app.get('/contacts', async (req, res) => {
    try {
        const [contacts] = await knexInstance.raw('SELECT * FROM contacts');
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//Returns contact by id
app.get('/contacts/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const [contact] = await knexInstance.raw('SELECT * FROM contacts WHERE id = ?', [id]);
        console.log(`Contact with ID ${id}:`, contact);
        if (contact.length === 0) {
            return res.status(404).json({ error: 'Contact not found' });
        }

        res.json(contact);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
//Adds a new contact
app.post('/contacts', async (req, res) => {
    try {
        const { id, first_name, last_name, email, phone } = req.body;
        if (!first_name || !last_name || !email || !phone) {
            return res.status(400).json({ error: 'first_name, last_name, email, and phone are required' });
        }
        if (id !== undefined) {
            // Check if the ID already exists
            const [existing] = await knexInstance.raw('SELECT * FROM contacts WHERE id = ?', [id]);
            if (existing.length > 0) {
                return res.status(409).json({ error: 'A contact with this ID already exists' });
            }
        }
        // Insert with or without id
        let result;
        if (id !== undefined) {
            [result] = await knexInstance.raw(
                'INSERT INTO contacts(id, first_name, last_name, email, phone) VALUES (?, ?, ?, ?, ?)',
                [id, first_name, last_name, email, phone]
            );
        } else {
            [result] = await knexInstance.raw(
                'INSERT INTO contacts(first_name, last_name, email, phone) VALUES (?, ?, ?, ?)',
                [first_name, last_name, email, phone]
            );
        }
        res.status(201).json({ message: 'Contact added successfully', contactId: result.insertId || id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update contact by id
app.put('/contacts/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { first_name, last_name, email, phone } = req.body;
        // Only update if at least one field is provided
        if (!first_name && !last_name && !email && !phone) {
            return res.status(400).json({ error: 'At least one field (first_name, last_name, email, phone) is required to update' });
        }
        // Build update object dynamically
        const updateFields = {};
        if (first_name) updateFields.first_name = first_name;
        if (last_name) updateFields.last_name = last_name;
        if (email) updateFields.email = email;
        if (phone) updateFields.phone = phone;

        const result = await knexInstance('contacts').where({ id }).update(updateFields);
        if (result === 0) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.json({ message: 'Contact updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete contact by id
app.delete('/contacts/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await knexInstance('contacts').where({ id }).del();
        if (result === 0) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.get('/api/contacts/firstname', async (req, res) => {
  try {
    const [contacts] = await knexInstance.raw("SELECT * FROM contacts ORDER BY first_name ASC");
    if (!contacts.length) {
      return res.status(404).json({ error: "There are no contacts." });
    }
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get('/api/contacts/lastname', async (req, res) => {
  try {
    const [contacts] = await knexInstance.raw("SELECT * FROM contacts ORDER BY last_name DESC");
    if (!contacts.length) {
      return res.status(404).json({ error: "There are no contacts." });
    }
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})