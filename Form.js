class Form {
    constructor(){
        //Create elements
        this.enter1 = createElement("h3","Enter Your Name");
        this.enter2 = createElement("h3","Enter Your School Name");
        this.enter3 = createElement("h3","Enter your Class");
        this.enter4 = createElement("h3","Enter your Age");
        this.enter5 = createElement("h3","Enter Your E-mail Address");
        
        // write Questions to Ask
        // Question 1 
        this.que1 = createElement('h4'," ~> Do you think that your school has to be sanitized regularly ? ");
        this.opt1 = createButton("- Yes -");
        this.opt2 = createButton("- Maybe -");
        this.opt3 = createButton("- No -");
            
        // Question 2
        this.que2 = createElement('h4'," ~> Do you think that your school should give Hand Sanitizer to all students (FREE) ?");
        this.opt4 = createButton("- Yes -");
        this.opt5 = createButton("- Maybe -");
        this.opt6 = createButton("- No -");

        // Question 3 
        this.que3 = createElement('h4'," ~> Do you think that your school has to provide Picnic for students this Year(2020) ?");
        this.opt7 = createButton("- Yes -");
        this.opt8 = createButton("- Maybe -");
        this.opt9 = createButton("- No -");

        // Question 4
        this.que4 = createElement('h4'," ~> Do you think that your school should give Masks to all students (FREE) ?");
        this.opt10 = createButton("- Yes -");
        this.opt11 = createButton("- Maybe -");
        this.opt12 = createButton("- No -");
        
        // Question 5 
        this.que5 = createElement('h4'," ~> Do you think that your school should give Gloves to all students (FREE) ?");
        this.opt13 = createButton("- Yes -");
        this.opt14 = createButton("- Maybe -");
        this.opt15 = createButton("- No -");

        //Create Inputs 
        this.email = createInput();
        this.age = createInput();
        this.class = createInput();
        this.school = createInput();
        this.input = createInput();
        
        // Create Button submit button and reset button
        this.button = createButton(" ~ ~ SUBMIT  ~ ~ ");
        this.reset = createButton(" ~ ~ RESET ~ ~ ");

        //Create Greeting Element
        this.greeting = createElement("h3");        
    }

    hide(){
        // Hide them
        this.que1.hide();
        this.opt1.hide();
        this.opt2.hide();
        this.opt3.hide();

        this.que2.hide();
        this.opt4.hide();
        this.opt5.hide();
        this.opt6.hide();

        this.que3.hide();
        this.opt7.hide();
        this.opt8.hide();
        this.opt9.hide();

        this.que4.hide();
        this.opt10.hide();
        this.opt11.hide();
        this.opt12.hide();

        this.que5.hide();
        this.opt13.hide();
        this.opt14.hide();
        this.opt15.hide();

        this.email.hide();
        this.age.hide();
        this.greeting.hide();
        this.class.hide();
        this.input.hide();
        this.school.hide();
        this.enter1.hide();
        this.enter2.hide();
        this.enter3.hide();
        this.enter4.hide();
        this.enter5.hide();
        this.button.hide();
        this.reset.hide();
}

    display(){
        // Create title for your Game
        var title = createElement("h1");//Create variable for title
        title.html("Survey ~ COVID-19");//Give title 
        title.position(570,-20);//Give position to the title
        
        //Give position to all elements , questions (1,2,3,4,5) and inputs + Button (Submit and Reset)
   
        this.que1.position(30,150);
        this.opt1.position(50,200);
        this.opt2.position(110,200);
        this.opt3.position(190,200);
        
        this.que2.position(30,224);
        this.opt4.position(50,274);
        this.opt5.position(110,274);
        this.opt6.position(190,274);

        this.que3.position(30,300);
        this.opt7.position(50,350);
        this.opt8.position(110,350);
        this.opt9.position(190,350);

        this.que4.position(30,370);
        this.opt10.position(50,424);
        this.opt11.position(110,424);
        this.opt12.position(190,424);

        this.que5.position(30,450);
        this.opt13.position(50,500);
        this.opt14.position(110,500);
        this.opt15.position(190,500);
        
        this.enter1.position(100,50);
        this.input.position(100,100);

        this.enter2.position(300,50);
        this.school.position(300,100);   

        this.enter3.position(550,50);
        this.class.position(550,100);

        this.enter4.position(750,50);
        this.age.position(750,100); 

        this.enter5.position(950,50);
        this.email.position(950,100);    
       
        this.button.position(1200,550);
        this.reset.position(1200,500);
       
        //Make mouse preesed function 
        //It Hide the elements , questions and inputs when you press the Button
        this.button.mousePressed(()=>{
            
            this.que1.hide();
            this.opt1.hide();
            this.opt2.hide();
            this.opt3.hide();

            this.que2.hide();
            this.opt4.hide();
            this.opt5.hide();
            this.opt6.hide();

            this.que3.hide();
            this.opt7.hide();
            this.opt8.hide();
            this.opt9.hide();

            this.que4.hide();
            this.opt10.hide();
            this.opt11.hide();
            this.opt12.hide();

            this.que5.hide();
            this.opt13.hide();
            this.opt14.hide();
            this.opt15.hide();

            this.enter1.hide();
            this.enter2.hide();
            this.enter3.hide();
            this.enter4.hide();
            this.enter5.hide();
            this.input.hide();
            this.class.hide();
            this.school.hide();
            this.age.hide();
            this.email.hide();
            this.button.hide();
            this.reset.hide();
            
            //Give information to player.js about the inputs 
            player.options = this.opt1.value();
            player.email = this.email.value();
            player.age = this.age.value();
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
            
        });
    
        // Make reset function to see what will happen when reset button pressed
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
          });
    }
}
