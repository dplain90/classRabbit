json.id user.id
json.email user.email
json.fname user.fname
json.lname user.lname
json.img_url asset_path(user.avatar.url(:thumb))
json.img_url_small asset_path(user.avatar.url(:small))
json.img_url_med asset_path(user.avatar.url(:medium))
