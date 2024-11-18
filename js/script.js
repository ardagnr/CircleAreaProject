
// Calculation function
function CircleArea(radius, steps) {
    let area = 0;
    const deltaX = radius / steps;

    for (let x = 0; x < radius; x += deltaX) {
        // Calculate square root using the Taylor series
        let term1 = radius;
        let term2 = (x * x) / (2 * radius);
        let term3 = (x * x * x * x) / (8 * radius * radius * radius);
        
        // Approximate square root value using the first three terms of the series
        const y = term1 - term2 - term3;

        area += y * deltaX; // Add the area of the rectangle
    }

    return 4 * area; // Multiply the quarter circle area by 4 to get the full area
}


document.getElementById("calculate-btn").addEventListener("click", function() {
    const radiusInput = document.getElementById("radius").value;
    const radius = parseFloat(radiusInput);

    if (isNaN(radius) || radius <= 0) {
        alert("Lütfen pozitif bir sayı giriniz.");
        return;
    }

    const steps = 100000; // Number of steps for more accurate calculation
    const area = CircleArea(radius, steps);

    document.getElementById("result").innerText = `${area.toFixed(2)}`;
});

// Another way

/*
function CircleArea(steps) {
    let pi = 0;
    
    
    for (let i = 0; i < steps; i++) {  // Calculate pi using Leibniz series

        const term = 1 / (2 * i + 1); 
        if (i % 2 === 0) {
            pi += term; // Positive terms
        } else {
            pi -= term; // Negative terms
        }
    } // Result: pi
    
    
    return 4 * pi; // Multiply the series by 4
}

document.getElementById("calculate-btn").addEventListener("click", function() {
    const radiusInput = document.getElementById("radius").value;
    const radius = parseFloat(radiusInput);

    if (isNaN(radius) || radius <= 0) {
        alert("Lütfen pozitif bir sayı giriniz.");
        return;
    }

    const steps = 100000; // Number of steps for more accurate calculation
    const piApproximation = CircleArea(steps); // Calculate pi using the Leibniz series
    const area = piApproximation * radius * radius; // Area of the circle: pi * r^2

    document.getElementById("result").innerText = `${area.toFixed(2)}`;
});
*/