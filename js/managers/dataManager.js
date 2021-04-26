class DataManager {
  constructor(appManager) {
    this.appManager = appManager;
    this.bees = [];
  }
  getBeeById(id) {
    for (let i = 0; i < this.beeModel.length; i++) {
      const bee = this.beeModel[i];
      if (bee.id === id) {
        return bee;
      }
    }
    return null;
  }
}
