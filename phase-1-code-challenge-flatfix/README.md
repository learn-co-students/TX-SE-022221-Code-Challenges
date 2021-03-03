# Object Relations Code Challenge - Flatflix

For this challenge, we'll be working with a Movie Review domain, like Netflix.

We have three models: `Viewer`, `Movie`, and `Review`.

A `Movie` has many `Review`s. A `Viewer` has many `Review`s. A `Review` belongs to a `Viewer` and belongs to a `Movie`.

`Viewer` - `Movie` is a many to many relationship.

**Note**: You should draw your domain on paper or on a whiteboard _before you start coding_. Remember to identify a single source of truth for your data.

## Topics

- Classes and Instances
- Class and Instance Methods
- Variable Scope
- Object Relationships
- Arrays and Array Methods

## Instructions

To get started, run `bundle install` while inside of this directory.

Build out all of the methods listed in the deliverables. The methods are listed in a suggested order, but you can feel free to tackle the ones you think are easiest. Be careful: some of the later methods rely on earlier ones.

**Remember!** This code challenge does not have tests. You cannot run `rspec` and you cannot run `learn`. You'll need to create your own sample instances so that you can try out your code on your own. Make sure your associations and methods work in the console before submitting.

We've provided you with a tool that you can use to test your code. To use it, run `ruby tools/console.rb` from the command line. This will start a `pry` session with your classes defined. You can test out the methods that you write here. You can add code to the `tools/console.rb` file to define variables and create sample instances of your objects.

Writing error-free code is more important than completing all of the deliverables listed - prioritize writing methods that work over writing more methods that don't work. You should test your code in the console as you write.

Similarly, messy code that works is better than clean code that doesn't. First, prioritize getting things working. Then, if there is time at the end, refactor your code to adhere to best practices. Examples of best practices might be to use higher-level array methods such as `map`, `select`, and `find` when appropriate in place of `each`, or, when you encounter duplicated logic, to extract it into a shared helper method.

**Before you submit!** Save and run your code to verify that it works as you expect. If you have any methods that are not working yet, feel free to leave comments describing your progress.

## Deliverables

Write the following methods in the classes in the files provided. Feel free to build out any helper methods if needed.

Deliverables use the notation `#` for instance methods, and `.` for class methods.

Some of the methods listed are provided to you in the starter code. You should check that they work correctly, and that you understand them.

### Initializers, Readers, and Writers

#### Movie

- `Movie#initialize(title)`
  - `Movie` is initialized with a title (string)
  - title **can be** changed after the `Movie` is initialized
- `Movie#title`
  - returns the `Movie`'s title
- `Movie.all`
  - returns an array of all the `Movie` instances that have been initialized

#### Viewer

- `Viewer#initialize(username)`
  - `Viewer` is initialized with a username (string)
  - username **can be** changed after the Viewer is initialized
- `Viewer#username`
  - returns the Viewer's username
- `Viewer.all`
  - returns an array of all the Viewer instances that have been initialized

#### Review

- `Review#initialize(viewer, movie, rating)`
  - `Review` is initialized with a `Viewer` instance, a `Movie` instance, and a rating (number)
- `Review#rating`
  - returns the rating for the `Review` instance
- `Review.all`
  - returns an array of all initialized `Review` instances

### Object Relationship Methods

#### Review

- `Review#viewer`
  - returns the `Viewer` instance associated with the `Review` instance
- `Review#movie`
  - returns the `Movie` instance associated with the `Review` instance

#### Viewer

- `Viewer#reviews`
  - returns an array of `Review` instances associated with the `Viewer` instance.
- `Viewer#reviewed_movies`
  - returns an array of `Movie` instances reviewed by the `Viewer` instance.

#### Movie

- `Movie#reviews`
  - returns an array of all the `Review` instances for the `Movie`.
- `Movie#reviewers`
  - returns an array of all of the `Viewer` instances that reviewed the `Movie`.

### Aggregate and Association Methods

#### Viewer

- `Viewer#reviewed_movie?(movie)`
  - a `Movie` instance is the only argument
  - returns `true` if the `Viewer` has reviewed this `Movie` (if there is a `Review` instance that has this `Viewer` and `Movie`), returns `false` otherwise
- `Viewer#rate_movie(movie, rating)`
  - a `Movie` instance and a rating (number) are passed in as arguments
  - if the `Viewer` instance and the passed `Movie` instance are _not_ already associated, this method should create a new `Review` instance
  - if this `Viewer` has already reviewed this `Movie`, assigns the new rating to the existing `Review` instance

#### Movie

- `Movie#average_rating`
  - returns the average of all ratings for the `Movie` instance
  - to average ratings, add all ratings together and divide by the total number of ratings.
- `Movie.highest_rated`
  - returns the `Movie` instance with the highest average rating.

## Rubric

You can find the rubric for this assessment [here](https://github.com/learn-co-curriculum/se-rubrics/blob/master/module-1.md).
