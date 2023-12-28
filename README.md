# CLEAR THE FRIDGE!

# CREATED BY: 
            Steven M.
            Zaquari A.
            Katie N.

This app will help keep your fridge organized and updated by keeping track of inventory. It allows the user to clear bad food out once its expired, keep track of expiration dates, search for items in your inventory, and add new groceries. 

FIGMA LINK : "https://www.figma.com/file/9ScI1YBCbWa6w76NyHkcbz/Untitled?type=whiteboard&node-id=0-1&t=5e1E7s8pnLvVWf5g-0"

GITHUB REPO: "https://github.com/knowicki024/phase-2-project"

TRELLO BOARD: "https://trello.com/b/vJ4rF7eM/phase-2-project"

# COMPONENTS

    App component --GP
    Header -- P 
    New Food Form component --P
    Page component --P 
    Search component --CH
    Food List component --CH/P
    Food Item component --GC

# GROCERY INDEX
    name 
    image -- EMOJI? 
    experation/make date -- good to use / need to use / BAD 
    category 

# REACT ROUTERS 

    Home Page  --- (rootRoute)
    Food Add Form --- /food/:id/add 
    food list --- /food
    food detail --- /food/:id

# DB.JSON EXAMPLE 
```{
    "Groceries" : [
        {
            "id": "",
            "name": "",
            "category": "",
            "image" : "",
            "purchase_date": "",
            "spoiled" : "true or false", 
            "description": ""

        }
    ]
}``` 




CRUD COMPONENTS

    GET request to API of groceries 
        Render fridge componenets 

    POST grocery haul (add new groceries)

    PATCH -- edit a note for grocery. 
            

    DELETE if groceries are bad/expired 

    CRUD is the user 

    Create -- new groceries 
    Read -- read grocery items
    Update -- Edit grocery description 
    Delete -- Delete is spoiled 


STRETCH

    CSS

    create countdown timer

    hover tag with catagory of food. 

    if expired- changes to stinky face 

    create recipe or suggest recipe ?? 

    auto delete setting 

    About to go bad/ Should you eat this? ALERT 