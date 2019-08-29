const assert=require('chai').assert;
const dayOfWeek=require('../utility/util');
const s2=new dayOfWeek();

describe('Checking days of week',function(){
    it('The variable should not be empty',function(){
        let result=s2.dayOfWeek(8,27,2019);
        assert.equal('The variable should not be empty',result,2);
    });
    it('The variable should not be a string',function(){
        let result=s2.dayOfWeek(8,27,2019);
        assert.equal('Dont enter string',result,2);
    });
    it('The answer should not be more than 6',function(){
        let result=s2.dayOfWeek(8,27,2019);
        assert.equal('Enter correct values',result,2);
    });

    });
