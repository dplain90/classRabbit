@taskers.each do |tasker|
  json.set! tasker.id do
    json.id tasker.id
    json.fname tasker.fname
    json.lname_initial tasker.lname[0]
    json.tasker_avatar_url asset_path(tasker.avatar.url(:medium))

    json.task_count tasker.task_count(@category_id)
    json.review_count tasker.review_count(@category_id)

    tasker.skills.each do |skill|
      json.pitch skill.pitch
      json.quote skill.quote
      json.author_avatar_url asset_path(skill.author.avatar.url(:thumb))
    end

    json.availabilities Availability.by_date(tasker.availabilities)
  end
end
