#!/bin/bash
echo Starting sql server with docker;
docker-compose up -d

echo Initialising client with npm and ember
cd client
npm install
node_modules/.bin/ember build --environment=producion
cp dist/index.html ../server/resources/views/ember.php
cp -r dist/assets ../server/public/assets
cd ..

echo Initialising database with artisan
cd server
composer install
cp .env.example .env
php artisan migrate
php artisan db:seed --class=TasksTableSeeder
php artisan serve
cd ..
