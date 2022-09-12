const Engineer = require("../lib/engineer")

describe("Engineer", ()=> {
    describe("constructor", ()=> {
    it('should construct a name, an id, an email and gitHub', () => {
        const engineer = new Engineer("Emily", 3, "test1@gmail.com", "test@github.com");
        const name = "Emily";
        const id = 3;
        const email = "test1@gmail.com";
        const gitHub = "test@github.com"; 
        expect(engineer.name).toEqual("Emily");
        expect(engineer.id).toEqual(3);
        expect(engineer.email).toEqual("test1@gmail.com");
        expect(engineer.github).toEqual("test@github.com");
      });
    });
    
});
