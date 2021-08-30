//switch case statement

var area = "square";
var pi = 3.142, l = 5, b = 3, r = 4;

switch (area) {
    case 'circle':
        console.log("The area of the circle is " + (pi * r * r));
        break;
    
    case 'square':
        console.log("The area of the square is " + (l * l));
        break;
    
    case 'rectangle':
        console.log("The area of the rectangle is " + (l * b));
        break;

    default:
        console.log("Please enter a  valid data.");
        break;
}