new Vue({
  el: '#app',
  data: {
      invis: true, 
      compChoice: -1,
      userChoice: -1,
      userWins: 0,
      compWins: 0,
      result: [
        {message: ''}
      ],
      player: false,
      comp: false,
      tie: false, 
  },
  methods: {
    pick: function (user){
      this.userChoice = user,
      this.compChoice = Math.floor(Math.random() * 3 + 1)
    }
  },

  computed: {

   
      checkWinner() {
        if ((this.userChoice == 1 && this.compChoice == 3)) {
           this.userWins++
           this.result.push({message: 'COMPUTER CHOSE SCISSORS | ROCK BEATS SCISSORS | PLAYER WINS!'})
           this.player = true
           this.comp = false
           this.tie = false
        }
        else if  ((this.userChoice == 1 && this.compChoice == 2)){  
            this.compWins++
            this.result.push({message: 'COMPUTER CHOSE PAPER | PAPER BEATS ROCK | COMPUTER WINS!'})
            this.player = false
            this.comp = true
            this.tie = false
        }
        else if  ((this.userChoice == 1 && this.compChoice == 1)){  
          this.result.push({message: 'COMPUTER CHOSE ROCK | YOU HAVE TIED!'})
          this.player = false
          this.comp = false
          this.tie = true
        }
        else if ((this.userChoice == 2 && this.compChoice == 1)) {
          this.userWins++
          this.result.push({message: 'COMPUTER CHOSE ROCK | PAPER BEATS ROCK | PLAYER WINS!'})
          this.player = true
          this.comp = false
          this.tie = false
       }
       else if  ((this.userChoice == 2 && this.compChoice == 3)){  
           this.compWins++
           this.result.push({message: 'COMPUTER CHOSE SCISSORS | SCISSORS BEATS PAPER | COMPUTER WINS!'})
           this.player = false
           this.comp = true
           this.tie = false
       }
       else if  ((this.userChoice == 2 && this.compChoice == 2)){  
         this.result.push({message: 'COMPUTER CHOSE PAPER | YOU HAVE TIED!'})
         this.player = false
         this.comp = false
         this.tie = true
       }
       else if ((this.userChoice == 3 && this.compChoice == 2)) {
        this.userWins++
        this.result.push({message: 'COMPUTER CHOSE PAPER | SCISSORS BEATS PAPER | PLAYER WINS!'})
        this.player = true
        this.comp = false
        this.tie = false
     }
     else if  ((this.userChoice == 3 && this.compChoice == 1)){  
         this.compWins++
         this.result.push({message: 'COMPUTER CHOSE ROCK | ROCK BEATS SCISSORS | COMPUTER WINS!'})
         this.player = false
         this.comp = true
         this.tie = false
     }
     else if  ((this.userChoice == 3 && this.compChoice == 3)){  
       this.result.push({message: 'COMPUTER CHOSE SCISSORS | YOU HAVE TIED!'})
       this.player = false
       this.comp = false
       this.tie = true
     }
       
        
        
      }  
  }
});