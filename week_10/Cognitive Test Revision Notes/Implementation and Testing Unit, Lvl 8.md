# Revision topics for the Implementation and Testing Unit, Level 8, part 1

## Outcome 1: Describe programming and testing methods.

```
1.1 - Describe structured programming constructs
```

Be able to describe programming constructs: 

- Expression
- Sequence
- Selection
- Iteration 
- Predefined function
- File handling

#### **Reference material**

- [Expression](http://bit.ly/1K4xIrC)
- [Demonstration of a Sequence, Selection and Iteration.](https://prezi.com/tvoflvm-1xf_/p3-explain-sequence-selection-and-iteration-as-used-in-computing/)
- [Predefined Functions Blog article.](http://proceduralprogrammingblog.weebly.com/procedural-programming-blog/predefined-functions)
- [Fundamentals of Programming: File handling ](https://en.wikibooks.org/wiki/A-level_Computing_2009/AQA/Problem_Solving,_Programming,_Data_Representation_and_Practical_Exercise/Fundamentals_of_Programming/File_handling)

```
1.2 - Describe simple data types, data structures and algorithms
```
Data types: String, integer, float, boolean  

Data structures: List, Dictionary, etc

#### **Reference material**

- Classnotes: Week 1, Day 2: 
  - Python Data Types
  - Python Lists
  - Python Dictionaries

- Classnotes: Week 6, Day 1: 
  - Data Types in JavaScript
  - Arrays and Objects

- [Datatypes in programming languages](http://study.com/academy/lesson/data-types-in-programming-numbers-strings-and-others.html)
- [Datatypes in Python](https://www.tutorialspoint.com/python/python_variable_types.htm)


```
Simple algorithms: such as algorithms for linear search, input validation, find maximum, find minimum, and count occurrences.
```

#### **Reference material**

- [Algorithms shown in Khan's Academy.](https://www.khanacademy.org/computing/computer-science/algorithms)

### Algorithm question exemplar

The algorithm questions will present some lines of Javascript code and ask you to answer the following:  “State the purpose of this algorithm, describe what it does and what will be returned when it is run”. 

```js
function bubble(array) {
  while (true) {
    let swapped = false;

    for (let i = 0; i < array.length - 1; i ++) {
      if (array[i] > array[i + 1]) {
        const temporary = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temporary;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}

bubble([1,5,2,8,4,6]);
```
As you can see there are 3 parts to the question: the purpose, what it does and what it returns. Be careful to ensure you answer each part of the question.

#### ***State the purpose of this algorithm***:
This is a bubble sort algorithm that will put the items of an array into ascending order.

#### ***Describe what it does***:
The bubble function takes in an array.  The length of the array is assigned to the variable ‘n’, in this case ‘6’.

In the loop the variable ‘swapped’ is set to false.  There is then another loop that runs five times (the length of the array -1) with a counter variable ‘i’ to go through the items of the array.  

If the item in the first position of the array is greater than the item in the next position then they are swapped and the swapped variable is set to true. This keeps looping for each number, moving it up until it isn’t swapped.  The loop then repeats with the next item of the array.

#### ***What will be returned when it is run***:
The array returned will be [1,2,4,5,6,8]

# Revision topics for the Implementation and Testing Unit, Level 8, part 2

```
1.3 - Describe basic software testing methods

Software testing methods: Static testing, Dynamic testing, White box testing, Black box testing
```

#### **Reference material**

- [Static testing](http://whatis.techtarget.com/definition/static-testing)
- [Dynamic testing](http://whatis.techtarget.com/definition/dynamic-testing)
- [Black box vs White box testing.](http://technologyconversations.com/2013/12/11/black-box-vs-white-box-testing/)

```
Software testing levels: unit testing, integration testing, component testing, system testing
```
#### **Reference material**

- [Software Testing Levels](http://softwaretestingfundamentals.com/software-testing-levels/)
- [What Is Component Testing](https://sqa.stackexchange.com/questions/12630/what-is-component-testing-and-how-to-write-component-test-cases) - the top Answer gives great definition.
- [Testing and documenting solutions](https://www.bbc.co.uk/bitesize/guides/zg4j7ty/revision/1) covers: Test data and Types of errors. (Click the link and cover the information provided on the 5 pages).
- [Good practices in programming](https://www.educative.io/blog/coding-best-practices) covers meaningful identifiers, indentation, providing internal commentary.

```
1.4 - Describe contemporary programming paradigms

Procedural programming & Object-orientated programming
```
#### **Reference material**

- [OOP vs PP](http://study.com/academy/lesson/object-oriented-programming-vs-procedural-programming.html) ( NOTE: you don’t need to sign up for this site. The section of video that is viewable is sufficient for the assessment)
- [Event-driven programming](http://www.ask.com/technology/event-driven-programming-5a6e99edd7b883f2)