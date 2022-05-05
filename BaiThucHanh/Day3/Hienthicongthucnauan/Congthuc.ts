let recipe = {

    "title" : "Suon xao chua ngot",
    "servings" : 2,
    "ingredients" : ["Suon","GiaVi","Nuoc","Noi"]



}
console.log("ten mon an" + recipe.title)
console.log("thanh phan" + recipe.servings)
console.log("Cong thuc")

for (let i = 0; i < recipe.ingredients.length; i++) {
            console.log(" "+ recipe.ingredients)
}