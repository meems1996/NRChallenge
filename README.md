# NR Challenge 

Screenshot of solution parsing the entire book *Pride and Prejudice*.
![Alt text](/public/screenshots/screenshotOfApplication.png?raw=true)

Screenshot of running some of the tests. 
![Alt text](/public/screenshots/screenshotTests.png?raw=true)

Screenshot of two files being parsed. These are not long enough to have 100 sequences.
![Alt text](/public/screenshots/screenshotOfTwoFiles.png?raw=true)

Screenshot parsing *War and Peace*, which I never read, but it's a large text. Took less than or about 2 seconds. 
![Alt text](/public/screenshots/warAndPeace.png?raw=true)


## How to Run Program 
### Run Solution
1. Install node
2. Clone repository
3. Run ``` node index.js public/texts/WarAndPeace.text``` to parse *War and Peace* or run ``` node index.js [path/s to text file/s]``` from root folder.

### Run Tests
1. run ```npm install```
2. run ``` npm test ```

## What you would do next, given more time (if anything)?
There is quite a bit more I would do if given more time (I tried to list them in order or priority, but obviously priority can change during team meetings and discussions): 
* I would have *absolutely* written more tests to cover more of the application. I wrote a few tests to show you I have experience writing tests, but even now I wanted to write more, but the time just ran out. I wanted to cover removing various punctuations, removing white spaces, passing in the files and getting back the formatted output, and a lot more. 

* There are a few bugs I noticed but did not have the time to dive deeper into why they are happening and how to fix them. After figuring that out I would also write tests to minimize, or ideally eliminate, them popping up again. 

* I would also write the functionality to accept input on stdin, which I did not have the time to do with this solution.

* I would add much better and more frequent null or undefined checks and display errors if there are some. Something that is user friendly and descriptive.

* I would also look into Docker to make the process of running the application smoother, but I did not want to take away from the time I had to spend on development of the core features. 

* I would spend more time on thinking about how to approach a more efficient solution if we were to pass in 1000 large books into the solution. While approaching this at first, I did start to think how would I do it as a person. If I had more time I would love to have looked into how to process the individual books at the same time (in parallel), or in groups at the same time. In a work place I would get together with the team and discuss several options and see which option is realistic to explore and implement. 


## Any assumptions made during development
There were quite a few assumptions I made during development. 
* I assumed I can count integers as part of the words. My thought process here is that if a particular street number in a novel is mentioned a lot we could catch that. 
* I assumed that the files passed will be .text files. I did not have the time to test more. 
* I assume that I can return all the top 100, even if all sequences are mentioned equal amount of time, the program returns the top 100 (or less if the file is short) in order of whichever one made it into the Map first. 

## Are there bugs that you are aware of?  
Yes, there is one I noticed but did not have the time to investigate deeper. I am sure if I had more time to look into it, more would show up too :)
* From time to time I noticed that some files merge some of their words together especially if I have end of line followed by a word without. This could be remedied by better filtering of the text (removing punctuations, looking into edge cases...).


