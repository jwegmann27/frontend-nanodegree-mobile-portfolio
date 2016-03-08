PIZZA at 60 FPS By: Joseph Wegmann
**********************************
How to Run Pizza.html
*********************
- Go to views inside the frontend-nanodegree-mobile-portfolio.
- Then click on pizza.html file.
- Right click the pizza.html file then select open with (the web browser of your choice)

My way of starting the project is to go through lesson 4 thru 6. And after each one check to see what can be fixed.

Post Lesson 4 JS
- In this lesson the emphasis was requestAnimationFrame and Web Workers.
- When looking at main.js it seems that we may not need to add requestAnimationFrames or Web Workers at the moment. 

Post Lesson 5 Styles and Layout
- Clearly there is a FSL within the pizza webstite.
- First FSL fix required me to get rid of determinedx function and simplify the changePizzaSizes function. 
- The second FSL had to do with the pizza background scrolling. To fix this I took the property that was triggering teh FSL out of the for loop and assigned it to a variable. 


Post Lesson 6 Painting and Composite
- To help with achieving 60fps I used will change transform. This is important becuase it will lesson 

Overview of fixes to Pizza.html
1. Fixed changePizzaSizes so that no forced sync layout ocurred in the for loop. Also made for loop simplier 
by not using determineDx function.
2. Fixed similar problem with updatePositions function.
3. Lowered the number of pizzas scrolling the screen. 
4. Optimized images for the website. 