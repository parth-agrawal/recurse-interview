const dbService = () => {
  const db = Object.create(null);
  return {
    getPair: (key: string) => {
      return db[key];
    },
    setPair: (key: string, value: unknown) => {
      db[key] = value;
      return { key, value };
    },
    getAll: () => {
      return db;
    },
  };
};
export default dbService;
export type DbService = ReturnType<typeof dbService>;
