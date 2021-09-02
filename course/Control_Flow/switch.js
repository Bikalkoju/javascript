//Chapter 9.6
//Switch Statement

let area = 'circle';
const pi = 3.142, l = 10, b = 5, r = 2;
switch (area) {
    case 'square':
        console.log('Area of square is ' + l * l);
        break;
    case 'rectangle':
        console.log('Area of rectangle is ' + l * b);
        break;
    case 'circle':
        console.log('Area of circle is ' + pi * r*r);
        break;
    default:
        console.log('Select a correct data');
}