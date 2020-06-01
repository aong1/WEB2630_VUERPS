new Vue({
  el: '#app',
  data: {
      invis: true, 
      compChoice: -1,
      userChoice: -1,
      userWins: 0,
      compWins: 0,
      result: [
        {message: ''},
        {player: false},
        {comp: false},
        {tie: false}
      ],
      userBar: 0,
      compBar: 0
      
  },
  methods: {
    pick: function (user){
      this.userChoice = user,
      this.compChoice = Math.floor(Math.random() * 3 + 1)
    },

    restart: function () {
      this.userWins = 0
      this.compChoice = -1
      this.userChoice = -1
      this.userWins = 0
      this.compWins = 0
      this.userBar = 0
      this.compBar = 0
      this.invis = true
      this.result = [
        {message: ''},
        {player: false},
        {comp: false},
        {tie: false}
      ]
    },

  },

  computed: {

    updateUserWins() {
      if(this.userWins > 0) {
        this.userBar = 10 * this.userWins; 
      }
    },

    updateCompWins() {
      if(this.compWins > 0) {
        this.compBar = 10 * this.compWins; 
      }
    },

      checkWinner() {
      if ((this.userChoice == 1 && this.compChoice == 3)) {
           this.userWins++
           this.result.push({message: 'COMPUTER CHOSE SCISSORS | ROCK BEATS SCISSORS | PLAYER WINS!', player: true})
      }
      else if  ((this.userChoice == 1 && this.compChoice == 2)){  
            this.compWins++
            this.result.push({message: 'COMPUTER CHOSE PAPER | PAPER BEATS ROCK | COMPUTER WINS!', comp: true},)
      }
      else if  ((this.userChoice == 1 && this.compChoice == 1)){  
          this.result.push({message: 'COMPUTER CHOSE ROCK | YOU HAVE TIED!', tie: true})
      }
      else if ((this.userChoice == 2 && this.compChoice == 1)) {
          this.userWins++
          this.result.push({message: 'COMPUTER CHOSE ROCK | PAPER BEATS ROCK | PLAYER WINS!',player: true})
      }
      else if  ((this.userChoice == 2 && this.compChoice == 3)){  
           this.compWins++
           this.result.push({message: 'COMPUTER CHOSE SCISSORS | SCISSORS BEATS PAPER | COMPUTER WINS!',comp:true})
      }
      else if  ((this.userChoice == 2 && this.compChoice == 2)){  
         this.result.push({message: 'COMPUTER CHOSE PAPER | YOU HAVE TIED!',tie:true})
      }
      else if ((this.userChoice == 3 && this.compChoice == 2)) {
        this.userWins++
        this.result.push({message: 'COMPUTER CHOSE PAPER | SCISSORS BEATS PAPER | PLAYER WINS!',player:true})
      }
      else if  ((this.userChoice == 3 && this.compChoice == 1)){  
         this.compWins++
         this.result.push({message: 'COMPUTER CHOSE ROCK | ROCK BEATS SCISSORS | COMPUTER WINS!',comp:true})
      }
      else if  ((this.userChoice == 3 && this.compChoice == 3)){  
       this.result.push({message: 'COMPUTER CHOSE SCISSORS | YOU HAVE TIED!',tie:true})
      }
       
    },//end CheckWinner method 

    endGame() {
      if (this.userWins == 10) {
        if(confirm('User wins! You won! Play Again?'))
          this.restart()
        }
        
      else if (this.compWins == 10) {
        if(confirm('Computer wins! You lost! Play Again?'))
          this.restart()
      } 
    }
    
  }
});