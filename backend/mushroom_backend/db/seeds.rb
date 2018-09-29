# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


shiitake = Mushroom.create({name: "Shiitake", image:"m1.png"})
truffle = Mushroom.create({name: "Truffle", image:"m2.png"})
shimeji = Mushroom.create({name: "Shimeji", image:"m3.png"})
eringi = Mushroom.create({name: "Eringi", image:"m4.png"})
portobello = Mushroom.create({name: "Portobello", image:"m5.png"})
paddy = Mushroom.create({name: "Paddy Straw", image:"m6.png"})
amigasatake = Mushroom.create({name: "Amigasatake", image:"m7.png"})
maitake = Mushroom.create({name: "Maitake", image:"m8.png"})
psilocybin = Mushroom.create({name: "Psilocybin", image:"3.png"})
goomba = Mushroom.create({name: "Goomba", image:"m10.png"})
enokidake = Mushroom.create({name: "Enokidake", image:"m11.png"})
nameko = Mushroom.create({name: "Nameko", image:"m12.png"})
kikurage = Mushroom.create({name: "Kikurage", image:"m13.png"})
woodEar = Mushroom.create({name: "Wood Ear", image:"m14.png"})
tamagotake = Mushroom.create({name: "Tamagotake", image:"m15.png"})

log = Garden.create({name: "Log"})
gardenBox = Garden.create({name: "Garden Box"})
darkForrest = Garden.create({name: "Dark Forrest"})
swamp = Garden.create({name: "Swamp"})
sidewalk = Garden.create({name: "Sidewalk"})


natsuki = User.create({username: "natsuki", password: "ms.rooms", amount: 987987 })
nkosi = User.create({username: "kos2kos", password: "niceass;)", amount: 987987 })

userGarden1 = UserGarden.create({garden: swamp, user: natsuki})
userGarden1 = UserGarden.create({garden: swamp, user: natsuki})

userGarden2 = UserGarden.create({garden: darkForrest, user: nkosi})



gardenMushroom1 = GardenMushroom.create({garden_id: swamp.id, mushroom_id: shiitake.id})
gardenMushroom2 = GardenMushroom.create({garden_id: swamp.id, mushroom_id: truffle.id})
gardenMushroom5 = GardenMushroom.create({garden_id: log.id, mushroom_id: nameko.id})
gardenMushroom3 = GardenMushroom.create({garden_id: log.id, mushroom_id: goomba.id})
gardenMushroom4 = GardenMushroom.create({garden_id: log.id, mushroom_id: enokidake.id})
gardenMushroom6 = GardenMushroom.create({garden_id: darkForrest.id, mushroom_id: psilocybin.id})
