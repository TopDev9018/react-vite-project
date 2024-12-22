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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    console.log(req.body, 'fdsfs');
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const users = getUsers();

    // Find user by email
    const user = users.find((user: any) => user.email === email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    try {
      // Compare the hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password.' });
      }

      // On successful login, send a success message
      res.status(200).json({ message: 'Login successful', user: { name: user.name, email: user.email } });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
