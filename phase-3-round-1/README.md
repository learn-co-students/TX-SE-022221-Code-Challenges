# Flatagram

Today you'll be building an app for viewing, liking, and commenting on a single picture. You will be using a local API and building out the frontend for our app, Flatagram.

## Demo

Use this gif as an example of how the app should work.

![demo gif](assets/demo.gif)

## Setup

- Fork and clone this repository
- Run `json-server --watch db.json --routes routes.json` to get the backend started
- Open the `index.html` file on your browser

## Endpoints

Your base URL for your API will be: http://localhost:3000

The endpoints you will need are:

- GET `/images/1`
- PATCH `/images/1`
- POST `/comments`
- DELETE `/comments/:id`

## Core Deliverables

As a user, I can:

- See the image received from the server, including its title, likes and comments when the page loads
- Click on the heart icon to increase image likes, and still see them when I reload the page
- Add a comment (no persistance needed)

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

> Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I can:

- Downvote an image
- Still see the comments written after reloading the page
  > For this one, you want to make a POST request to the `/comments` endpoint.
  > Your comment object must have an `imageId` key with a value of `1` for it to work.
- Delete a comment
  > To persist this, you will have to make a DELETE request to the `/comments/:id` endpoint.

## Rubric

You can find the rubric for this assessment [here](https://github.com/learn-co-curriculum/se-rubrics/blob/master/module-3.md).
