// fetching data from an API in the asynchronous way we use the fetch() function
// the fetch() function has two parameters, i.e the API url and the options object and it returns an object
// using promises
let P = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");  // this is the fetched data and it returns a promise
// so we use the then and catch to reveal the outcome of the promise 
P.then((response) => {
    return response.json(); // convert the data retrieved from the APi to json type this means we can access this data using object formats.
}).then((data) =>{
    console.log(data.name); // output the data
}).catch((error) =>{
    console.log(error); // if there is any errors catch them and output them.
})
// so the fetch() function returns a promise so we can use the .then().catch() functions to get its outcomes either if the 
// promise is resolved or rejected 
// we have to first convert the data retrieved from the API to Json so that we can access it as an object with Key:Value pairs

// using async-await to retrieve the data got by the fetch function 
// first make an asynchronous function with a name like fetchData
async function fetchData(){ // the async keyword makes this function asynchronous and also to return a promise 
    try{
        // now we fetch the data from the API and store it in a constant variable
        const response  = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu"); // we use await since the programme returns a promise so it has to run after some time
        const data = await response.json(); // we convert our response to json file since we can access the data as an object in key:value pairs.
        // we use the await keyword since this programme also returns a promise we don't know when it will be completed
        console.log(data); // then we output the data 
    }
    catch(error){
        console.log(error); // we use the try and catch block to handle the errors when we use async-await to fetch the data from the APIS
    }
}
// calling the function 
fetchData(); // when we use async-await the code is cleaner than when we use a promise 
