class Form {
    constructor(){
        //Create elements
        this.enter1 = createElement("h3", "Enter Your Name");
        this.enter2 = createElement("h3", "Enter Your School Name");
        this.enter3 = createElement("h3", "Enter your Class and your Age");
        //Create Inputs 
        this.class = createInput();
        this.school = createInput();
        this.input = createInput();
        // Create Button
        this.button = createButton("START");
        //Create Greeting Element
        this.greeting = createElement("h3");        
    }

    hide(){
        // Hide them
        this.greeting.hide();
        this.class.hide();
        this.input.hide();
        this.school.hide();
        this.button.hide();
        this.enter1.hide();
        this.enter2.hide();
        this.enter3.hide();
}

    display(){
        // Create title for your Game
        var title = createElement("h1");//Create variable for title
        title.html("Hurdle Game");//Give title 
        title.position(570,0);//Give position to the title
        
        //Give position to all elements and inputs + Button
        this.enter1.position(550,100);
        this.enter2.position(550,200);
        this.enter3.position(550,300);
        this.school.position(550,250);
        this.input.position(550,150);   
        this.class.position(550,350);     
        this.button.position(600,500);
       
        //Make mouse preesed function 
        //It Hide the elements and inputs when you press the Button
        this.button.mousePressed(()=>{
            this.school.hide();
            this.enter2.hide();
            this.class.hide();
            this.enter3.hide();
            this.enter1.hide();
            this.input.hide();
            this.button.hide();
            //Give information to player.js about the inputs 
            player.school = this.school.value();
            player.name = this.input.value();
            player.class = this.class.value();
            playerCount+=1;
            player.index = playerCount;
            
            //Update the player and playerCount
            player.update();
            player.updateCount(playerCount);
            //Give greeting 
            // It display when then you pressed the button 
           this.greeting.html("Welcome " + player.name);
           this.greeting.position(530,160);//Give position to the Greeting
        })
    }
}
