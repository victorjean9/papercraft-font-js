var darkTheme = false;
var spacing = "1em";
var fontSize = "2.5em";
var primaryColor = "";
var secondaryColor = "";

function convertTextToPapercraftFont() {
    var elementID = "papercraft-pool";
    var element = document.getElementById(elementID);
    element.innerHTML = '';

    var input = document.getElementById("input-text-to-convert");
    var papercraftFont = new PapercraftFont(elementID);
    papercraftFont.setSpacing(spacing);
    papercraftFont.setFontSize(fontSize);
    
    if(darkTheme){
        papercraftFont.dark();
    }

    if(primaryColor != ""){
        papercraftFont.setPrimaryColor(primaryColor);
    }

    if(secondaryColor != ""){
        papercraftFont.setSecondaryColor(secondaryColor);
    }

    papercraftFont.text(input.value)
}

function alphabetExample() {
    var elementID = "papercraft-alphabet";

    var element = document.getElementById(elementID);
    element.innerHTML = '';

    var papercraftFont = new PapercraftFont(elementID);
    papercraftFont.setSpacing(spacing);
    papercraftFont.setFontSize(fontSize);

    if(darkTheme){
        papercraftFont.dark();
    }

    if(primaryColor != ""){
        papercraftFont.setPrimaryColor(primaryColor);
    }

    if(secondaryColor != ""){
        papercraftFont.setSecondaryColor(secondaryColor);
    }

    papercraftFont.text("abcdefghijklmnopqrstuvwxyz");
}

function setDark() {
    var checkboxID = "set-dark";
    var checkBox = document.getElementById(checkboxID);
    if (checkBox.checked == true){
        darkTheme = true;
        
        var body = document.getElementsByTagName("body")[0];
        body.style.backgroundColor = "#333333";

        var inputTextToConvertID = "input-text-to-convert";
        var inputTextToConvert = document.getElementById(inputTextToConvertID);
        inputTextToConvert.style.color = "white";

        var inputSpacingID = "input-spacing";
        var inputSpacing = document.getElementById(inputSpacingID);
        inputSpacing.style.color = "white";

        var inputFontSizeID = "input-font-size";
        var inputFontSize = document.getElementById(inputFontSizeID);
        inputFontSize.style.color = "white";

        var inputPrimaryColorID = "input-primary-color";
        var inputPrimaryColor = document.getElementById(inputPrimaryColorID);
        inputPrimaryColor.style.color = "white";

        var inputSecondaryColorID = "input-secondary-color";
        var inputSecondaryColor = document.getElementById(inputSecondaryColorID);
        inputSecondaryColor.style.color = "white";

    } else {
        darkTheme = false;

        var body = document.getElementsByTagName("body")[0];
        body.style.backgroundColor = "white";

        var inputTextToConvertID = "input-text-to-convert";
        var inputTextToConvert = document.getElementById(inputTextToConvertID);
        inputTextToConvert.style.color = "black";

        var inputSpacingID = "input-spacing";
        var inputSpacing = document.getElementById(inputSpacingID);
        inputSpacing.style.color = "black";

        var inputFontSizeID = "input-font-size";
        var inputFontSize = document.getElementById(inputFontSizeID);
        inputFontSize.style.color = "black";

        var inputPrimaryColorID = "input-primary-color";
        var inputPrimaryColor = document.getElementById(inputPrimaryColorID);
        inputPrimaryColor.style.color = "black";

        var inputSecondaryColorID = "input-secondary-color";
        var inputSecondaryColor = document.getElementById(inputSecondaryColorID);
        inputSecondaryColor.style.color = "black";
    }

    convertTextToPapercraftFont();
    alphabetExample();
}

function setSpacing() {
    var inputSpacingID = "input-spacing";
    var inputSpacing = document.getElementById(inputSpacingID);

    if((inputSpacing.value != "") &&  (inputSpacing.value != 0)){
        spacing = inputSpacing.value;
    } else {
        spacing = "1em";
    }

    convertTextToPapercraftFont();
    alphabetExample();
}

function setFontSize() {
    var inputFontSizeID = "input-font-size";
    var inputFontSize = document.getElementById(inputFontSizeID);

    if((inputFontSize.value != "") &&  (inputFontSize.value != 0)){
        fontSize = inputFontSize.value;
    } else {
        fontSize = "2.5em";
    }

    convertTextToPapercraftFont();
    alphabetExample();
}

function setPrimaryColor() {
    var inputPrimaryColorID = "input-primary-color";
    var inputPrimaryColor = document.getElementById(inputPrimaryColorID);

    primaryColor = inputPrimaryColor.value;

    convertTextToPapercraftFont();
    alphabetExample();
}

function setSecondaryColor() {
    var inputSecondaryColorID = "input-secondary-color";
    var inputSecondaryColor = document.getElementById(inputSecondaryColorID);

    secondaryColor = inputSecondaryColor.value;

    convertTextToPapercraftFont();
    alphabetExample();
}