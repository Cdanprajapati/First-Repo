const tags = [
    // {
    //     title: "work",
    //     id: 1
    // },
    // {
    //     title: "study",
    //     id: 2
    // },
    {
        title: "family",
        id: 3
    }
]


const allTodos = [
    {
        title:'fffffffff',
        desc: 'ffgfgdrdrtt',
        tags: [
            {
                title: "work",
                id: 1
            },
        ]
    },
    {
        title:'ffffffffferweefdxf',
        desc: 'ffgfgdrdrttbfgtyft  tyfty',
        tags: [
            {
                title: "study",
                id: 2
            },
            {
                title: "family",
                id: 3
            }
        ]
    },
    {
        title:'fffffffff66666666666666666',
        desc: 'ffgfgdrdrtt hgfffffffffy5t65',
        tags: [
            {
                title: "work",
                id: 1
            },
            {
                title: "study",
                id: 2
            },
            {
                title: "family",
                id: 3
            }
        ]
    }
]

const filterData = allTodos.filter(todo => {
    let filterTags = todo.tags.filter(todoTag => {
        let findTag = tags.find(tag => {
            if(todoTag.title === tag.title && todoTag.id === tag.id)
                return tag
        })
        return findTag
    })
    if(filterTags.length > 0)
        return todo
})


console.log('filterData', filterData)

// function containsAny(source,target)
// {
//     var result = source.filter(function(item){ return target.indexOf(item) > -1});   
//     return (result.length > 0);  
// }    


//results

// var fruits = ["apple","banana","orange"];


// console.log(containsAny(fruits,["apple","grape"]));

// console.log(containsAny(fruits,["apple","banana","pineapple"]));

// console.log(containsAny(fruits,["grape", "pineapple"]));
