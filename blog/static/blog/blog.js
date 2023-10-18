class Greeter{
  constructor(name){
    this.name=name
  }
  getGreeting(){
    if (this.name===undefined){
      return 'hello, no name'
    }
    return 'hello, '+this.name
  }
  showGreeting(greetingMessage){
    console.log(greetingMessage)
  }
  greet(){
    this.showGreeting(this.getGreeting())
  }
}

class DelayedGreeter extends Greeter{
  delay=2000

  constructor(name,delay){
    super(name)
    if(delay !== undefined){
      this.delay=delay
    }}
    
    greet(){
      setTimeout(
        ()=>{
          this.showGreeting(this.getGreeting())
        },this.delay
      )
    }
  
}

const dg2 = new DelayedGreeter('sajjad 2 Seconds')
dg2.greet()

const dg1 = new DelayedGreeter('sajjad 1 Second', 1000)
dg1.greet()