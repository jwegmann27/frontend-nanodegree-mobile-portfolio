PIZZA at 60 FPS By: Joseph Wegmann
**********************************
How to Run Pizza.html
*********************
- Go to views inside the frontend-nanodegree-mobile-portfolio.
- Then click on pizza.html file.
- Right click the pizza.html file then select open with (the web browser of your choice)

- Side note: pizza.html is the minified version and pizza-org.html is the not minified version. Use minified 
version for the best pagespeed results.

My way of starting the project is to go through lesson 4 thru 6. And after each one check to see what can be fixed.

Post Lesson 4 JS
- In this lesson the emphasis was requestAnimationFrame and Web Workers.
- When looking at main.js it seems that we may not need to add requestAnimationFrames or Web Workers at the moment. 

Post Lesson 5 Styles and Layout
- Clearly there is a FSL within the pizza webstite.
- First FSL fix required me to get rid of determinedx function and simplify the changePizzaSizes function. 
- The second FSL had to do with the pizza background scrolling. To fix this I took the property that was triggering teh FSL out of the for loop and assigned it to a variable. 


Post Lesson 6 Painting and Composite
- To help with achieving 60fps I modified the amount of pizzas on the screen becuase 200 originally was way too much. 

Overview of fixes to Pizza.html
1. Fixed changePizzaSizes so that no forced sync layout ocurred in the for loop. Also made for loop simplier 
by not using determineDx function.
2. Fixed similar problem with updatePositions function.
3. Lowered the number of pizzas scrolling the screen. 
4. Optimized images for the website. 

Page Speed Insight Optimizations
- Although the fixes above did help as far as my timeline and performance there were still some page speed scores that needed to be raised. 
- First of which was to inline all the css even the bootstrap css. I know it seems to make the page crowded
but it does result in a better pagespeed score.
- I tried to then look at what JS could be asynced but that didnt really help much becusae we main.js cant be asynced or the background pizzas wont show. 
- Then I used grunt to optimize the images. The optimizing of the images was a majority of the page speed increase. 
- Other fixes were to minify any html css or javascript being used. 

Using Grunt
- In this project I really only used grunt for the image optimizing. But it can be used for much more. 
- To use grunt you will first need to install it. type into you cmd prompt "npm install".
- Then run the command "npm install -g grunt-cli".
- After this you will have the intial files but you wil need to install each feature seperate depending on what you need.
- For ex to optimize images first use this cmd to install the module. "npm install grunt-contrib-imagemin --save-dev"
- Then in your gruntfile.js you will need to configure it. Follow this link for instructions how to write your gruntfile,js http://gruntjs.com/sample-gruntfile
- After you add all your modules to run grunt simply type "grunt" while in your working directory.