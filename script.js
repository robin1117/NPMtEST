import axios from 'axios' //after importing we need to set "type": "module" in the package.json
// after that we can execute script.js in our node.js and we can get data{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
// But the problem here arises --We are unable to use this AXIOS in browser BECAUSE Browser didn`t know about how to import axios from modules 

// Here Comes The Concept Of Bundeler https://chatgpt.com/c/aab449cf-4417-4473-926f-7bf802f5d16a
// We need to install parcel by 
// bundler is a tool that takes multiple JavaScript files and dependencies (like CSS, images, etc.) and combines them into one or more output files AND ATTACHED to our main HTML file(index.html) ---Parcel: is one of the bundler that we are gone use user ✅
// npx parcel index.html -- This lead to parcel start a new server at local host where pacel attaches new combined script to our index.html.
// [WE WILL DISCUSS IN DETAILS ABOUT PARCEL WHEN WE STUDIED REACT]


axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then((res)=>{
    console.log(res.data);
})
    // If we wana use AXIOS js Library,which helps us to fetch data in more convienent way-
    // 🔥WE CAN INSTALL AXIOS INTWO WAYS ? 

    // ✅> By linking CDN link in our HTML--->this way is not good at all beacuse this made all the variables of axios, available in global space (POLUTE GLOBAL SPACE) ,and the axios code placed over remote server and its not in our hand .there is no assurance that it will not change in the

    // ✅> Either another way we can get Npm version of AXIO, By using $ npm install axios
    // lets install AXIOS using npm when we execute--(🔥npm install axios)--There will be three things happen-
        // 1> first it updates package.json by adding Dependencies version of AXIOS to it
        // 2> second a new folder is generated called node_module which contains there are many other folder inside it , having too much other dependencies ,but why there other extra folder just get instrall certaily we need only axios,because our project is depend on axios ,and axios itself depend on other dependencies and thers may have other dependencies . and soo on 
        // 3> third another package-lock.json is also introduce.



 