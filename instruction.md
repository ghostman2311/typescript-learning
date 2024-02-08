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
