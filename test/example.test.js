// IMPORT MODULES under test here:
import { add } from '../utils.js';

// using a test library
const test = QUnit.test;

test('add should take in 5 and 3 and return 8', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(5, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('add should take in 23 and -10 and return 13', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(23, -10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('add should take in 100 and 0 return 100', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 100;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(100, 0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('add should take in "5" and 3 return 8', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add('5', 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});