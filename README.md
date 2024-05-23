# Binary Calculator

This is a web-based binary calculator implemented using HTML, CSS, and JavaScript. It allows users to perform various bitwise and logical operations on binary numbers.

# About
This project is a lab assignment for the course Web Technology (CS2015) taught by Dr Navanath Saharia at the Indian Institute of Information Technology (IIIT), Manipur. It is designed to demonstrate the practical application of web development technologies like HTML, CSS, and JavaScript.

## Features

- Input binary numbers and perform bitwise operations like AND (`&`), OR (`|`), XOR (`^`), and NOT (`~`).
- Perform logical operations like AND (`&&`), OR (`||`), and NOT (`!`).
- Perform shift operations like right shift (`>>`), left shift (`<<`), and unsigned right shift (`>>>`).
- Display the result in binary and/or decimal format.
- Reset the calculator to clear the input and output.
- Navigate through the history of previous operations using "Prev Operation" and "Next Operation" buttons.

## Usage

1. Open the `220103020_lab8_binCalc.html` file in a web browser.
2. Enter binary numbers in the input field.
3. Click the corresponding operation button (e.g., AND, OR, XOR, NOT) to perform the desired operation.
4. The result will be displayed in the input field in binary format (or binary and decimal format if the "Display in Binary and Decimal" option is selected).
5. Use the "Reset" button to clear the input and output fields.
6. Navigate through the history of previous operations using the "Prev Operation" and "Next Operation" buttons.

## Code Structure

The code is divided into three main parts:

1. **HTML**: The structure of the calculator interface, including input fields, buttons, and labels.
2. **CSS**: The styling and layout of the calculator interface, including colors, fonts, and positioning.
3. **JavaScript**: The logic for performing bitwise and logical operations, handling user input, and updating the display.

The JavaScript code includes the following functions:

- `inputValue(value, inputId)`: Appends the specified value to the input field with the given ID.
- `reset(inputId)`: Clears the input field with the given ID and resets the history.
- `calculate()`: Performs the selected operation on the binary inputs and displays the result.
- `prev()`: Navigates to the previous operation in the history.
- `next()`: Navigates to the next operation in the history.

## Dependencies

This project uses the following external resources:

- Google Fonts: The `DM Serif Text` font is imported from Google Fonts.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
