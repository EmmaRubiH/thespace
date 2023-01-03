# THE SPACE 

![amiresponsive](/src/assets/Ska%CC%88rmavbild%202023-01-03%20kl.%2015.08.35.png)

The space is a online blog, styled media platform. Where the users can create a profile and post their images along with a title and content. 
Users on this site can also view other users profiles. A user can comment, like and favorite (star) them.
This platform is designed to provide a  online community as users interact with each others post.

## User Stories:

### User Goals:

<details><summary>CLICK ME</summary>
<p>

* As a site user I can register an account
* As a site user I can delete my account
* As a site user I can create posts
* As a Site User I can Edit and Delete that Post at want
* As a Site User I can Follow and Unfollow other Users
* As a Site User I can Comment on other Users Posts
* As a Site User I can Edit and Delete the Comment I own
* As a Site User I can Like and Unlike Posts from other Users Posts

</p>
</details>

### Navigation & Authentication:

<details><summary>CLICK ME</summary>
<p>

* As a user I can view a navbar from every page so that I can navigate easily between pages
* As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh
* As a user I can create a new account so that I can access all the features for signed up users
* As a user I can sign in to the app so that I can access functionality for logged in users
* As a user I can tell if I am logged in or not so that I can log in if I need to
* As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
* As a logged out user I can see sign in and sign up options so that I can sign in/sign up
* As a user I can view user's avatars so that I can easily identify users of the application

</P>
</details>

### Adding & Liking posts:

<details><summary>CLICK ME</summary>
<p>

* As a logged in user I can create posts so that I can share my images with the world!
* As a user I can view the details of a single post so that I can learn more about it
* As a logged in user I can like a post so that I can show my support for the posts that interest me

</p>
</details>

### The Posts Page

<details><summary>CLICK ME</summary>
<p>

* As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content
* As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in
* As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most
* As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about
* As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc

</p>
</details>

### The Post page: 

<details><summary>CLICK ME</summary>
<p>

* As a user I can view the posts page so that I can read the comments about the post
* As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created
* As a logged in user I can add comments to a post so that I can share my thoughts about the post
* As a user I can see how long ago a comment was made so that I know how old a comment is
* As a user I can read comments on posts so that I can read what other users think about the posts
* As an owner of a comment I can delete my comment so that I can control removal of my comment from the application
* As an owner of a comment I can edit my comment so that I can fix or update my existing comment 
* As a user I can see a list of the most liked posts so that I can see which ones are the most popular ones

</p>
</details>

### The Profile page:

<details><summary>CLICK ME</summary>
<p>

* As a user I can view other users profiles so that I can see their posts and learn more about them
* As a user I can see a list of the most followed profiles so that I can see which profiles are popular
* As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them
* As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed
* As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them
* As a logged in user I can edit my profile so that I can change my profile picture and bio
* As a logged in user I can update my username and password so that I can change my display name and keep my profile secure

</p>
</details>

## Strategy:
<hr>

The site allows the users to create their profiles with avatar image, username and bio info.
And the users can upload their own content with photos, titles and content. 
Users can also interact with other users post. view, liking, commenting and saving others posts.

The site will allow for users authentification and CRUD functionalaity. (create, read, update and delete.)

## Structure:
<hr>

### Home page

* Landing page:
  * Navbar: Title for header "THE SPACE", Home, Sign In, SiggUp links.
  * Posts by all users
  * Searchbar where the user can search post with relevent keyword.
  * List: Most followed profiles
  * List: Most liked posts

* When logged in:
  * Navbar: Title "THE SPACE", Home, Feed, Liked, Saved, Signout, Profile (Avatar) and Add post links.

<details><summary>Home page: screenshot</summary>
<p>
</p>
</details>

### Sign up page:

* Sign Up form:
  * Title: Sign Up
  * Username
  * Password
  * Confirm password
  * Sign Up button
  * Bellow it's a link to Sign In if the user is already has an account.
  * Image for lager screens will display, mobile the image disappers.

<details><summary>Sign Up: screenshot</summary>
<p>
</p>
</details>

### Sign In page:

* Sign In form:
  * Title: Sign In
  * Username
  * Password
  * Sign in button
  * Bellow it's a link to sign up if the user has not create an account yet.
  * Image for lager screens will display, mobile the image disappers.

<details><summary>Sign Ip: screenshot</summary>
<p>
</p>
</details>

### Feed page:

(for logged in users)

* Feed page contains:
  * Feed text and icon in navbar
  * Search field
  * Post by author, and avtar and Id.
  * Date of post
  * Image
  * Title and Content for image
  * Icons: Like button (thumbs up), Save button (thumbtack) and Comment button (comments). all of the icons have count beside.
  * list: Most liked post
  * List: Most followed profiles
    * Buttons to Follow and Unfollow profiles

<details><summary>Feed page: screenshot</summary>
<p>
</p>
</details>

### Liked Page:

Here the user can view all their liked post.

<details><summary>Liked page: screenshot</summary>
<p>
</p>
</details>

### Saved page:

Here on the saved page, the user can view all their saved posts. 

<details><summary>Saved page: screenshot</summary>
<p>
</p>
</details>

### Add Post page:

* Add page contains:
  * Add text and icon in navbar
  * Image and text that user can click on to upload image.
  * Title input field
  * Content input field
  * Delete button
  * Create button

<details><summary>Add post page: screenshot</summary>
<p>
</p>
</details>

### Edit Post page :

(logged in user)
The user can see three dots on their own post. The user can select beetwen two icons, Edit and Delete.

* Edit form contains:
  * Image - Change image.
  * Title input field
  * Content input field
  * Cancel button
  * Save button

<details><summary>Edit post page: screenshot</summary>
<p>
</p>
</details>

### Profile page:

(logged in user)

* Profile page contains:
  * Profile text and Avatar image in navbar
  * User profile details:
    * Username
    * Avatar image
    * Following count
    * Followers count
    * Posts count
    * Content bio
    * Three dots icon - edit profile, change username and password.
  * Text for users Posts
  * User will see their own posts

* List: Most followed profiles
* List: Most liked posts

<details><summary>Profile page: screenshot</summary>
<p>
</p>
</details>

### Edit Profile page:

Edit profile:
* Image
* Change image button
* Bio text input field
* Cancel button
* Saved button

Change username:
* Title: change username
* Current username
* Cancel button
* Save Button

Change password:
* Title: New password
  * new password input field
* Title: confirm password
  * confirm password field
* Cancel button
* Save button

<details><summary>Edit profile: screenshot</summary>
<p>
</p>
</details>

<details><summary>Change username: screenshot</summary>
<p>
</p>
</details>

<details><summary>Change password: screenshot</summary>
<p>
</p>
</details>

## Design:
<hr>

## wireframe

![wireframe](/src/assets/wireframe.png)

## Color

![coolors](/src/assets/the%20space.png)

## images:
 * [unsplash](https://unsplash.com/s/photos/portrait)
  * [pexels](https://www.pexels.com/sv-se/)

## Future Features:
<hr>

Futur features for user is a contact page. Where the users can contact each other.
The idea is to include a users contact page with an contact list inside.
There will be a message form, that will look like a chat-forum. 
In the Back-End I have started with a contact model.

* To have videos to be posted.

* Delete users profile.

## Languages:
<hr>

* Python
* CSS
* HTML
* JavaScript

### Technologies, frameworks and libraries:

* [React](https://reactjs.org/)
* [React-Bootstrap](https://react-bootstrap-v4.netlify.app/)
* [Django](https://www.djangoproject.com/)
* [Github](https://github.com/)
* [Gitpod](https://www.gitpod.io/)
* [Heroku](https://id.heroku.com/login)
* [Stackoverflow](https://stackoverflow.com/)
* [Balsamiq](https://balsamiq.com/wireframes/desktop/)
* [Cloudinary](https://cloudinary.com/)
* [ElephantSQL](https://www.elephantsql.com/)
* [Bootstrap](https://getbootstrap.com/)

## Testing:
<hr>

### [CSS Validator](https://jigsaw.w3.org/css-validator/)

### [HTML Validator](https://validator.w3.org/)

### Manual testing:


## Bugs:
<hr>

Could not commit to github from github with readme.md file. Hade accedentaly made a change in github. so i hade to solve it by doing pull request.


## Credits:

* I used the "Moments" walkthrough project to start with. I used the walkthrough codes as a base, and then add my feutures on top of it. 
* Stackoverflow was a big help. could fined wery helpful codes and oldproblems like i hade.
* I got very good help from my mentor Jubril, and on slack.




