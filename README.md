You need to have installed docker before anything else below!

You can start this page using:

1. docker build -t my-app . #while on the beginning of project
2. docker run -it --rm -p 3000:3000 my-app
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.  

#      
Side-notes  
- If u want to test this in testing mode which will not be accurate please do so by commending in dockerfile the last CMD npm run start and uncomment the npm run dev
- to future contributors...don't commit or push with dockerfile having uncommented the CMD npm run start ...this is the only safe choice so the developer see it is actually correct ... 
#    
If you are done please free up your space with:
- docker image prune -f

