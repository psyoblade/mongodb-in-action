# mongodb in action

[MongoDB Package Component](https://docs.mongodb.com/manual/reference/program)
[Errata in MongoDB in Action](https://forums.manning.com/forums/mongodb-in-action-second-edition;jsessionid=0C08A9920459E550AAE736045DE33976)

# Install MongoDB, Ruby, Gem and etc
```bash
brew install ruby
gem install mongo
gem install bundler
bundle install
```
```ruby - connect.rb
require 'rubygems'
require 'mongo'
$client = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'tutorial')
Mongo::Logger.logger.level = ::Logger::ERROR
$users = $client[:users]
puts 'connected!'
```
```bash
$> irb -r connect.rb
smith = {"last_name" => "smith", "age" => 30}
jones = {"last_name" => "jones", "age" => 40}

smith_id = $users.insert_one(smith)
jones_id = $users.insert_one(jones)

irb(main):013:0> $users.find("age" => {"$gt" => 20}).each.to_a do |row|
irb(main):014:1* puts row
irb(main):015:1> end

$users.find({"last_name" => "smith"}).to_a
```
