const mongoose = require('mongoose')
const url = 'mongodb://localhost/blogTestDb'
const Post = require('./model/post')

module.exports = {
   addPostsIfDbEmpty: () => {
     mongoose.connect(url)
     // Get Mongoose to use the global promise library
     mongoose.Promise = global.Promise
     //Get the default connection
     const db = mongoose.connection,
     currentDate = new Date().toLocaleString();

     db.once('open', function() {
       console.log('connected to DB!')

     const newPostsArr = [{ title : 'Localstorage',
                             description : '<p><br/><br/><!--StartFragment--></p><p style="font-size: medium;"><span class="seoSummary">The read-only <code style="background-color: rgba(220, 220, 220, 0.5);">localStorage</code> property allows you to access a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Storage" title="The Storage interface of the Web Storage API provides access to the session storage or local storage for a particular domain, allowing you to for example add, modify or delete stored data items."><code style="background-color: rgba(220, 220, 220, 0.5);">Storage</code></a> object for the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document" title="The Document interface represents any web page loaded in the browser and serves as an entry point into the web page\'s content, which is the DOM tree."><code style="background-color: rgba(220, 220, 220, 0.5);">Document</code></a>\'s origin.',
                             tags: ['tech', 'science', 'travel', 'fashion', 'finance', 'business', 'IT'],
                             date: currentDate
                             },
                             { title : 'Fashion & Travel post',
                               description : 'Fashion and travel',
                               tags: ['travel', 'fashion'],
                               date: currentDate
                             },
                             { title : 'Tech & Science post',
                               description : 'Tech and science',
                               tags: ['tech', 'science'],
                               date: currentDate
                             }
       ]
         //add first posts if posts db is empty
         Post.find(function (err, post) {
           if (err) return console.error(err);
           if(post.length===0){
             for (let item of newPostsArr) {
               let newPost = new Post(item)
               newPost.save(function (err, post) {
                 if (err) return console.error(err);
                 console.log(post.title + " saved to posts collection.");
               });
             }
           }
         })
     })
   }
}
