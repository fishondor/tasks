# Tasks

Example tasks managing application.  
Written with Ember.js V2.18 for client and Laravel V5.2 for server.

## Dependencies

### Client

**Ember.js** - As specified in <https://guides.emberjs.com/v2.18.0/getting-started/#toc_dependencies>

### Server

**Laravel** - as specified in <https://laravel.com/docs/5.2/installation#installation>

**DATABASE** - this repository includes a _docker-compose_ file for running SQL server that this Laravel installation is set to use by default. This will of course require docker and docker compose. Using any other database is possible but will require setting Laravel environment variables accordingly.

## Running

### using docker for SQL database

* Clone this repository
* `cd tasks`
* `npm run start`
* The app will be running at <http://localhost:8000>

#### This will

1. Run SQL server with `docker-compose up`
2. Install all Ember dependencies using npm
3. build app client files
4. Copy the files into Laravels views serving directory
5. Install all Laravel dependencies using composer
6. Create .env file from .env.example, all necessary variables are already defined there (normally environment variables would not be defined like this but this is for the example of course :stuck_out_tongue_winking_eye:)
7. Set database table and insert a few records using Laravels migrations and seeds
8. Start development server with artisan serve

### Using other database

Alternatively, you can use your own database instance.

* Clone this repository
* Create .env file in **server** directory
* Copy .env.example to .env and edit db properties for your db installation
* `npm run build` in the root directory
* in **server** directory run `php artisan serve`

## Running each module individually

Each module can be executed independently from its folder:  
Server - `php artisan serve`

* requires
    1. `composer install`
    2. Setting environment variables in .env
    3. Running database (any of the supported by Laravel or the current SQL provided with docker here)
    4. Executing `php artisan migrate`
    5. Optional `php artisan db:seed --class=TasksTableSeeder` to start with data

Client - `node_modules/.bin/ember serve`

* This requires only `npm install`

## Testing

Tests can run individually for each module. Not many where written though (due to lack of time), only fixed to pass and added integration tests for footer component (can be executed with `node_modules/.bin/ember test --filter="integration"`).
