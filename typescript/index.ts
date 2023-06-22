class MySqlDatabase {
  save(data: string): void {}
}

class HighLevelModule {
  constructor(private database: MySqlDatabase) {}

  execute(data: string) {
    this.database.save(data);
  }
}
