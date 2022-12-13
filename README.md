This application allows users to both sell and buy products. Sellers will have the opportunity to post products up for sale, edit their listings, and delete their listings. Buyers will be able to filter search the items, to view details of each item by clicking on it, and to purchase the item.

Tables:

Buyer:
has_many :items
has_many sellers, through: :items
Name
Email
Password
Items
belongs_to :buyer
belongs_to :seller
Name
Category
Price
Details
Seller
has_many :items
has_many buyers, through: :items
Name
Email
Password

Front end:
login/sign up page
seller page: seller can post, delete, edit an item
Buyer page: buyer can purchase items, which will then be deleted from the database
Search bar
NavBar

Back end:
get, post, delete, patch requests
Migrations
