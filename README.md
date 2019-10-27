# ApartmentListing
A web application built with Django, React and Redux that allows the client to manage listing of houses either for sale or rent and attach agent to each aparttment

To use this project, clone the repository and 

For Django
    pip install -r requirements.txt
    python manage.py makemigrations
    python manage.py migrate
    python manage.py createsuperuser
    python manage.py runserver
    
For React
    npm install
    npm build
    npm start
    
Djangorestframework was used to create API endpoint:
Cloudinary was used to store the media files, you can configure your cloudinary_storage in the settings.py or you can choose to not use cloudinary 
in which you will have to go to the apartment.models and change the fields to use ImageField.

You can run this application with django server after your npm build have completed, which means the index file which will be compiled in the build folder
will serve as your template or you can run them different where npm start will run the app on Localhost:3000 while python manage.py runserver will
start the server side on port 127.0.0.1.

