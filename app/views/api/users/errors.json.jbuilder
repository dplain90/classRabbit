
json.errors do
  @user.errors.messages.keys do |key|
    json.set! key, @user.errors.messages.get(key)
  end
end
