# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Buyer.create([
    {name: "Charlie Lovington", email: "CharlieL@yahoo.com", password: "Chacha242"},
    {name: "Kristal Dorkin", email: "DorkieYorkie@yahoo.com", password: "Treelover565"},
    {name: "Jolie Peters", email: "Joljol3000@yahoo.com", password: "Lala30frog"},
    {name: "Karen Stinger", email: "KarenStinger66@yahoo.com", password: "baggy23shoe"},
    {name: "Thomas Loyd", email: "Tloyd234@yahoo.com", password: "3280056ad"},
    {name: "Peter Swatson", email: "Peteswat2@yahoo.com", password: "primrose458"}

])


Seller.create([
    {name: "Bob Shangy", email:"Bobbyboy249@gmail.com", password: "ilovesara717" },
    {name: "Mary Thomas", email:"MaryThomasssss@gmail.com", password: "hda.sdwlkq" },
    {name: "Sophie Tanker", email:"Sophtank404@yahoo.com", password: "dw978d0dd" },
    {name: "George Phillips", email:"Georgiephil@aol.com", password: "jskdbjhlsh888" },
    {name: "Rose Draper", email:"Rosed08@gmail.com", password: "hsdkhiuf838" },
    {name: "Prim Cooper", email:"Cooperprim@yahoo.com", password: "skcoeuj84080" }
])

Item.create([
    {name: "Nike Dunks", category: "apparel", price: 124, details: "Nike Panda Dunks in size 10", condition: "like new", image: "rb.gy/pawiy7", seller_id: Seller.all.sample.id, buyer_id: Buyer.all.sample.id},
    {name: "Louis Vuitton Wallet", category: "accesories", price: 124, details: "Nike Panda Dunks in size 10", condition: "like new", image: "rb.gy/pawiy7", seller_id: Seller.all.sample.id, buyer_id: Buyer.all.sample.id},
    {name: "Dior Sunglasses", category: "accessories", price: 124, details: "Nike Panda Dunks in size 10", condition: "like new", image: "rb.gy/pawiy7", seller_id: Seller.all.sample.id, buyer_id: Buyer.all.sample.id},
    {name: "2018 MacBook Pro", category: "electronics", price: 124, details: "Nike Panda Dunks in size 10", condition: "like new", image: "rb.gy/pawiy7", seller_id: Seller.all.sample.id, buyer_id: Buyer.all.sample.id},
    {name: "Desk", category: "furniture", price: 124, details: "Nike Panda Dunks in size 10", condition: "like new", image: "rb.gy/pawiy7", seller_id: Seller.all.sample.id, buyer_id: Buyer.all.sample.id},
    {name: "Coffee Maker", category: "appliances", price: 124, details: "Nike Panda Dunks in size 10", condition: "like new", image: "rb.gy/pawiy7", seller_id: Seller.all.sample.id, buyer_id: Buyer.all.sample.id}

])
