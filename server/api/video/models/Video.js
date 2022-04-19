module.exports = {
  lifecycles: {
    // Called before an entry is created
    beforeCreate(data) {
        console.log(data)
    },
    // Called after an entry is created
    afterCreate(result) {
        console.log(result)
    },
  },
};
