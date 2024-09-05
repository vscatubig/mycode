let notes = []; // In-memory storage for notes

// API handler function
export default function handler(req, res) {
  const { method } = req; // Extract HTTP method
  const { id, text } = req.body || {}; // Extract data from request body

  switch (method) {
    case 'GET':
      res.status(200).json(notes); // Respond with all notes
      break;
    case 'POST':
      const newNote = { id: notes.length + 1, text }; // Create new note
      notes.push(newNote); // Add new note to notes array
      res.status(201).json(newNote); // Respond with the created note
      break;
    case 'PUT':
      notes = notes.map(note => note.id === id ? { id, text } : note); // Update note by id
      res.status(200).json({ id, text }); // Respond with the updated note
      break;
    case 'DELETE':
      notes = notes.filter(note => note.id !== id); // Remove note by id
      res.status(200).json({ message: `Note ${id} deleted` }); // Confirm deletion
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']); // Allowed methods
      res.status(405).end(`Method ${method} Not Allowed`); // Respond with 405 error
  }
}

