class PapercraftFont{

    defaultPrimaryColor = "#eee";
    defaultSecondaryColor = "#ccc";
    defaultSpacing = "1em";

    pathBack = {
        space: "",
        a: " M16 0 L32 32 L0 32 Z ",
        b: "M0 0 L16 0 L32 18 L26 32 L0 32 Z",
        c: "M0 0 L28 0 L0 32 Z",
        d: "M0 0 L16 0 L32 18 L28 32 L0 32 Z",
        e: "M0 0 L16 0 L32 16 L24 24 L32 32 L0 32 Z",
        f: "M0 0 L16 0 L32 16 L0 32 Z",
        g: "M0 0 L28 0 L0 32 Z M0 32 L32 16 L32 32 Z",
        h: "M0 0 L6 0 L12 32 L0 32 Z M20 0 L32 0 L32 32 L22 32 Z",
        i: "",
        j: "M20 0 L32 0 L32 32 L16 32 Z",
        k: "M0 0 L32 0 L0 32 Z",
        l: "M0 0 L14 0 L16 32 L0 32 Z",
        m: "M32 0 L32 32 L0 32 Z",
        n: "M20 0 L32 0 L32 32 L16 32 Z",
        o: "",
        p: "M0 0 L16 0 L12 32 L0 32 Z",
        q: "M0 0 L32 0 L32 40 L0 24 Z",
        r: "M0 16 L32 32 L0 32 Z",
        s: "M0 0 L32 16 L32 32 L0 16 Z",
        t: "M0 0 L32 0 L32 10 L22 10 L22 32 L10 32 L10 10 L0 10 Z",
        u: "M0 0 L6 0 L16 32 L2 32 Z",
        v: "M0 0 L32 0 L16 32 Z",
        w: "M0 0 L40 0 L32 32 Z",
        x: "M0 0 L32 0 L16 16 Z M0 32 L16 16 L32 32 Z",
        y: "M0 0 L32 0 L22 12 L22 32 L10 32 L10 16 Z",
        z: "M0 0 L32 0 L32 16 L0 8 Z M0 20 L32 24 L32 32 L0 32 Z"
    }

    pathFront = {
        space: "",
        a: " M16 0 L20 24 L0 32 Z ",
        b: "M0 0 L26 0 L32 6 L0 32 Z",
        c: "M0 0 L30 0 L32 8 Z M0 8 L32 32 L0 32 Z",
        d: "M0 0 L22 26 L0 32 Z",
        e: "M0 0 L32 0 L0 32 Z",
        f: "M0 0 L32 0 L0 32 Z",
        g: "M0 0 L30 0 L32 8 Z M0 8 L32 32 L0 32 Z",
        h: "M32 0 L32 20 L0 32 L0 12 Z",
        i: "M10 0 L22 0 L22 32 L10 32 Z",
        j: "M0 24 L32 32 L0 32 Z",
        k: "M0 0 L32 32 L0 32 Z",
        l: "M0 32 L4 20 L32 26 L32 32 Z",
        m: "M0 0 L32 32 L0 32 Z",
        n: "M0 0 L32 32 L0 32 Z",
        o: "M0 0 L32 0 L32 32 L0 32 Z",
        p: "M0 0 L32 0 L30 20 L0 28 Z",
        q: "M0 0 L32 0 L32 32 L0 32 Z",
        r: "M0 0 L32 0 L30 20 L0 32 Z",
        s: "M0 0 L32 0 L32 8 L0 16 Z M0 24 L32 16 L32 32 L0 32 Z",
        t: "M32 0 L32 10 L10 32 L10 10 Z",
        u: "M24 0 L32 0 L30 32 L2 32 Z",
        v: "M0 0 L20 10 L16 32 Z",
        w: "M0 0 L40 0 L8 32 Z",
        x: "M0 0 L16 0 L32 32 L16 32 Z",
        y: "M10 0 L32 0 L10 32 Z",
        z: "M32 0 L32 16 L0 32 L0 16 Z"
    }

    constructor(elementID, primaryColor = this.defaultPrimaryColor, secondaryColor = this.defaultSecondaryColor){
        this.elementID = elementID;
        this.primaryColor = primaryColor;
        this.secondaryColor = secondaryColor;
        this.spacing = this.defaultSpacing;
    }

    setSpacing(spacing) {
        this.spacing = spacing;
    }

    setFontSize(fontSize) {
        var element = document.getElementById(this.elementID);
        element.setAttribute("style", "font-size:" + fontSize);
    }

    setPrimaryColor(color) {

        if(color != ""){
            this.primaryColor = color;
        } else {
            this.primaryColor = this.defaultPrimaryColor;
        }
    }

    setSecondaryColor(color) {
        if(color != ""){
            this.secondaryColor = color;
        } else {
            this.secondaryColor = this.defaultSecondaryColor;
        }
    }

    dark(){
        this.isDark = true;
    }

    _convert(character){
        var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
            svg.classList.add("papercraft-font");
            svg.classList.add("papercraft-font-" + character);

        var svgPathBack = document.createElementNS('http://www.w3.org/2000/svg','path');
        if(this.secondaryColor == this.defaultSecondaryColor) {
            if(!this.isDark) {
                svgPathBack.classList.add("papercraft-font-back-light");
            } else {
                svgPathBack.classList.add("papercraft-font-back-dark");
            }
        } else {
            svgPathBack.setAttribute('style', 'fill:'+this.secondaryColor)
        }
            
        
        if(this.pathBack[character] != ""){
            svgPathBack.setAttribute("d", this.pathBack[character]);
        }

        var svgPathFront = document.createElementNS('http://www.w3.org/2000/svg','path');

        if(this.primaryColor == this.defaultPrimaryColor) {
            if(!this.isDark) {
                svgPathFront.classList.add("papercraft-font-front-light");
            } else {
                svgPathFront.classList.add("papercraft-font-front-dark");
            }
        } else {
            svgPathFront.setAttribute('style', 'fill:'+this.primaryColor)
        }

        if(this.pathFront[character] != ""){
            svgPathFront.setAttribute("d", this.pathFront[character]);
        }
        
        switch(character) {
            case 'q':
                svg.setAttribute("width", "64");
                svg.setAttribute("height", "80");
                svg.classList.add("papercraft-font-tall");
                svg.setAttribute("viewBox", "0 0 32 40");
                svg.setAttribute("style", "padding: " + this.spacing + " " + this.spacing + " calc( " + this.spacing + " - .5em) " + this.spacing);
                break;
            case 'w':
                svg.setAttribute("width", "80");
                svg.setAttribute("height", "64");
                svg.classList.add("papercraft-font-wide");
                svg.setAttribute("viewBox", "0 0 40 32");
                svg.setAttribute("style", "padding: " + this.spacing + ".75em");
                break;
            default:
                svg.setAttribute("width", "64");
                svg.setAttribute("height", "64");
                svg.setAttribute("viewBox", "0 0 32 32");
                svg.setAttribute("style", "padding: " + this.spacing);
        }

        if(this.pathBack[character] != ""){
            svg.appendChild(svgPathBack);
        }
        if(this.pathFront[character] != ""){
            svg.appendChild(svgPathFront);
        }
        
        return(svg);
    }


    text(text) {
        var textOnlyAlphabet = text.replace(/[^a-z\s]+/gi, "");
        var textLower = textOnlyAlphabet.toLowerCase();

        var element = document.getElementById(this.elementID);
        
        for (var i = 0; i < textLower.length; i++) {
            var character = textLower.charAt(i);

            var parameter = character;
            if(character == " "){
                parameter = "space";
            }

            var svgCharacter = this._convert(parameter);

            element.append(svgCharacter);
        }
    }
}