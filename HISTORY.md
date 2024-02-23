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

- Today i decided to use English in the commits, in readme.md and history.md, because everything is in English and this make the project most standardized, and this is a good practice.

### HTML structure

HTML - The HTML is structured into 3 main blocks, which are: Header, Main, and Footer.

- Header: Within the Header, there is only the website's logo. Initially, I thought about placing the Navigation Menu in a Nav tag within the Header, but later this would imply in the site's responsiveness, so I only included the Logo

- Main: The structure of the main is divided into three tags, which are: Aside, Section, Nav.

  - Aside: Inside the Aside tag, I placed elements that are not necessarily the main content of the site but are related to the main content, which is the form registration, since it includes things like contact-related images such as phone numbers and email addresses.

  - Section: Within the Section tag, I decided to place the form element because it clearly indicates that the form is the main content of the page.

    - Form: Within the form element, I decided to group related fields such as labels and inputs in fieldsets, associating the labels and inputs with attributes like for, id, and name. Among other attributes included are type, required, maxlength, and minlength. Other elements contained within the form element include select and textarea.

  - Nav:
    Inside the Nav tag are the links to social media and also the site's navigation menu.

- Footer:
  Inside the Footer tag, there are the copyright terms and the links to social media.

### Css

-- Structure:The CSS structure is based on components and layout parts to which these components belong.

-- Preprocessor and Methodology

- Methodoloy:
  This project had the requirement to use the BEM methodology. I've noticed that following the BEM methodology results in a much more structured and easily maintainable CSS code, as it is based on three very simple blocks.

- Stylus:
  Stylus has a very simple syntax, and with its support for the BEM methodology using the &, it becomes much easier to understand the written CSS code. It also has various interesting features such as mixins, which are not exclusive to Stylus, but greatly aid in code reuse, as well as other functions that allow you to create more complex CSS code. It's definitely on my study list.

-- Components

- Main Image:

  * Initially, I decided to start with the most challenging part I noticed in the design, which is the image with the word "contact" written on it, with another image underneath it. At first, I thought about achieving this effect by placing the image with the word "contact" and an outline on top of the main image, and below it, another image with the same word "contact" written but without the outline. However, I thought this might not be the best approach because it would result in two images with the same alt text="Contact" in the HTML. So, I started to attempt doing this with direct text in the HTML, and I even managed to make the text transparent using the property: text-stroke. However, I simply couldn't achieve the desired result with just text. I did several searches and tried to find references, but still couldn't figure it out. I attempted to use properties like mask-image and mix-blend-mode, but still couldn't succeed. Then, I went back to my initial idea and managed to achieve the desired result only with position: absolute, applying it to both images. This time, I managed to at least hide one of the images with the same alt text from screen readers, using the attribute: aria-hidden="true". Definitely, this is not a result that I like. I believe there are other ways to achieve the same effect, but perhaps my CSS knowledge at the moment is not sufficient. However, at least the visual result is similar to the design.

- Header:
   * As I mentioned in the section about the HTML structure, in the Header, I placed only the site's logo. This is because, although they are on the same line as the logo, on mobile devices, these social media icons are placed together with the navigation menu. Therefore, if I placed them along with the logo, I would have two lists of links in the HTML. Like any element, it occupies space in the layout, and in the style of the main image, it had to be positioned at the top of the page. Initially, I achieved this effect using translateY, but if you increased the screen height, the translate property wouldn't adjust properly. After some time, the solution was to define the Header with a fixed position, which behaves similarly to the position absolute property but remains fixed on the screen when scrolling. This allows the items below to occupy the space of the header, and now both the main image and the navigation menu links can be adjusted without using any properties to manually move the layout.

- Form: 
    * In the form section, I divided the elements into 4 blocks, which were: input select, standard inputs, text area, and form submission. In the input select, I removed the default styles with -webkit-appearance: none; and then added custom styles, such as the downward arrow, which is positioned inside the input with position: absolute. Additionally, the other fields were styled as the design required. There was a certain trick that if you don't pay much attention, you might miss: in the input, instead of using a placeholder, the position should be given to the label because when the user starts typing, the "placeholder" should move up a bit. This logic was implemented with JavaScript. Basically, I select all inputs with querySelectorAll, loop through each one with forEach, add an event listener for "focus", get the previous element in the DOM tree, which is the label in this case, and when the input is focused, a class is added to the label. The same process happens when the input is blurred with the "blur" event, but before removing the class, I check if there is any value in the input. If there is no value, the class is removed. The text area and form submission are styled according to the design requirements.

- Navigation Menu and Footer: Both elements are as per the design requirements.

- Next steps: Now, the next steps are to consider the responsiveness of the application and input validation.

