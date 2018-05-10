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

     const newPostsArr = [{ title : 'First post from MongoDB',
                             description : 'This is first blog entry from MongoDB',
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
