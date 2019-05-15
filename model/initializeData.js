module.exports = function(Event) {
  Event.create({
    id: 5,
    theater: 'AMC San Diego',
    date: Date(),
    coffeeShop: 'Starbucks on Johnson St.',
    upcoming: true,
    movieTitle: 'Bee Movie 2',
    createdAt: Date(),
    updatedAt: Date(),
  })

  Event.create({
    id: 9,
    theater: 'Questionable Theater',
    date: Date(),
    coffeeShop: 'Starbucks on Johnson St. again',
    upcoming: false,
    movieTitle: 'Bee Movie 1',
    createdAt: Date(),
    updatedAt: Date(),
  })

  Event.create({
    id: 65,
    theater: 'Comfortable but Smelly Theater',
    date: Date(),
    coffeeShop: 'Spyhouse Uptown',
    upcoming: false,
    movieTitle: 'Emoji Movie',
    createdAt: Date(),
    updatedAt: Date(),
  })

  Event.create({
    id: 765,
    theater: 'Long Prairie Drive-In',
    date: Date(),
    coffeeShop: 'Dogwood Coffee',
    upcoming: false,
    movieTitle: 'Ralph Breaks the Internet',
    createdAt: Date(),
    updatedAt: Date(),
  })
}
