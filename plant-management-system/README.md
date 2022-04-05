# PlantManagementSystem - Üzemirányító rendszer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Feladat leírása

A kifejlesztendő alkalmazás alkalmas egy képzeletbeli üzem erőforrásainak menedzselésére. A rendszer alapvető objektumai: munkások, gépek, munkák, feladatok. Egy munka több feladatból áll (legalább 1). Egy feladatot csak 1 gépen lehet elvégezni.
A gépek alaptipusai pl: CNC marógép, CNC eszterga, mérőgép. Pl. Az M1 munka három feladatot tartalmaz: marás (a marógépen végezhető feladat), esztergálás (az esztergán végezhető), mérés (a mérőgépen végezhető). 
A munkák a munkásokhoz rendelhetőek, feltéve ha szabadok éppen.

#### Felhasználási esetek
- Munkások menedszelése
    - Munkások felvitele, listázása. Munkáshoz tartozó információ: név, szakképzettség, órabér, státusz (szabadságon, dolgozik, szabad). A szabad munkásokhoz lehet munkákat rendelni.

- Gépek menedzselése
    - Új gépek megadása/törlése

- Munkák menedzselése
    - Új munka létrehozása. A munkához feladatok rendelése/törlése. A feladatokhoz gépek rendelése/törlése.

- Listázási funkciók
    - Szabad munkások, gépek megjelenítése. ~~Egy adott gép foglaltságának %-os kiadása.~~

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
