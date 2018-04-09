module.exports = class StoreLocationQueryBuilder {
    
    constructor() {
        this.sort = []; 
        this.filter = [];  
        this.like = [];
        this.offset = 0;   
        this.limit = 20;    
    }
     
    postCode(postCode) {
        this.sort.push(`near:"${postCode}"`);
        return this;
      }

      ukTown(town) {
        this.sort.push(`near:"${town}, UK"`);
        return this;
      }

      category(category) {
        this.filter.push(`category:${category}`)
        return this;
      }

      locationName(name) {
        this.like.push(`name:"${name}"`);
        return this;
      }
     
      build() {
        return {
          filter: this.filter.join(" AND ") || undefined,
          like: this.like.join(" AND ") || undefined,
          sort: this.sort.join(" AND ") || undefined,
          offset: this.offset,
          limit: this.limit
        };
      }
}
