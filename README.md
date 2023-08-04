# TASK.TRAVEL_ASSISTANT [03.08.2023]

<environment>
-Windows   --> WSL2 with Ubunto
-yarn      --> v1.22.19
-node      --> v18.17.0
-Back-End  --> NodeJs + Express + Prisma + SQLite
-Front-End --> React.JS + TypeScript + Vite

-- HOW TO RUN THE <<FRONT-END>>?

To run the application ui part please run on your terminal the following command(from the main root directory):
<cmd>
- cd front-end
- yarn
- yarn run develop-front

<bash>
  cd back-end && yarn && yarn run develop-back

The back-end will run on --> <http://localhost:5173/>

-- HOW TO RUN THE <<BACK-END>>?

To run the application back-end part please run on your terminal the following command (from the main root directory):
<cmd>
- cd back-end
- yarn
- yarn run develop-back

<bash>
cd front-end && yarn && yarn run develop-front 

The back-end run on --> <http://localhost:5720>

-- SOME NOTES

Source used for the BackEnd with NodeJs + Express + Prisma + SQLite
-LogRocket <https://blog.logrocket.com/crafting-authentication-schemes-with-prisma-in-express/>
-Sukanta Das @ Dev.To <https://dev.to/cristain/how-to-set-up-typescript-with-nodejs-and-express-2023-gf>
-Fredi Manuel @Medium <https://medium.com/@fredimanuelb/how-to-develop-a-react-and-express-application-using-vite-a493f3e844f5>
-B Shelling @ Medium <https://bshelling.medium.com/lets-build-user-authentication-with-express-prisma-and-jwts-ab76dadba033>
-DeveloperHowTo <https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/>
-Prisma Client <https://www.prisma.io/docs/concepts/components/prisma-client>
