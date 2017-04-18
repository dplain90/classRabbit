# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/user/:id`
- `GET /api/taskers`
  - Gets all taskers within region and skill category.

### Session

- `POST /api/session`
- `DELETE /api/session`

### Tasks

- `GET /api/user/:id/tasks`
  - Gets all user's tasks
- `POST /api/user/:id/tasks`
- `PATCH /api/user/:id/tasks/:id`
- `DELETE /api/user/:id/tasks/:id`

### Skills
- `POST /api/skills`
   - For Become a Tasker (if i get there)
- `GET /api/skills`
  - For Tasker profile page (if i get there)

### Regions
- `POST /api/regions`

### Notes/Addtional Info:
- Categories are stored as a vanilla JS object via application.js
- Availabilities/Skills are queried via User model during GET taskers request
