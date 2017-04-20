@categories.each do |category|
  json.set! category.id do
    json.title category.title
    json.description category.description
    json.img_url asset_path(category.image.url)
  end
end
