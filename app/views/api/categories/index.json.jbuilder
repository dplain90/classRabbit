@categories.each do |category|
  json.set! category.id do
    json.title category.title
    json.description category.description
    json.img_url_search asset_path(category.image.url(:thumb))
    json.img_url_fav_cat asset_path(category.image.url(:small))
  end
end
