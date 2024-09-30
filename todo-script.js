const colors = ['#BFD8FE', '#FFD1DC', '#D0E0E3', '#FFDDC1', '#B9FBC0', '#FEEBC8'];
let usedColors = []; // Array to keep track of used colors

document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Check if there are available colors
        if (colors.length > 0) {
            // Get a random color from the remaining colors
            const randomIndex = Math.floor(Math.random() * colors.length);
            const randomColor = colors[randomIndex];

            // Set the background color and remove it from available colors
            li.style.backgroundColor = randomColor;
            usedColors.push(randomColor);
            colors.splice(randomIndex, 1); // Remove the used color from the array
        } else {
            // Optional: Handle case when all colors are used
            li.style.backgroundColor = '#D3D3D3'; // Default color if all colors are used
        }

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            li.remove();
            // Re-add the color back to the colors array when a task is removed
            colors.push(li.style.backgroundColor);
        });

        li.appendChild(removeButton);
        document.getElementById('taskList').appendChild(li);

        taskInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a task!');
    }
});
