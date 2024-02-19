# 6 Feb

## Array Type

1. Nothing

## Any Type

1. Json.parse return any type
2. fetch request return any type
3. Don't use any it shuts down all the benefits of typescript

## Object Type

1. Here how we give types to object
   ![alt text](image.png)
2. How to add optional properties inside the object
   ![alt text](image-1.png)

## Types vs interfaces

1. We can give the reusable type 'Type' like this
   ![alt text](image-2.png)
2. Interface can only be used with objects
3. Here how we can define the interfaces
   ![alt text](image-3.png)

## Defining Functions

1. If we pass directly an object with extra properties then typescript will throw an error however if you pass it like this(attached) then typescript will not throw error because typescript care about structure only.
   ![alt text](image-4.png)

## Destructured and Rest Parameters

1. Here we can destructured the properties from the functions
   ![alt text](image-5.png)

2. Final output
   ![alt text](image-6.png)

3. Here how we used rest operator
   ![alt text](image-7.png)

## Typing Variables as function

1. This is how we defined function type when passed as arguments
   ![alt text](image-8.png)

# 7 Feb

## Unions

1. Here how can we define the unions
   ![alt text](image-9.png)
2. Some more example using unions
   ![alt text](image-10.png)

## Intersections

1. This is how we do intersections
   ![alt text](image-11.png)
2. This is how we do intersections with types
   ![alt text](image-12.png)

# 8 Feb

## Read Only

1. Here how we use read only on simple properties
   ![alt text](image-13.png)
2. This is how we can define read only on array
   ![alt text](image-14.png)

## KeyOF

1. This is how we use key of operator
   ![alt text](image-15.png)

## TypeOF

1. This is how we use typeof operator
   ![alt text](image-16.png)
2. People type will be dependent on person type

## Index type

1. This is initial code
   ![alt text](image-17.png)
2. We are duplicating the skill level in mutliple places.
3. We can extract out Skill level in new type but we can handle it differently.
4. Here is the way we can solve this
   ![alt text](image-18.png)
5. Here is another example
   ![alt text](image-19.png)

6. Here is another example. in this example we map over each element and return the type of element.
   ![alt text](image-20.png)

7. Here is another example
   ![alt text](image-21.png)

## As const and enums

1. Here we can use as const
   ![alt text](image-22.png)

## Tuples

1. This is how we define tuple
   ![alt text](image-23.png)

# 10 Feb

## Generics

1. document.querySelector returns a general element, to select the input element we have to provide type in angle brackets
   ![alt text](image-24.png)
2. Initial code example, problem is what happen if there is another array of boolean
   ![alt text](image-25.png)

3. To fix the above problem we can use it like this
   ![alt text](image-26.png)

4. Map Example
   ![alt text](image-27.png)

5. API response example
   ![alt text](image-28.png)

6. We can add blog data in our above example
   ![alt text](image-29.png)

7. Passing default values to generics
   ![alt text](image-30.png)

8. If we want to enforce generic types to an object
   ![alt text](image-31.png)

9. When we write `Tdata extends string or Tdata extends array` that means it should be a string or it should be array only
10. Write a function arrayto object in typescript

11. Solution
    ![alt text](image-32.png)

## Async Functions

1. Return type asynchronous function will always be a promise
   ![alt text](image-33.png)

2. Another example
   ![alt text](image-34.png)

## Pick and Omit

1. Omit example
   ![alt text](image-35.png)
2. Pick example
   ![alt text](image-36.png)

## Partial and Required

1. Partial makes all the fields optional
   ![alt text](image-37.png)

2. Required will make the fields as required
   ![alt text](image-38.png)

3. Required doesn't do deep nesting
   ![alt text](image-39.png)

4. In the below code, we are making the only the title as required property
   ![alt text](image-40.png)

5. We can reuse the required and partial like this
   ![alt text](image-41.png)

## Return types and parameters

1. Initial Code
   ![alt text](image-42.png)

2. They are both just to check parameters type and return type of a function
   ![alt text](image-43.png)

# 12 Feb

## Record

1. Initial code
   ![alt text](image-44.png)
2. We can use Record type to achieve the same results
   ![alt text](image-45.png)

## Read only

1. This is very similar to as const but we can use as const in javascript not in typescript
   ![alt text](image-46.png)

2. Read only is used when you want to create a new type from other type as read only
   ![alt text](image-47.png)

# 13 Feb

## Awaited

1. We can use this syntax like this. Awaited syntax just remove the promise.
   ![alt text](image-48.png)

2. More example
   ![alt text](image-49.png)

## Basic Type Guards

1. Initial code
   ![alt text](image-50.png)
2. Basic type guard example
   ![alt text](image-51.png)
3. We can also use instance of operator
   ![alt text](image-52.png)
4. we can use ?. operator if a type is undefined
5. If we know that form element will always be present then we can use ! operator like this
   ![alt text](image-53.png)
6. we can switch statement also
   ![alt text](image-54.png)

# 16 Feb

## Unknown type

1. Using unknown typescript will throw error so we need to narrow it down to check the type
   ![alt text](image-55.png)
