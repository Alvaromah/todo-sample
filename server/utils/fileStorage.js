import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, '../data/todos.json');

export const fileStorage = {
  async ensureDataFile() {
    try {
      await fs.access(path.dirname(DATA_FILE));
    } catch {
      await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    }

    try {
      await fs.access(DATA_FILE);
    } catch {
      await fs.writeFile(DATA_FILE, JSON.stringify({ todos: [], nextId: 1 }));
    }
  },

  async readData() {
    await this.ensureDataFile();
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
  },

  async writeData(data) {
    await this.ensureDataFile();
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
  }
};