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