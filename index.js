const angleBtns = document.querySelectorAll('#angle');


const triangleBtn = document.querySelector('.triangle_button');

const outputBtn = document.querySelector("#output");


function isTriangle() {

    angle1 = angleBtns[0].value;

    angle2 = angleBtns[1].value;
    angle3 = angleBtns[2].value;

    const sumOfAngles = calculateSumOfAngles(Number(angle1), Number(angle2), Number(angle3));

    if (sumOfAngles == 180) {
        outputBtn.innerHTML = "forms a triangle";
        // console.log("forms a triangle");
    }
    else {
        outputBtn.innerHTML = "does not form a triangle";
    }

}

function calculateSumOfAngles(angle1, angle2, angle3) {
    
    const sumOfAngles = angle1 + angle2 + angle3;
    console.log('sumOfAngles', sumOfAngles);
    return sumOfAngles;

}

triangleBtn.addEventListener('click', isTriangle);

