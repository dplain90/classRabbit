# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
fname           | string    | not null
lname           | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
tasker          | boolean   | not null, default: false, indexed
phone_number    | string    | not null
zip_code        | string    | not null, indexed
locality        | string    | indexed

## tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
description | text      | not null
location    | string    | not null
locality    | string    | not null, indexed
date        | date      | not null,
time        | string    | not null,
requestor_id| integer   | not null, indexed, foreign_key (user)
category_id | integer   | not null, indexed, foreign_key (category)
tasker_id   | integer   | not null, indexed, foreign_key (user)

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, indexed
img_url     | string    | not null
description | string    |

## skills
column name     | data type | details
------------    |-----------|-----------------------
id              | integer   | not null, primary key
tasker_id       | integer   | not null, indexed
category_id     | integer   | not null, indexed
pitch           | text      | not null
price           | integer   | not null
reviews         | array     | not null, default: []
quote           | text      |
quote_author_id | integer   |

## regions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | string    | not null, unique
locality    | string    | not null, unique, indexed, foreign_key

## availabilities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tasker_id   | integer   | not null, foreign key
date        | integer   | not null
morning     | boolean   | not null, default: false
afternoon   | boolean   | not null, default: false
evening     | boolean   | not null, default: false
