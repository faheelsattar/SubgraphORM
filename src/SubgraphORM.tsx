class SubgraphORM {
  private readonly query: String;
  constructor() {}
  //dependecy injection
  createQuery(): String {
    return this.query;
  }
}

export default SubgraphORM;
