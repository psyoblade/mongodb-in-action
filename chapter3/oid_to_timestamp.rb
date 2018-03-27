require 'mongo'
id = BSON::ObjectId.from_string('5aba3392aafc06e40876db97')
p id
p id.generation_time
oid = BSON::ObjectId.from_time(Time.utc(2018, 03, 27, 12, 5, 38))
p oid

