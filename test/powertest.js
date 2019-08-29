const assert=require('chai').assert;
const pow=require('../utility/util');
const s1=new pow();


describe('Checking for empty',function(){
    it("The number should not be empty",function(){
        let result = s1.pow(-2);
        assert.equal(result,-1.5,);

        
        // assert.equal(-1.5 ,);
    });
    it("There should not be a string",function(){
        let result=s1.pow("Hey I am string")
       assert.equal("Enter a variable to calculate",result);
    })
});