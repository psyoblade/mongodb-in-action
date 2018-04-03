// find using array index
db.users.find({'addresses.0.state': "NY"})

// elementMatch -- $and 연산자는 모든 elment 에 대해 별도의 and 연산이고, 우리가 흔히 알고 있는 logical and 연산자는 elemMatch 연산자를 써야한다.
db.users.find({
'addresses': {
	'$elemMatch': {
		'name': 'home',
		'state': 'NY'
	}
}
})

// check size of array - can only use exact size of array not comparing size
db.users.find({'addresses': {$size: 2}})

// find using regular expression w/ ignorecasing
db.users.find({
'username': /smi|jac/i
})

// find using slicing
db.products.find({}, {'reviews': {$slice: -5}})
db.products.find({}, {'reviews': {$slice: [24, 12]}})

// find using Date object
previous_page_date = new Date(2013, 05, 05)
db.docs.find({'date': {'$gt': previous_page_date}}).limit(10).sort({'date': -1})

// update default multi option is false
db.products.find();
db.products.update({}, {$set:{extra:"extra info"}}, {multi:true})
db.products.update({_id:ObjectId("5abce8e3a79e65ee4cdcc127")}, {$rename:{"extra":"extraInfo"}})


// default value using $setOnInsert
db.products.update({slug: 'hammer'}, 
{$inc: {quantity: 1},
$setOnInsert: {state: 'AVAILABLE'}
}, {upsert: true})
db.products.find()