


const fakeDb=[
    {
        name:"Ekrem Hak",
         age:20,
         pictureUrl:"https://media.istockphoto.com/photos/portrait-of-a-handsome-black-man-picture-id1289461335?b=1&k=20&m=1289461335&s=170667a&w=0&h=7L30Sh0R-0JXjgqFnxupL9msH5idzcz0xZUAMB9hY_k="
    },
    {
        name:"Amy Don",
        age:28,
        pictureUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
        name:"Emmanuel Emenike",
        age:35,
        pictureUrl:"https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        name:"Deneme İsim",
        age:19,
        pictureUrl:"https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        name:"Craig McKay",
        age:42,
        pictureUrl:"https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    }
]



export const PersonReducer=(state="",action)=>{

    switch (action) {
        case "list":
            let list=[
                {
                    name:"Ekrem Hak",
                     age:20,
                     pictureUrl:"https://media.istockphoto.com/photos/portrait-of-a-handsome-black-man-picture-id1289461335?b=1&k=20&m=1289461335&s=170667a&w=0&h=7L30Sh0R-0JXjgqFnxupL9msH5idzcz0xZUAMB9hY_k="
                },
                {
                    name:"Amy Don",
                    age:28,
                    pictureUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                },
                {
                    name:"Emmanuel Emenike",
                    age:35,
                    pictureUrl:"https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                },
                {
                    name:"Deneme İsim",
                    age:19,
                    pictureUrl:"https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                },
                {
                    name:"Craig McKay",
                    age:42,
                    pictureUrl:"https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                }
            ]
            return fakeDb;
            
    
        default:
            break;
    }


}