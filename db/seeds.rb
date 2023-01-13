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
    {name: "Nike Dunks", category: "apparel", price: 124, details: "Nike Panda Dunks in size 10", condition: "like new", image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFhUYFhgYGBgcGhUZFRwjGRgYHBUcGhgYGhgcIS4lIR4rHxwYJjgmKy8xNTU3ISQ7QDs0Py40NTQBDAwMDw8PEA8RGDEdGB0xMTExNDExPzE/MTExMTExMTExMTQxNDExMTExMTExMTE0NDExMTExMTExMTExMTExMf/AABEIAL4BCgMBIgACEQEDEQH/xAAcAAEAAAcBAAAAAAAAAAAAAAAAAQMEBQYHCAL/xABMEAACAQICBgUHCAcGBAcAAAABAgADEQQhBQYSMUFRBxMiYXEyQlKBkaGxFGJykqLB0dIXI1SCk7LwFlNzlMLxJDNDRBU0g8PT4eL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDc0REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQIEzFtA62LiDUNkCJUZEZH2mKgkK7rbshhYiY70sa2dUnyOkf1jgGqfRpkHsXByZuPzfpCa10Jia9EDGIpVVfZttkCqt7OoPHu35i+8QOkqdRWF1II5gyZNT0NKNhMLUxtKqKpqvRe7A7LqWWmVK71OySNkHskDlaZ/q3pxMZQWugKg3BVt6spsRfiL7j8DlAvMREBERAREQEREBERAREQEREBERAREQEREBESXUcKCSQAASSTYADeSYEyJrLAdLdJqhD4d0S+TBwzW5slgPYx7rzPdFaVoYlOsoVVqLx2Tmp5MpzU9xAMC4REQEREBLTrFpdMJh6mIfcgyXizHJUHibDu38JdprPpurkYWggvZq1zbjs02sD3dq/qga10ThX0jjrVXN3LVKr8dgEXC8rkqo5XHK02BrZiMClAYeqECqAEpqO2thZWUDNSPSyG+au0HVxCVbYbaNaopQCmt2ILKSBy8kXPDflvme4HUOlQQ4nSdYgbzRVjmc8nqDtOxyyXjxMqNeDFNsGkKtQ09ra2L2G/JmUErtffNq6ra+YVEShsththVVdo7SHuNQceZYAXO+YHrFrCcQRSoItDDpklFAADbzntvPd8TLEiE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", seller_id: Seller.all.sample.id, buyer_id: Buyer.all.sample.id},
    {name: "Louis Vuitton Wallet", category: "accesories", price: 450, details: "Cute color and great compartment space.", condition: "like new", image: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-zo%C3%A9-wallet-monogram-small-leather-goods--M62933_PM2_Front%20view.jpg", seller_id: Seller.all.sample.id, buyer_id: Buyer.all.sample.id},
    {name: "Dior Sunglasses", category: "accessories", price: 150, details: "Never worn, bought for double the asking price.", condition: "new", image: "https://avvenice.com/109836-thickbox_default/dior-sunglasses-wildior-bu-black-gray-dior-eyewear.jpg", seller_id: Seller.all.sample.id, buyer_id: Buyer.all.sample.id},
    {name: "2018 MacBook Pro", category: "electronics", price: 400, details: "Works great, has a few tiny scratches on the bottom left", condition: "like new", image: "https://images.offerup.com/3s9TWDYEXcoYBfAXKIz4so93cgY=/1633x1923/8134/81340c61b3064e1d86aafa299fd4c761.jpg", seller_id: Seller.all.sample.id, buyer_id: Buyer.all.sample.id},
    {name: "Desk", category: "furniture", price: 70, details: "In almost perfect condition, very small scratch inside drawer.", condition: "like new", image: "https://images.thdstatic.com/productImages/eead14f0-6026-45de-907d-5195ff10f376/svn/grey-wash-welwick-designs-writing-desks-hd9141-31_600.jpg", seller_id: Seller.all.sample.id, buyer_id: Buyer.all.sample.id},
    {name: "Coffee Maker", category: "appliances", price: 85, details: "Got this as a gift but never used it", condition: "new", image: "https://images.keurig.com/is/image/keurig/K-Cafe-SMART-Coffee-Latte-Cappuccino-Maker_5000365485?fmt=png-alpha&wid=575", seller_id: Seller.all.sample.id, buyer_id: Buyer.all.sample.id}

])


User.create([
    {username: "BobShangs", password: "owkhlfijwa"},
    {username: "MaryTTT", password: "owewdfeijwa"},
    {username: "Sophluv", password: "owkhlfijwa"},
    {username: "GGphil", password: "owujrytjwa"},
    {username: "Roseyyyyy", password: "owewfarjwa"},
    {username: "Primmy", password: "owkhk7ruesg"}
])
