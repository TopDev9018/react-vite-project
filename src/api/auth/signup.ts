import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';

const usersFile = path.join(process.cwd(), 'users.json');

// Helper to get users from the file
function getUsers() {
  if (!fs.existsSync(usersFile)) {
    return [];
  }
  const usersData = fs.readFileSync(usersFile, 'utf-8');
  return JSON.parse(usersData);
}

// Helper to save users to the file
function saveUsers(users: any[]) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const users = getUsers();

    // Check if the user already exists
    const existingUser = users.find((user: any) => user.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    try {
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user object
      const newUser = { email, password: hashedPassword, name };

      // Add the new user to the users array
      users.push(newUser);

      // Save updated users to the file
      saveUsers(users);

      // Respond with success
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
