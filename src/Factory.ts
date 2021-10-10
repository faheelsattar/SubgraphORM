import { Placeholders } from "./@types/Placeholders";
class Factory {
  private query: String;
  private entity: Array<String>;

  constructor(entity: Array<String>) {
    this.entity = entity;
    this.query = ``;
  }

  createSkeleton() {
    const entityLength = this.entity.length;
    const { ATTRIBUTES, ENTITY, FILTER } = Placeholders;
    for (let i = 0; i < entityLength; i++) {
      this.query += `
            ${ENTITY}(${FILTER},${FILTER},${FILTER},${FILTER}){
                ${ATTRIBUTES}
            }
            \n
           `;
    }
  }
}

export default Factory;
