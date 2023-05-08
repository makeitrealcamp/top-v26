# Rent Card

This is a projecyo to allow rent a card

## Technologies
- React-typescript
- Redux toolkit
- MUI (Materia UI)
- React router 
- Json server to api fake
- React testing libraries

Project created with Vite

## How to start

1. Clone repository
 
    ```git clone https://github.com/mariadriada/bike-rental.git```

2. Install dependencies. In folder of project by the terminal
 
    ```npm install```

3. Launch api on http://localhost:3000/
 
    ```npm run server```

4. Launch front on http://127.0.0.1:5173/
 
    ```npm run dev```

4. To launch unit test
 
    ```npm run test```


## About decisions

The instructions were clear. 
At moment when I was programing I have a question about the calc of prices, bacause for example; when the bike is normal or old, the price is calculate about 3 or 5 days respectively and not especified if there is an selection of one day or two or even three.
And then I decided that in that cases make a basic calc as a eectrical bike

To the API, I decided use json server because is an easy library to launch an API based on a json file. In this case the json file configured is found in /src/data/db.json

About the folder organization, I decided create pages and components where the pages is a root and the components are partials uses in the pages

The redux configuration is on redux-toolkit folder

The rest of folders and files are semanticaly naming to  express each functionality

I decided add MUI to the project because I think that is better an interface, but there are much to improve.

In order to to the unit test, I decided apply unit test to the components, to make some implementation, but I know that in a real project must be cover the maximum features posible

________
Thank you very much!

I will be attentive to any doubs

Maria Giraldo <mariagiraldo4@gmail.com>
