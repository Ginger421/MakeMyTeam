const Employee = require("../lib/employee")

//make sure to creat a new Employee maybe using a const at top of file

describe("Employee", ()=> {
    describe("constructor", ()=> {
    it('should construct a name, id and email', () => {
        const employee=newEmployee("Ginger", 9, "test@gmail.com");
        expect(employee.name).toEqual("Ginger");
        expect(employee.id).toEqual(9);
        expect(employee.email).toEqual("test@gmail.com");
      });
    });
    
}) //ends describe "employee"
