Tasks
==========
Example tasks managing application.  
Writen with Ember.js V2.18 for client and laravel V5.2 for server.

## Dependencies

### Client:
**Ember.js** - As specified in https://guides.emberjs.com/v2.18.0/getting-started/#toc_dependencies

### Server
**Laravel** - as specified in https://laravel.com/docs/5.2/installation#installation  
**DATABASE** - this repository includes a _docker-compose_ file for running SQL server that this laravel installation is set to use by default. This will of course require docker and docker compose. Using any other database is possible but will require setting laravel environment variables accordingly.

## Running
### using docker for SQL database
* Clone this repository
* `cd tasks`
* `npm run start`
* The app will be running at http://localhost:8000
#### This will:
1. Run SQL server with `docker-compose up`
2. Install all Ember dependencies using npm 
2. build app client files
3. Copy the files into laravels views serving directory
4. Install all Laravel dependencies using composer
5. Create .env file from .env.example, all neccessary variables are allready defined there (normaly environment variables would not be defined like this but this is for the example of course :stuck_out_tongue_winking_eye:)
6. Set database table and insert a few records using laravels migrations and seeds
7. Start development server with artisan serve

### Using other database
Alternatively, you can use your own database instace.

* Clone this repository
* Create .env file in **server** directory
* Copy .env.example to .env and edit db properties for your db installation
* `npm run build` in the root directory
* in **server** directory run `php artisan serve`
