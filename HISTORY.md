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

  - Initially, I decided to start with the most challenging part I noticed in the design, which is the image with the word "contact" written on it, with another image underneath it. At first, I thought about achieving this effect by placing the image with the word "contact" and an outline on top of the main image, and below it, another image with the same word "contact" written but without the outline. However, I thought this might not be the best approach because it would result in two images with the same alt text="Contact" in the HTML. So, I started to attempt doing this with direct text in the HTML, and I even managed to make the text transparent using the property: text-stroke. However, I simply couldn't achieve the desired result with just text. I did several searches and tried to find references, but still couldn't figure it out. I attempted to use properties like mask-image and mix-blend-mode, but still couldn't succeed. Then, I went back to my initial idea and managed to achieve the desired result only with position: absolute, applying it to both images. This time, I managed to at least hide one of the images with the same alt text from screen readers, using the attribute: aria-hidden="true". Definitely, this is not a result that I like. I believe there are other ways to achieve the same effect, but perhaps my CSS knowledge at the moment is not sufficient. However, at least the visual result is similar to the design.

- Header:

  - As I mentioned in the section about the HTML structure, in the Header, I placed only the site's logo. This is because, although they are on the same line as the logo, on mobile devices, these social media icons are placed together with the navigation menu. Therefore, if I placed them along with the logo, I would have two lists of links in the HTML. Like any element, it occupies space in the layout, and in the style of the main image, it had to be positioned at the top of the page. Initially, I achieved this effect using translateY, but if you increased the screen height, the translate property wouldn't adjust properly. After some time, the solution was to define the Header with a fixed position, which behaves similarly to the position absolute property but remains fixed on the screen when scrolling. This allows the items below to occupy the space of the header, and now both the main image and the navigation menu links can be adjusted without using any properties to manually move the layout.

- Form:

  - In the form section, I divided the elements into 4 blocks, which were: input select, standard inputs, text area, and form submission. In the input select, I removed the default styles with -webkit-appearance: none; and then added custom styles, such as the downward arrow, which is positioned inside the input with position: absolute. Additionally, the other fields were styled as the design required. There was a certain trick that if you don't pay much attention, you might miss: in the input, instead of using a placeholder, the position should be given to the label because when the user starts typing, the "placeholder" should move up a bit. This logic was implemented with JavaScript. Basically, I select all inputs with querySelectorAll, loop through each one with forEach, add an event listener for "focus", get the previous element in the DOM tree, which is the label in this case, and when the input is focused, a class is added to the label. The same process happens when the input is blurred with the "blur" event, but before removing the class, I check if there is any value in the input. If there is no value, the class is removed. The text area and form submission are styled according to the design requirements.

- Navigation Menu and Footer: Both elements are as per the design requirements.

- Next steps: Now, the next steps are to consider the responsiveness of the application and input validation.

## Validation of the form:

- I chose to perform individual validation for each input and the overall validation of the form, using the object-oriented paradigm. I chose this paradigm because it provides greater clarity about what your code is about, allows better separation of functions for each object, and also enables the reuse of methods from other objects, which also helps in code reuse and avoids duplication.

- As I mentioned, I performed individual validation and overall form validation, but let's start with the overall form validation.

# Form Validation(FormValidator):

class FormValidator {
constructor(selectorForm, selectorInputs) {
this.form = document.querySelector(selectorForm);
this.inputs = document.querySelectorAll(selectorInputs);

    this.form.addEventListener("submit", this.formIsValid.bind(this));

}

formIsValid = (event) => {
event.preventDefault();
let dataUser = {};
const isValid = Array.from(this.inputs).every((input) => {
const inputIsValid = new EmptyInputValidator(input);
if (inputIsValid.validateInputs()) {
dataUser[input.name] = input.value;
}
return inputIsValid.validateInputs();
});

    if (!isValid) {
      return;
    }

    if (isValid) {
      console.log(dataUser);
    }

};
}

class EmptyInputValidator {
constructor(inputElement) {
this.inputElement = inputElement;
}

validateInputs() {
if (this.inputElement.nodeName === "SELECT") {
if (this.inputElement.selectedIndex === 0) {
const spanError = this.inputElement.nextElementSibling;
spanError.textContent = "Selecione uma categoria";
this.inputElement.focus();
return false;
} else {
return true;
}
}

    if (this.inputElement.type === "checkbox") {
      if (!this.inputElement.checked) {
        const spanError = this.inputElement.nextElementSibling;
        spanError.textContent = "Marque a caixa de verificação";
        this.inputElement.focus();
        return false;
      } else {
        return true;
      }
    }

    if (this.inputElement.value == "") {
      this.inputElement.focus();
      const spanError = this.inputElement.nextElementSibling;
      spanError.textContent = "Por favor preencha este campo";
      return false;
    } else {
      return true;
    }

}
}

- The general idea of ​​this class is to validate whether the inputs are valid when the form's submit event occurs. Initially, I instantiate the form by passing the form's ID as the first parameter, and as the second parameter, a class that is present in all inputs. Within the constructor, I capture the passed elements, and on the form element, I add a submit event listener, passing the form element itself as a parameter to the 'formIsValid' function, using the 'bind' method that allows passing a predefined context to the 'formIsValid' function, passing the form element itself with 'this'.

- In the 'isFormValid' function, I prevent the default behavior of the submit event with 'event.preventDefault()'. Still within the function, I handle the validation of the inputs. I perform this verification by transforming the 'NodeList', which is what 'querySelectorAll' returns, into an array with 'Array.from'. Then I use the 'every' method, which basically returns true or false, checking if all elements of the array meet a condition or are simply true. The method iterates through each input and checks if its value is not empty at the time of submission. I perform this verification with the 'EmptyInputValidator' class, and basically pass the element to it. This class has some conditions that, if met, return true or false. If it returns false, focus is given to the first input found that is not valid. If all inputs are valid, the user's data is displayed in the console, but it could also have been sent to a database like Firebase, for example.

# Individual validation

- I also perform individual validation of the inputs. Initially, I was just instantiating class by class passing the ID, and within them, performing a very similar process for various classes, which generally resulted in a lot of duplicated code. So, I decided to take those parts that had a lot of repetition and that basically all inputs had, and created a base class where it receives: the input element, the error message, the minimum size, the maximum size, and the span element where the error message would be displayed. Within this class, I placed some functions that are repeated in other classes. In these functions, the spanError received in the base class is used to receive the error or success messages passed. I didn't start the code production from this part, but I find it easier to explain in a general way and then move on to more individual parts.

class BaseValidate {
constructor(selectorId, errorMessage, minLength = 0, inputEmpty) {
this.inputElement = document.getElementById(selectorId);
this.errorMessage = errorMessage;
this.minLength = minLength;
this.inputEmpty = inputEmpty;
this.spanError = this.inputElement.nextElementSibling;
}

displayErrorMessage() {
this.spanError.textContent = this.errorMessage;
}

displayInputEmpty() {
this.spanError.textContent = this.inputEmpty;
}

displayValidInput() {
this.spanError.textContent = "";
}

isValidPhone(phone) {
const phoneRegex = /^\d+$/;
return phoneRegex.test(phone);
}

isValidEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}
}

- Below it, I have the InputValidator Class, which has a more general type of validation. It extends the BaseValidate Class, passing with 'super' the elements and messages from the other Classes that are derived from it. Essentially, it performs the verification with a 'setTimeout' in the input event, meaning that when the user types in the input, it checks if what the user typed is below the required number of characters. If the user types and removes the field, it displays another message with the method derived from the Base Class. I decided to use setTimeout to perform this verification because besides avoiding this verification after each keystroke, the user has time to fill in the field correctly and has an explanation of what the field requires. This Class generally handles validating simpler inputs, and it has other inputs that derive from it such as name, company, and message.

class InputValidator extends BaseValidate {
constructor(selectorId, errorMessage, minLength = 0, inputEmpty) {
super(selectorId, errorMessage, minLength, inputEmpty);
this.inputElement.addEventListener("input", this.inputIsValid.bind(this));
}

inputIsValid() {
setTimeout(() => {
if (this.inputElement.value.trim().length < this.minLength) {
this.displayErrorMessage();
} else {
this.displayValidInput();
}

      if (this.inputElement.value === "") {
        this.displayInputEmpty();
      }
    }, 1000);

}
}

- The other Classes also derive from the Base and InputValidator classes, but they have a more specific type of verification, such as regex testing in the email and also checking if the type of the entered value is a number.

## Responsive

- In the responsive part of the project, I used media queries. I couldn't standardize the breakpoint of each media query. I also used a lot of properties such as position, percentage, transform, flex, and vw. Most of the breakpoints are within the components themselves, which I particularly don't like, but due to lack of time, I couldn't organize it better. I also took some liberties that weren't in the design of the navigation menu on mobile and desktop to close the menu when the user clicked on the open button. I placed the close button aligned with the icons and added a border to the menu so the user can differentiate the menu from the background of the site, as the site's background is also white. Also, in displaying error messages in the inputs. Overall, the project is responsive down to 360 pixels.

## Things I would have liked to add:

I would like to add some animations to the error messages and also to the page in general. I believe this enhances the user experience on the site. I would do this with standard CSS keyframes or some library to facilitate development. I would also like to give feedback when the user submits the form by redirecting them to a success or failure page upon submission, but this would be a bit more complex to develop. Additionally, I would like to store the information entered in Firebase, but due to time constraints, it wasn't possible. I would do this with async/await and the fetch method, sending a POST request.

## Final thoughts
- This was a project I enjoyed developing. In a way, despite being just a form page, there are several aspects to consider, from sending information to page responsiveness, feedback on registration for the user, among other things. I put a lot of effort into this project to make it the best possible within my current knowledge, and I hope that whoever is reviewing it enjoys it or has enjoyed it.