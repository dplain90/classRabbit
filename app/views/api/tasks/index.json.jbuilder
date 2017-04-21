@tasks.each do |task|
  json.set! task.id do
    json.id task.id
    json.title task.category.title
    json.tasker_img_url asset_path(task.tasker.avatar.url(:thumb))
    json.tasker_id task.tasker_id
    json.date task.date
    json.time task.time
    json.details do
      json.location task.location
      json.tasker_fname task.tasker.fname
      json.tasker_linitial task.tasker.lname[0]
      json.description task.description
    end
  end
end
