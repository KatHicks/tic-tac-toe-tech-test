# Practice Technical Test: Tic Tac Toe
### Makers Academy Week 10

### Instructions

The rules of tic-tac-toe are as follows:

* There are two players in the game (X and O)
* Players take turns until the game is over
* A player can claim a field if it is not already taken
* A turn ends when a player claims a field
* A player wins if they claim all the fields in a row, column or diagonal
* A game is over if a player wins
* A game is over when all fields are taken

Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.

### Data Structure

* First step of implementation is definitely to figure out the data structure
* Played around in the console and realised that can structure the grid as a multi-dimensional array


![data_structure](/assets/data_structure.png?raw=true "Data Structure")

* Required to reference each cell

|**[0][0]**|**[0][1]**|**[0][2]**|
|:--------:|:--------:|:--------:|
|**[1][0]**|**[1][1]**|**[1][2]**|
|**[2][0]**|**[2][1]**|**[2][2]**|

### Domain Model

![domain_model](/assets/domain_model.png?raw=true "Data Structure")
