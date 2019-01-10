const urls =[
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/comments'
];
//promise ES 5
Promise.all(urls.map(url => {
    return fetch(url).then(resp =>resp.json())
})).then(result=>{
    console.log(result[0])
    console.log(result[0])
    console.log(result[0])
}).catch(()=>console.log('error'))

//ASYNC AWAIT ES 8
 //---promise--
fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(console.log)

//convert above promise into ASYNC AWAIT 
async function fetchUsers(){
  const resp = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await resp.json();
  console.log(data);
}

//all url
const getData = async function(){ 
    try{
        const [users, posts, albums] = await Promise.all(urls.map(url => //ES 6 Destructor
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums',albums)
    }catch(err){
        console.log('oops',err)
    }
    
}
