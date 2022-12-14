                        Flatiron Market
________________________________________________________

Flatiron Market is the perfect online marketplace for people who are looking to buy and sell ANYTHING. Here you can easily list items for sale without the worry of expensive commission fees, because we don't have any! As someone who is constantly frustrated over expensive seller fees, I built this application to allow users to enjoy a free marketplace.




User Stories
________________________________________________________
- Users can create an account and log in.
- Users can list items up for sale.
- Users can edit or delete listings.
- Users can search for items through a search bar.
- Users can click on items displayed on home page and be directed to a new page with item details.
- Users can purchase an item from the item detail page.
- Users can leave reviews for sellers.



Models and Relationships
This is a good place for a sweet diagram:


My Data Relationships

User
A User has many Pickles, and so on and so forth

id
username
password_digest
firstname
lastname
birthday
favorite color
Pickle
A Pickle belongs to a User, and so on

id
variety
weight
price
description
API
Here's where you want to describe each API endpoint you're building/using. You can put this in your front end repo, your back end repo, or both.

GET /api/users
Returns a list of all users. Response JSON looks like this:

{
  id: 111,
  username: "johndoe",
  firstname: "John",
  lastname: "Doe",
  etc: "etc"
}
POST /api/users
Creates a new user. Say more about that here. Send this data:

{ this is what it takes as data }
And this is what it returns:

{ this is what you get back }
Wireframe / Mockup
Put your sweet wireframes and mockup images here. Probably only goes in the front end repo.

Wireframe

Another Wireframe

Contact info and other stuff
Put anything else you want here!



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
Migrations -->
