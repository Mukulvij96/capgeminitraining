const assert=require('chai').assert;
const har=require('../utility/util');
const s=new har();


describe('Checking for empty',function(){
    it("The number should not be empty",function(){
        let result = s.har(-2);
        assert.equal(result,-1.5,);

        
        // assert.equal(-1.5 ,);
    });
    it("There should not be a string",function(){
        let result=s.har("Hey I am string")
       assert.equal("Enter a variable to calculate Harmonic Mean",result);
    })
});