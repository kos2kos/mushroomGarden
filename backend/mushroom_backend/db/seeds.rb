# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def getRandomInt(arg)
  rand(1 .. arg)
end


shiitake = Mushroom.create({price: getRandomInt(100) + 1, name: "Shiitake", image:"m1.png"})
truffle = Mushroom.create({price: getRandomInt(100) + 1, name: "Truffle", image:"m2.png"})
shimeji = Mushroom.create({price: getRandomInt(100) + 1, name: "Shimeji", image:"m3.png"})
eringi = Mushroom.create({price: getRandomInt(100) + 1, name: "Eringi", image:"m4.png"})
portobello = Mushroom.create({price: getRandomInt(100) + 1, name: "Portobello", image:"m5.png"})
paddy = Mushroom.create({price: getRandomInt(100) + 1, name: "Paddy Straw", image:"m6.png"})
amigasatake = Mushroom.create({price: getRandomInt(100) + 1, name: "Amigasatake", image:"m7.png"})
maitake = Mushroom.create({price: getRandomInt(100) + 1, name: "Maitake", image:"m8.png"})
psilocybin = Mushroom.create({price: getRandomInt(100) + 1, name: "Psilocybin", image:"3.png"})
goomba = Mushroom.create({price: getRandomInt(100) + 1, name: "Goomba", image:"m10.png"})
enokidake = Mushroom.create({price: getRandomInt(100) + 1, name: "Enokidake", image:"m11.png"})
nameko = Mushroom.create({price: getRandomInt(100) + 1, name: "Nameko", image:"m12.png"})
kikurage = Mushroom.create({price: getRandomInt(100) + 1, name: "Kikurage", image:"m13.png"})
woodEar = Mushroom.create({price: getRandomInt(100) + 1, name: "Wood Ear", image:"m14.png"})
tamagotake = Mushroom.create({price: getRandomInt(100) + 1, name: "Tamagotake", image:"m15.png"})

log = Garden.create({name: "Log"})
gardenBox = Garden.create({name: "Garden Box"})
darkForrest = Garden.create({name: "Dark Forrest"})
swamp = Garden.create({name: "Swamp"})
sidewalk = Garden.create({name: "Sidewalk"})


natsuki = User.create({username: "natsuki", password: "ms.rooms", amount: 987987 })
nkosi = User.create({username: "kos2kos", password: "niceass;)", amount: 987987 })

userGarden1 = UserGarden.create({garden: swamp, user: natsuki})
userGarden1 = UserGarden.create({garden: sidewalk, user: natsuki})

userGarden2 = UserGarden.create({garden: darkForrest, user: nkosi})



gardenMushroom1 = GardenMushroom.create({garden_id: swamp.id, mushroom_id: shiitake.id})
gardenMushroom2 = GardenMushroom.create({garden_id: swamp.id, mushroom_id: truffle.id})

gardenMushroom7 = GardenMushroom.create({garden_id: sidewalk.id, mushroom_id: goomba.id})

gardenMushroom8 = GardenMushroom.create({garden_id: sidewalk.id, mushroom_id: tamagotake.id})


gardenMushroom5 = GardenMushroom.create({garden_id: log.id, mushroom_id: nameko.id})
gardenMushroom3 = GardenMushroom.create({garden_id: log.id, mushroom_id: goomba.id})
gardenMushroom4 = GardenMushroom.create({garden_id: log.id, mushroom_id: enokidake.id})
gardenMushroom6 = GardenMushroom.create({garden_id: darkForrest.id, mushroom_id: psilocybin.id})