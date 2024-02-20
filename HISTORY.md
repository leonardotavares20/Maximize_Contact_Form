### Requirements identified

- Contact page responsive
- Inputs and form with validation

### Project Structure

- Initially i decided to define a structure of paths that are:

* Uncompiled files: Directory where .styl files are managed,by components and layout parts.
* Static files: Located in `public` directory, where contain files of fonts, images and application script, and compiled css by stylus.

- I decided to use Stylus because the syntax is very simple and minimalist.

- Right after i define the structure, i decided to use the Docker, because i want avoid problems of compatibility in systems like windows, linux and mac, and prepare the project for production, i set the nginx.conf, setting the port where the application will run on server, after this i set the Dockerfile, where were listed the dependencies of projectand where it should copy the files from and in which directory it should work, then it compiles the .styl files to pure css, and finally exposes the port to the gninx; The commands for building the container and for starting and stopping the container are in the project readme.

- Now the next step is to define the fonts that will be use, the color palette and the style sctructure of the components .styl

### Switching from Portuguese to English

- Today i decided to use English in the commits, in readme.md and history.md, because everything is in English and this make the project most standardized.
