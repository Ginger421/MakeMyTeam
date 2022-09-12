const Manager = require("../lib/manager")

describe("Manager", ()=> {
    describe("constructor", ()=> {
    it('should construct a name, an id, an email and office number', () => {
        const manager = new Manager("Val", 7, "test7@gmail.com", 1);
        const name = "Val";
        const id = 7;
        const email = "test7@gmail.com";
        const officeNumber = 1;
        expect(manager.name).toEqual("Val");
        expect(manager.id).toEqual(7);
        expect(manager.email).toEqual("test7@gmail.com");
        expect(manager.officeNumber).toEqual(1)
      });
    });
    
});
