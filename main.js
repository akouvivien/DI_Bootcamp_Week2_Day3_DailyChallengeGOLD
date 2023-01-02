// Daily Challenge GOLD: Bubble Sort
// Instructions
// const numbers = [5,0,9,1,7,4,2,6,3,8];
const numbers = [5,0,9,1,7,4,2,6,3,8];
// Using the .toString() method convert the array to a string.
numbers.toString
// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
numbers.join(" ")

// Bonus : To do this Bonus look up how to work with nested for loops

// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
const numbers = [5,0,9,1,7,4,2,6,3,8];
for (let i = 0; i < numbers.length; i++) {
    let temp =0//initialisation de la valeur temporraire

    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] < numbers[j+1]) { //comparaison de l'element de l'index j à l'element de l'index j+1
            temp=numbers[j]   //temp recoit la valeur a l'indice J du tableau
            numbers[j]= numbers[j+1] // la valeur a l'indice J du tableau est remplacer par la suivante plus grande
            numbers[j+1] = temp   // numbres [j+1] recoit le plus petit element 
                
        }
    }  
}  
  console.log(numbers) // affiche le contenu