# Shopify Production Developer Intern

This repository contains solution to the Shopify 2022 Production Developer Intern Challenge.

## Objective

Build an inventory tracking web application for a logistics company. Allow deletion and undeletion of items with comments. Associate items with cities and also fetch items's city weather from weather api and show it with list of items.[Documentation](<[https://docs.google.com/document/d/1PoxpoaJymXmFB3iCMhGL6js-ibht7GO_DkCF2elCySU/edit](https://docs.google.com/document/d/1cgmV2DW5mEOxhh5ekyopU4Cef07FNalP7WqAJdgpBuw/edit)>)
(Focoused on the backend of application as evaluation dosent depends on the front code.)

## Features

- Create Inventory Items
- View Inventory Items
- Update Items
- Softdelete Items
- Recover Items
- Fetcher weather and show it with cities.

## Demo

- Replit (https://replit.com/@prerak131/productionEngineerChallenge-?v=1)

## Deployment

To deploy this project:

- Clone it from the [github](https://github.com/prerak13/productionEngineerChallenge-)
- run "npm i"
- run "npm run dev" (This shall run nodeJS on 5001 port and reactJS on 3000 port.)

## Foldure Structure

- ShopifyBackendChalange: Contains backend code (NodeJS)
- shopifyfrontend: Contains frontend code (ReactJS)

## API Reference

| type   | URI                    | Parameter                    | Type              | Description                                                                        |
| :----- | :--------------------- | :--------------------------- | :---------------- | :--------------------------------------------------------------------------------- |
| GET    | /items                 | -                            | -                 | Returns all active items                                                           |
| GET    | /items/deleted         | -                            | -                 | Returns all deleated items                                                         |
| GET    | /items/:itemID         | itemID                       | String            | Returns item with specific item id                                                 |
| POST   | /items/                | Item object                  | JSON body         | Creates new item                                                                   |
| PUT    | /items/:itemID         | itemID, updated Item in body | String, JSON body | Updates item with id=itemID                                                        |
| DELETE | /items/:itemID         | itemID, deletionComment      | String, JSON body | Soft deletes item with itemID provided. Adds deletion comment to the deleted item. |
| PUT    | /items/restore/:itemID | itemID                       | String            | Restores item with id equals to itemID                                             |

## Feedback

If you have any feedback, please reach out to us at pc@dal.ca

## 🚀 About Me

I'm a full stack developer and cloud engineer currently persuing my postgraduation at Dalhousie University.
I am looking for co-op/full time job oppertunities in Canada.
Feel free to contact me on:

- [Medium](https://medium.com/@prerakchoksi)
- [Git](https://github.com/prerak13)
- [Linkedin](https://www.linkedin.com/in/prerak13/)
- pc@dal.ca
