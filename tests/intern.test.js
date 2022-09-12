const Intern = require("../lib/intern")

describe("Intern", ()=> {
    describe("constructor", ()=> {
    it('should construct a name, an id, an email and school', () => {
        const intern = new Intern("Stephanie", 2, "test2@gmail.com", "University of Denver");
        expect(intern.name).toEqual("Stephanie");
        expect(intern.id).toEqual(2);
        expect(intern.email).toEqual("test2@gmail.com");
        expect(intern.school).toEqual("University of Denver")
      });
    });
    
});
