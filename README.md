# Lotus
## A Magic The Gathering Deckbuilder
#### By Nicola Zanghi




### What is *Magic The Gathering*?
*Magic: The Gathering* is a trading card game in which players use their own pre-assembled decks of trading cards to battle each other. Each card represents a spell that the players "cast" at each other, until a victor is declared. 



### How Are They Sold?
In primary retail, the cards are released quarterly in *"sets"*, each consisting of around 200-300 unique cards. These are packaged in *Booster Packs*, which contain a random assortment of 15 cards, including one Rare card. However, Magic The Gathering has a much stronger secondary market, where merchants have purchased copious amounts of boosters, opened them all, and begin selling individual cards. Alongside typical price factors of collectible items, such as rarity and condition, MtG cards are unique in that their prices are also determined by their viability in the game's meta. Card prices have been known to fluctuate with new releases, as powerful synergies form with the new set, or as they rotate out of the Tournament Official Card Pool, consisting of the five most recent sets.



### What is *Lotus*?
*Lotus* is a deck-building application for Magic The Gathering players to set a budget alongside their traditional deck-building parameters, similar to those seen on sites like [Scryfall](http://scryfall.com/advanced). It utilizes [TCGPlayer's](http://tcgplayer.com) API to access these qualities of the card as well as the price of the card, and then allows the user to pick and choose cards they would like to store in a deck. One of the most critical goals in deck-building is to have a deck that produces consistent, and reliable results, so that you're certain your opening hand will have a good foundation to start your game with, and that you have a strong stack of cards to look forward to. Because of how important this is, *Lotus* allows a user to test their deck by shuffling it and returning seven cards, and an additional card with each *"draw"*. Each of the decks are stored in a cart, so if you'd like to make a deck for you and a deck for your friend, you can do that, and then export both lists directly to TCGPlayer.com for a seamless shopping experience.

### User Stories

#### As a User, You Can
*  Filter Magic The Gathering Cards by
    * Name
    * Color
    * Type
    * Mana Cost
    * Rules Text 
    * Set Release
    * Price
    * And more!
        * *Many of these features will be added along the project's growth, but MVP will have a basic Card Name search*
*  Add cards either "loose" in a cart, or as part of a Deck
*  Add multiple decks, for homebrew *"Duel Decks"* with a friend
*  Add pre-owned cards, so you can test what your full deck would look like, without purchasing cards you already have.
*  Test a deck's viabilities by shuffling and drawing cards from it
*  Set a budget for each deck before building it, and choose cards accordingly
    * Cards that will be out of budget are automatically filtered out
*   Export your cart directly to TCGPlayer.com for immediate purchase