# classRabbit

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/kU1mbDsO/classrabbit

## Minimum Viable Product

classRabbit is a web application inspired by taskRabbit built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Choose a task & provide task details
- [ ] Filter and select a local tasker
- [ ] Confirm and view bookings
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1.5 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Task & Category Model, API, & Dashboard home page components (1 day)

**Objective:** User tasks can be viewed and assigned a category via state.

### Phase 3: Region Model, API, & newTask/stage1 components (2 days)

**Objective:** User can create a newTask and provide Location for task via searchBar that autocompletes from Google API nearby places. Potential taskers are selected via API by closest region.

### Phase 4: Availability & Skill Model, API, & newTask/stage2 Component (2 days)

**Objective:** User can view prospective taskers and their skills. User can filter by availability & sort by experience/price.

### Phase 5: newTask/stage3 Component (2 days)

**Objective:** User can review newTask information and complete task booking.

### Bonus Features (TBD)
- [ ] View Tasker Profile
- [ ] Fake Payment Processor
- [ ] Become a Tasker
