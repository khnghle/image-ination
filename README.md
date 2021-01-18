# WELCOME TO IMG-INATION

This project was created using Create-React-App with an Express Backend, PostgreSQL as a db and AWS S3 as the bucket to store images. 

## Getting Started 
As of right now, there is only one universal repository for the images.

You can search up names of the images within the search bar located on the nav bar. 

The upper right hand corner contains an add button which enables users to post a new image which will render automatically on to the page. 

Each image has a red button which enables users to delete the images on the repo as well. 
## Known bugs and Improvements
As of right now, the there is alot of state being passed around within my components. I would like to have a more global state manager such as redux to better organize my backend calls and clean up these props. 

I want to implement a user login's system and some backend route middleware so one's images would be protected from outside influence and have a way for a user to update information regarding a particular picture. Making a like/comment feature could be nice way to create a community for this application. 

Other UI/UX improvements, having a way to delete multiple images at a time/ add many images at a time would be cool. Creating a better search feature which a tag system could be a nice way to find similar images. 

## Takeways
This project was a really cool introduction to AWS S3 bucket and TailwindCss and really forced to me go beyond a pre-built boiler code to make a front-end and back-end server to suit my needs. Thank you for Shopify for coming up with such a cool concept for an their internship program. I realy enjoyed making it and I hope you do too.