                        Flatiron Market

________________________________________________________

Flatiron Market is the perfect online marketplace for people who are looking to buy and sell ANYTHING. Here you can easily list items for sale without the worry of expensive commission fees, because we don't have any! As someone who is constantly frustrated over expensive seller fees, I built this application to allow users to enjoy a free marketplace.




User Stories
________________________________________________________
- Users can create an account and log in.
- Users can list items up for sale.
<!-- - Users can edit or delete listings. -->
- Users can search for items through a search bar.
- Users can click on items displayed on home page and be directed to a new page with item details.
- Users can purchase an item from the item detail page.
<!-- - Users can leave reviews for sellers. -->



Models and Relationships
<img width="549" alt="Screen Shot 2022-12-13 at 3 57 21 PM" src="https://user-images.githubusercontent.com/92694120/207478790-f634a2c6-998f-4d70-b26a-dcf070be8e57.png">

My Data Relationships
_______________________________________________________________
Buyer

A Buyer has many Items, and Sellers through Items.


- name

- email

- password

Item

An Item belongs to a User, and to a Seller.


- name

- price

- details

- category

- condition

Seller

A Seller has many Items, and Buyers through Items.

- name

- email

- password


Routes:


GET /api/buyers
- Returns a list of all buyers.

POST /api/sellers
- Creates a new item listing.

GET/api/sellers
- Returns a list of all sellers

GET/api/items
- returns a list of all items.

DELETE /api/items
- Deletes item listing.

PATCH /api/sellers
- Edits item listing.




Wireframe / Mockup


![IMG_9034](https://user-images.githubusercontent.com/92694120/207706030-bfa1ccd0-f2ae-41df-bf93-84e4ca7504d3.jpg)
![IMG_9035](https://user-images.githubusercontent.com/92694120/207706044-fdeaddaa-70c4-4ac2-af28-0e8702053626.jpg)

Github: https://github.com/annabrzabrz




<!-- This application allows users to both sell and buy products. Sellers will have the opportunity to post products up for sale, edit their listings, and delete their listings. Buyers will be able to filter search the items, to view details of each item by clicking on it, and to purchase the item.

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
