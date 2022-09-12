const Employee = require("../lib/employee")

// "test": "echo \"Error: no test specified\" && exit 1" from pkjson

//make sure to creat a new Employee maybe using a const at top of file

describe("Employee", ()=> {
    describe("constructor", ()=> {
    it('should construct a name, id and email', () => {
        const employee = new Employee("Ginger", 9, "test@gmail.com");
        const name = "Ginger";
        const id = 9;
        const email = "test@gmail.com";
        expect(employee.name).toEqual("Ginger");
        expect(employee.id).toEqual(9);
        expect(employee.email).toEqual("test@gmail.com");
      });
    });
    
}) //ends describe "employee"
