puts "planting some seeds..."

users = User.create([
  {
    name: "Ben Gerald",
    email: "benlimpic@gmail.com",
    username: "username",
    password_digest: BCrypt::Password.create('password')
  },
  {
    name: "Daisy Mae",
    email: "daisymaelimpic@gmail.com",
    username: "username5",
    password_digest: BCrypt::Password.create('password')
  }
])

projects = Project.create([
  {
    title: "Explore the World!",
    description: "Let's visit a bunch of different places!",
    body: "I would like to visit Egypt, England, Australia, The North Pole, and the Amazon!",
    priority: "Urgent",
    life_cycle: "In Progress",
    user: users.first
  },
  {
    title: "Explore the Moon!",
    description: "Let's travel to the Moon and explore!",
    body: "I would like to visit craters, climb moon mountains, play moon golf, bounce around for science, and take samples!",
    priority: "Medium",
    life_cycle: "Assigned",
    user: users.first
  },
  {
    title: "Start my own Zoo",
    description: "I am starting a fantasy Zoo in my home town and need to fill the exhibits with magical creatures!",
    body: "I need to quest the wilderness and find a unicorn, several dragons, one kraken, the Loch Ness monster, and Bigfoot!",
    priority: "Low",
    life_cycle: "Completed",
    user: users.second
  }
])

tasks = Task.create([
  {
    title: "Heading to Egypt!",
    description: "Let's try to read some hyroglyphics!",
    body: "Hmmm it looks like these symbols are a spell book for the ancient Egyptians.. maybe I shouldn't have read it outloud!",
    priority: "High",
    life_cycle: "Edit Requested",
    project: projects.first,
    user: users.first
  },
  {
    title: "On our way to England!",
    description: "Let's explore some castles and see some landmarks!",
    body: "I would like to visit the Tower of London, the Big Ben, and the Buckingham Palace!",
    priority: "medium",
    life_cycle: "In Progress",
    project: projects.first,
    user: users.first
  },
  {
    title: "Collecting Moon Rocks!",
    description: "We may have discovered life on the moon, or just some weird rocks…Science!",
    body: "I found a weird moon cave with strange rocks inside!",
    priority: "None",
    life_cycle: "Ready for Review",
    project: projects.second,
    user: users.first
  },
  {
    title: "Exploring the moon!",
    description: "Let's explore the moon and see what we find!",
    body: "We need to map and explore the Sea of Tranquility, the dark side of the moon, and visit the site of the first moon landing!",
    priority: "Low",
    life_cycle: "Assigned",
    project: projects.second,
    user: users.first
  },
  {
    title: "Befriend some Dragons",
    description: "I am negotiating a fun business arrangement with my new Dragon friends!",
    body: "The Dragons insist on getting their share of the gold for all Dragon merchandise sold, They sure do drive a hard bargain!",
    priority: "Urgent",
    life_cycle: "Completed",
    project: projects.third,
    user: users.second
  }
])

subtasks = Subtask.create([
  {
    title: "I want my Mummy!",
    description: "While exploring the pyramids we found a friendly Mummy.",
    body: "Monty the Mummy wanted to accompany us on our trip around the world but we weren’t quite sure how the customs officials would react… to the smell.",
    priority: "Urgent",
    life_cycle: "In Progress",
    project: projects.first,
    task: tasks.first,
    user: users.first
  },
  {
    title: "Fresh Air!",
    description: "We are helping Mummy to install some AC in his Pyramids!",
    body: "We are installing some AC in Monty’s Pyramids to keep him cool and fresh! We also brought him some fresh bandages.",
    priority: "Medium",
    life_cycle: "Edit Requested",
    project: projects.first,
    task: tasks.first,
    user: users.first
  },
  {
    title: "Buckingham Palace Adventure!",
    description: "Tea time with the Queen!",
    body: "The queen is very generous with the lumps of sugar, the sandwitches were tasty, and the corgies were hilarious and friendly!",
    priority: "Urgent",
    life_cycle: "In Progress",
    project: projects.first,
    task: tasks.second,
    user: users.first
  },
  {
    title: "Daylight Savings Time!",
    description: "Updating the correct time on Big Ben!",
    body: "The Queen has requested that we assist in updating Big Ben to the correct time for daylight savings time.",
    priority: "None",
    life_cycle: "Assigned",
    project: projects.first,
    task: tasks.second,
    user: users.first
  },
  {
    title: "Eggs not Rocks!",
    description: "Turns out those weird rocks were a little more complicated than we first thought",
    body: "While preparing to begin our mission home, the “rocks/eggs in the cargo bay began to shake and crack… Suddenly, hundreds of glowing gummy bear things came shooting out of the dusty shells and started bouncing off the walls and asking to meet our leader. The captain is now addressing the flock and will soon show them the first Minions movie as a treat.",
    priority: "None",
    life_cycle: "In Progress",
    project: projects.second,
    task: tasks.third,
    user: users.first
  },
  {
    title: "Baby Sitting",
    description: "Its like tending a flock of minions but weirder ",
    body: "These baby aliens sure know how to party, however they have been a bit of a challenge to get to bed on time!",
    priority: "High",
    life_cycle: "Ready for Review",
    project: projects.second,
    task: tasks.third,
    user: users.first
  },
  {
    title: "No waves in this sea!",
    description: "Turns out there isnt much surf on the moon... But the dustboarding was incredible!",
    body: "The captain was dissapointed in the poor surf but was able to pull some excellent backflips on his dustboard.",
    priority: "Low",
    life_cycle: "Assigned",
    project: projects.second,
    task: tasks.fourth,
    user: users.first
  },
  {
    title: "Moon Landing?",
    description: "Couldn't find the original moon landing location... suspicious!",
    body: "Our map could be wrong... but we are pretty sure the original moon landing didn't happen the way we were told...!",
    priority: "None",
    life_cycle: "In Progress",
    project: projects.second,
    task: tasks.fourth,
    user: users.first
  },
  {
    title: "Very Cool Shirt!",
    description: "Merchandise is a hit!",
    body: "Our Dragon merchandise is so successful we have decided to release an entire line of fireproof clothing. Unfortunately for us, these Dragons are some real diva designers; they only respond to Ja Ja, Mugatu, and Patricia.",
    priority: "Low",
    life_cycle: "Completed",
    project: projects.third,
    task: tasks.fifth,
    user: users.second
  }
])

puts "Some crazy plants is growin!"