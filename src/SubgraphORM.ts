import Factory from "./Factory";
class SubgraphORM {
  private query: String;
  private entity: Array<String>;
  private factory: Factory;

  constructor(entity: Array<String>) {
    this.entity = entity;
    this.factory = new Factory(this.entity);
    this.factory.createSkeleton();
  }

  

}

export default SubgraphORM;
