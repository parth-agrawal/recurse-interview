export type DbService = {
  getPair: (key: string) => unknown;
  setPair: (key: string, value: unknown) => { key: string; value: unknown };
  getAll: () => Record<string, unknown>;
};

const dbService = (): DbService => {
  const db = Object.create(null);
  return {
    getPair: (key) => {
      return db[key];
    },
    setPair: (key, value) => {
      db[key] = value;
      return { key, value };
    },
    getAll: () => {
      return db;
    },
  };
};
export default dbService;
