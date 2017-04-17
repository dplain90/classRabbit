```js
{
  currentUser: {
    id: 1,
    fname: "Danny",
    img_url: "/assets/1.png"
  },

  auth: {
    signUp: {errors: []},
    logIn: {errors: []}
  },

  tasks: [
   {id: 3,
   category_id: 4,
   tasker_id: 1,
   img_url: "/assets/2.png", // tasker img_url
   date: "03212017",
   time: "morning"
	 details: {    hidden: true // prop describing if task details are revealed
                 location:
					       description:
					       fname: "Mary" // tasker fname
					       Price:
             }
    },
   ]

  taskers: {
    1: {
      fname: "John",
      lname: "Jacob",
      img_url: "",
      rating: 8.3,
      review_count: 15,
      price: 30,
      completed: 15,
      // help_desc (items being passed onto taskerShow child component, helpDescription.
      help_desc: {
        pitch: "I am very good at this task",
        quote: "This experience was great",
        img_url: "/assets/1.png",
        date: "03212017"
      }
    },

  }


  availabilities {
    filter: "top_rated",
    "0227": {
      "morning": [ 21, 32, 11, 15, 2, 4],
      "afternoon": [32, 11,14, 5],
      "evening": [32, 15, 4, 6]
    },
    "0228": {
      // key is the date, then time-frame, each time-frame has an array of tasker_ids that are avail during that time.
      "morning": [ 21, 32, 11, 15, 2, 4],
      "afternoon": [32, 11,14, 5],
      "evening": [32, 15, 4, 6]
    }
  }

  search: {
    value: "min",
    results: ["minor repairs", "minor work"]
  }

  newTask: {
    step: 3// what step in the form the user is on.
    location: "32 Weave Lane, Wichita, NB, 20132"
    locality: "Wichita" // locality from Google API
    category_id: 6
    title: "Minor Repairs" // category title
    tasker_id: 3
    date: "03212017"
    time: "morning"
    description: "Fix the toilet"
    errors: {[]}
  }



```
