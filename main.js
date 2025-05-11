import { gateHints } from './gate_hints_1.js';
import { maze } from './maze_data.js';

//Notes： 
//1. Idea for plot: each layer represents a dream, multiple entry points to the next dream by falling asleep. Player needs to get to the inner most dream and successfully get out. Each entry point has a different rating on the valence and arousal chart, and together they form the hero's journey.

const canvas = document.getElementById('mazeCanvas');
const ctx = canvas.getContext('2d');
const hintCanvas = document.getElementById('hintCanvas');
const hintCtx = hintCanvas.getContext('2d');

// Color constants
const gate_color = 'gold';
const wall_color = '#f0f0f0';
const gate_color_active = 'gold';

//python code for generating maze:
// matrix = [
//     [1 if min(i, 30-i, j, 30-j) % 2 == 0 else 0 for j in range(31)] 
//     for i in range(31)
// ]

// # To verify the pattern:
// for row in matrix:
//     print(row)

const cellSize = 20;
// Calculate offsets to center the maze
const mazeWidth = maze[0].length * cellSize;
const mazeHeight = maze.length * cellSize;
const xOffset = (canvas.width - mazeWidth) / 2;   // Center horizontally
const yOffset = (canvas.height - mazeHeight) / 2; // Center vertically
let playerX = -1;  // Start 2 cells to the left of the maze
let playerY = 1;

// Add player choices storage
let playerChoices = {};

// Add this variable to track gate visibility
let showGates = false;

// Add this variable to track coordinate display
let showCoordinates = false;
const tooltip = document.getElementById('coordTooltip');

// Add event listener for checkbox
document.getElementById('gateToggle').addEventListener('change', (e) => {
    showGates = e.target.checked;
    update();
});

// Add event listener for coordinates toggle
document.getElementById('coordToggle').addEventListener('change', (e) => {
    showCoordinates = e.target.checked;
});

// Add these variables to track previous position
let lastX = -1;
let lastY = 1;

// Add this after the color constants
const hintImages = {};
for (const key in gateHints) {
    const img = new Image();
    img.src = gateHints[key].image;
    hintImages[key] = img;
}

let nearestGate = null;  // Make this a global variable

// Add after other variables
let editMode = false;
const gateList = document.getElementById('gateList');

// Add event listener for edit toggle
document.getElementById('editToggle').addEventListener('change', (e) => {
    editMode = e.target.checked;
    if (editMode) {
        showGates = true;
        document.getElementById('gateToggle').checked = true;
    }
    updateGateList();
    update();
});

// Add click handler for maze editing
canvas.addEventListener('click', (e) => {
    if (!editMode) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Convert to maze coordinates
    const mazeX = Math.floor((x - xOffset) / cellSize);
    const mazeY = Math.floor((y - yOffset) / cellSize);
    
    // Check if coordinates are within maze bounds
    if (mazeX >= 0 && mazeX < maze[0].length && mazeY >= 0 && mazeY < maze.length) {
        // Toggle between gate and wall
        if (maze[mazeY][mazeX] === 1) {
            maze[mazeY][mazeX] = 2;  // Make it a gate
            // Add to gateHints if not exists
            const key = `${mazeX},${mazeY}`;
            if (!gateHints[key]) {
                gateHints[key] = {
                    text: "New gate...",
                    image: "images/dark/door.jpg"  // Default image
                };
                // Preload the image
                const img = new Image();
                img.src = gateHints[key].image;
                hintImages[key] = img;
            }
        } else if (maze[mazeY][mazeX] === 2) {
            maze[mazeY][mazeX] = 1;  // Make it a wall
            // Remove from gateHints
            const key = `${mazeX},${mazeY}`;
            delete gateHints[key];
            delete hintImages[key];
        }
        updateGateList();
        update();
    }
});

function updateGateList() {
    if (!editMode) {
        gateList.style.display = 'none';
        return;
    }
    
    gateList.style.display = 'flex';
    gateList.innerHTML = 'Gates: ';
    
    // Find all gates in the maze
    const gates = [];
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            if (maze[y][x] === 2) {
                gates.push(`${x},${y}`);
            }
        }
    }
    
    // Sort gates by coordinates
    gates.sort();
    
    // Create gate list
    gates.forEach(coord => {
        const span = document.createElement('span');
        span.className = 'gate-coordinates';
        span.textContent = coord;
        gateList.appendChild(span);
    });
}

// Initialize checkbox state
document.getElementById('editToggle').checked = editMode;

// Add this function before drawMaze to check if the gate is the starting gate
function isStartGate(x, y) {
    return x === 0 && y === 1;
}

// Add this after other state variables
let isInGate = false;  // Track if player is in a gate
let gateOpacity = 1.0;  // Track opacity for gate hints
let currentParagraphIndex = 0;  // Track current paragraph index
let currentGateKey = null;  // Track current gate key

function enterGate(x, y) {
    const key = `${x},${y}`;
    currentGateKey = key;
    currentParagraphIndex = 0;
    
    const hint = gateHints[key];
    if (hint) {
        const paragraphs = hint.text.split('\n\n').filter(p => p.trim());
        displayCurrentParagraph(paragraphs, hint, key);
    }
}

// Helper functions moved to global scope
function getPlaceholdersInParagraph(text) {
    const matches = text.match(/\[(A1|A2|B1|B2)\]/g) || [];
    return matches.map(match => match.slice(1, -1));
}

function createChoicesHTML(placeholders, hint, key) {
    if (!hint.choices) return '';
    
    let choicesHTML = `
        <div class="memory-choices">
            <div class="choice-options">
    `;
    
    for (const placeholder of placeholders) {
        if (hint.choices[placeholder] && Array.isArray(hint.choices[placeholder])) {
            choicesHTML += `<div class="choice-group">`;
            choicesHTML += `<div class="choice-pair">`;
            
            for (let i = 0; i < hint.choices[placeholder].length; i++) {
                const value = hint.choices[placeholder][i];
                choicesHTML += `<button class="choice-btn" data-gate="${key}" data-choice="${placeholder}" data-index="${i}" data-value="${value}">${value}</button>`;
            }
            
            choicesHTML += `</div></div>`;
        }
    }
    
    choicesHTML += `
            </div>
        </div>
    `;
    
    return choicesHTML;
}

function displayCurrentParagraph(paragraphs, hint, key) {
    if (currentParagraphIndex >= paragraphs.length) {
        // All paragraphs shown, allow exit
        const hintReminder = document.getElementById('hintReminder');
        hintReminder.textContent = 'press Enter to continue';
        return;
    }
    
    let currentParagraph = paragraphs[currentParagraphIndex];
    const placeholders = getPlaceholdersInParagraph(currentParagraph);
    
    // Replace placeholders with blanks or selected values
    currentParagraph = currentParagraph.replace(/\[(A1|A2|B1|B2)\]/g, (match, p1) => {
        if (playerChoices[key] && playerChoices[key][p1]) {
            return `<span id="${p1}" class="selected-choice">${playerChoices[key][p1]}</span>`;
        }
        return `<span id="${p1}">______</span>`;
    });
    
    // Create choices HTML for current paragraph
    const choicesHTML = createChoicesHTML(placeholders, hint, key);
    
    // Update the display
    const hintText = document.getElementById('hintText');
    const hintReminder = document.getElementById('hintReminder');
    
    hintText.innerHTML = `
        <div class="memory-text">${currentParagraph}</div>
        ${choicesHTML}
    `;
    
    // Add event listeners for choice buttons
    const choiceButtons = document.querySelectorAll('.choice-btn');
    choiceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const gate = this.getAttribute('data-gate');
            const choice = this.getAttribute('data-choice');
            const value = this.getAttribute('data-value');
            
            // Store the player's choice
            if (!playerChoices[gate]) {
                playerChoices[gate] = {};
            }
            playerChoices[gate][choice] = value;
            
            // Update the display
            displayCurrentParagraph(paragraphs, hint, key);
        });
    });
    
    // Update reminder text
    hintReminder.textContent = 'press Enter to continue';
}

function drawMaze() {
    // First find the nearest accessible gate and its distance
    nearestGate = null;  // Reset nearest gate
    let minDistance = Infinity;
    
    if (!showGates && playerX >= 0 && playerY >= 0 && 
        playerY < maze.length && playerX < maze[0].length) {
        
        for (let y = Math.max(0, playerY - 5); y < Math.min(maze.length, playerY + 6); y++) {
            for (let x = Math.max(0, playerX - 5); x < Math.min(maze[0].length, playerX + 6); x++) {
                if (maze[y][x] === 2) {
                    const distance = Math.abs(playerX - x) + Math.abs(playerY - y);
                    if (distance <= 5 && distance < minDistance && isGateAccessible(x, y)) {
                        minDistance = distance;
                        nearestGate = {x, y};
                    }
                }
            }
        }
    }

    // Draw the maze with appropriate gate visibility
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            if (isStartGate(x, y) && playerX < 0) {
                // Draw start gate as semi-transparent when player hasn't entered
                ctx.fillStyle = `rgba(181, 181, 181, 0.3)`;  // wall_color with transparency
                ctx.fillRect(x * cellSize + xOffset, y * cellSize + yOffset, cellSize, cellSize);
            } else if (maze[y][x] === 1) {
                ctx.fillStyle = wall_color;
                ctx.fillRect(x * cellSize + xOffset, y * cellSize + yOffset, cellSize, cellSize);
            } else if (maze[y][x] === 2) {
                if (showGates) {
                    ctx.fillStyle = gate_color;
                    ctx.fillRect(x * cellSize + xOffset, y * cellSize + yOffset, cellSize, cellSize);
                } else if (nearestGate && x === nearestGate.x && y === nearestGate.y) {
                    // Draw wall first
                    ctx.fillStyle = wall_color;
                    ctx.fillRect(x * cellSize + xOffset, y * cellSize + yOffset, cellSize, cellSize);
                    // Then overlay with background color at varying opacity
                    const opacity = 1 - ((minDistance - 1) / 4);
                    ctx.fillStyle = `rgba(28, 26, 26, ${opacity})`;
                    ctx.fillRect(x * cellSize + xOffset, y * cellSize + yOffset, cellSize, cellSize);
                } else {
                    ctx.fillStyle = wall_color;
                    ctx.fillRect(x * cellSize + xOffset, y * cellSize + yOffset, cellSize, cellSize);
                }
            } else if (maze[y][x] === 3) {
                ctx.fillStyle = gate_color_active;
                ctx.fillRect(x * cellSize + xOffset, y * cellSize + yOffset, cellSize, cellSize);
            }
        }
    }
}

function drawPlayer() {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.ellipse(
        playerX * cellSize + cellSize / 2 + xOffset,
        playerY * cellSize + cellSize / 2 + yOffset,
        cellSize / 4,
        cellSize / 4,
        0,
        0,
        Math.PI * 2
    );
    ctx.fill();
}

function getDistanceToNearestGate() {
    let minDistance = Infinity;
    let foundGate = false;
    
    // Only check if player is inside maze bounds
    if (playerX >= 0 && playerY >= 0 && 
        playerY < maze.length && playerX < maze[0].length) {
        
        // Check all cells within 5 distance
        for (let y = Math.max(0, playerY - 5); y < Math.min(maze.length, playerY + 6); y++) {
            for (let x = Math.max(0, playerX - 5); x < Math.min(maze[0].length, playerX + 6); x++) {
                // Only consider unvisited gates (value 2)
                if (maze[y][x] === 2) {
                    const distance = Math.abs(playerX - x) + Math.abs(playerY - y);
                    // Check if this gate is accessible (not blocked by walls)
                    if (distance < minDistance && isGateAccessible(x, y)) {
                        minDistance = distance;
                        foundGate = true;
                    }
                }
            }
        }
    }
    
    return foundGate && minDistance <= 5 ? minDistance : null;
}

// Helper function to check if a gate is accessible from the current layer
function isGateAccessible(gateX, gateY) {
    // First get the gate's side property from gateHints
    const gateKey = `${gateX},${gateY}`;
    const gateData = gateHints[gateKey];
    if (!gateData) return false;
    
    const side = gateData.side;
    
    // Check if gate should be inaccessible based on relative position and side
    if (side === 1 && gateY < playerY) return false;  // Top side gate should be below player
    if (side === 2 && gateX > playerX) return false;  // Right side gate should be left of player
    if (side === 3 && gateY > playerY) return false;  // Bottom side gate should be above player
    if (side === 4 && gateX < playerX) return false;  // Left side gate should be right of player

    // Now check the original path-based accessibility
    const isHorizontalPath = playerX > 0 && playerX < maze[0].length - 1 && 
                            maze[playerY][playerX-1] !== 1 && 
                            maze[playerY][playerX+1] !== 1;
    
    const isVerticalPath = playerY > 0 && playerY < maze.length - 1 && 
                            maze[playerY-1][playerX] !== 1 && 
                            maze[playerY+1][playerX] !== 1;
    
    // Check which directions are available at corners
    const canMoveLeft = playerX > 0 && maze[playerY][playerX-1] !== 1;
    const canMoveRight = playerX < maze[0].length - 1 && maze[playerY][playerX+1] !== 1;
    const canMoveUp = playerY > 0 && maze[playerY-1][playerX] !== 1;
    const canMoveDown = playerY < maze.length - 1 && maze[playerY+1][playerX] !== 1;

    // Calculate distance components
    const dx = gateX - playerX;  // Not using abs() to determine direction
    const dy = gateY - playerY;

    // Check accessibility based on path type
    if (isHorizontalPath && !isVerticalPath) {
        // On horizontal path - can only access gates on same row or 1 cell up/down
        return Math.abs(dy) <= 1;
    } else if (isVerticalPath && !isHorizontalPath) {
        // On vertical path - can only access gates on same column or 1 cell left/right
        return Math.abs(dx) <= 1;
    } else if (!isHorizontalPath && !isVerticalPath) {
        // At a corner - check specific corner type and allowed directions
        if (canMoveUp && canMoveRight) {
            return (dy <= 0 && Math.abs(dy) <= 1) || (dx >= 0 && Math.abs(dx) <= 1);
        } else if (canMoveUp && canMoveLeft) {
            return (dy <= 0 && Math.abs(dy) <= 1) || (dx <= 0 && Math.abs(dx) <= 1);
        } else if (canMoveDown && canMoveRight) {
            return (dy >= 0 && Math.abs(dy) <= 1) || (dx >= 0 && Math.abs(dx) <= 1);
        } else if (canMoveDown && canMoveLeft) {
            return (dy >= 0 && Math.abs(dy) <= 1) || (dx <= 0 && Math.abs(dx) <= 1);
        }
    }

    return false;
}

function drawHint() {
    hintCtx.clearRect(0, 0, hintCanvas.width, hintCanvas.height);

    if (nearestGate || isInGate) {
        const gateKey = isInGate ? `${playerX},${playerY}` : `${nearestGate.x},${nearestGate.y}`;
        const hintData = gateHints[gateKey];
        
        if (hintData) {
            const opacity = isInGate ? gateOpacity : (1 - ((Math.abs(playerX - nearestGate.x) + 
                                Math.abs(playerY - nearestGate.y) - 1) / 4)) * 0.5;
            
            // Set image source and opacity immediately
            const img = hintImages[gateKey];
            const hintImage = document.getElementById('hintImage');
            const hintText = document.getElementById('hintText');
            const hintBackground = document.getElementById('hintBackground');
            const hintReminder = document.getElementById('hintReminder');
            hintImage.src = img.src;
            
            // Remove transition temporarily for immediate opacity changes
            if (!isInGate) {
                hintImage.style.transition = 'none';
                hintText.style.transition = 'none';
                hintBackground.style.transition = 'none';
                hintReminder.style.transition = 'none';
                
                void hintImage.offsetWidth;
                void hintText.offsetWidth;
                void hintBackground.offsetWidth;
                void hintReminder.offsetWidth;
            }
            
            hintImage.style.opacity = opacity;
            
            // Only show text and background when in gate, with delay
            if (isInGate) {
                // Content = hintData.text;
                hintReminder.textContent = 'press Enter to continue';
                setTimeout(() => {
                    hintBackground.style.opacity = opacity;
                    hintText.style.opacity = opacity;
                    hintReminder.style.opacity = opacity;  // Show reminder with text
                }, 2000);
            } else {
                hintText.style.opacity = 0;
                hintBackground.style.opacity = 0;
                hintReminder.style.opacity = 0;  // Hide reminder
            }
            
            // Restore transition for fade out
            if (!isInGate) {
                requestAnimationFrame(() => {
                    hintImage.style.transition = 'opacity 1s ease-out';
                    hintText.style.transition = 'opacity 1s ease-out';
                    hintBackground.style.transition = 'opacity 1s ease-out';
                    hintReminder.style.transition = 'opacity 1s ease-out';
                });
            }
        }
    }
}

function update() {
    // Update maze canvas
    ctx.fillStyle = '#1c1a1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawMaze();
    drawPlayer();
    
    // Update hint canvas
    drawHint();
}

function movePlayer(dx, dy) {
    // If player is in gate, only allow movement after pressing enter
    if (isInGate) {
        return;
    }

    const newX = playerX + dx;
    const newY = playerY + dy;
    
    // Special case for the starting gate
    if (isStartGate(newX, newY)) {
        // Allow entry from outside the maze
        if (playerX < 0) {
            playerX = newX;
            playerY = newY;
            // Close the gate after player enters
            maze[1][0] = 1;  // Change to wall
            update();
            return;
        }
    }
    
    // If player is on a gate, prevent moving back to their last position
    if (playerX >= 0 && playerY >= 0 && 
        playerY < maze.length && 
        playerX < maze[0].length && 
        maze[playerY][playerX] === 3 && 
        newX === lastX && 
        newY === lastY) {
        return; // Prevent moving back
    }
    
    // Store current position before moving
    lastX = playerX;
    lastY = playerY;
    
    // First, change the previous gold square to a wall if we were on one
    if (playerX >= 0 && playerY >= 0 && playerY < maze.length && playerX < maze[0].length && maze[playerY][playerX] === 3) {
        maze[playerY][playerX] = 1;  // Change to wall when moving off
    }
    
    // Check if new position is inside maze
    if (newX >= 0 && newY >= 0 && newY < maze.length && newX < maze[0].length) {
        // Inside maze - check for walls and special squares
        if (maze[newY][newX] === 0 || maze[newY][newX] === 2) {
            playerX = newX;
            playerY = newY;
            
            if (maze[newY][newX] === 2) {
                maze[newY][newX] = 3;
                isInGate = true;
                enterGate(newX, newY);
                gateOpacity = 1.0;
                document.getElementById('hintContainer').classList.add('expanded');
            }
        }
    } else {
        // Outside maze - allow free movement within canvas bounds
        if (newX * cellSize + xOffset >= 0 && 
            newX * cellSize + xOffset < canvas.width - cellSize && 
            newY * cellSize >= 0 && 
            newY * cellSize < canvas.height - cellSize) {
            playerX = newX;
            playerY = newY;
        }
    }
    
    // Check if player has reached the center
    const centerX = 15;  // Changed back to 15
    const centerY = 15;  // Changed back to 15

    if (newX === centerX && newY === centerY) {
        // Start completion sequence
        const centerVideo = document.getElementById('centerVideo');
        const completionOverlay = document.getElementById('completionOverlay');
        
        // Show and play the video
        centerVideo.style.display = 'block';
        requestAnimationFrame(() => {
            centerVideo.style.opacity = '1';
            centerVideo.play();
        });

        // When video ends, keep last frame visible and show completion text
        centerVideo.addEventListener('ended', () => {
            // Don't hide video, just show overlay on top
            completionOverlay.style.display = 'flex';
            setTimeout(() => {
                completionOverlay.style.opacity = '1';
            }, 50);
        });
    }
    update();
}

// Modify C key handler to only teleport
document.addEventListener('keydown', (event) => {
    if (event.key === 'S' || event.key === 's') {
        const welcomeScreen = document.getElementById('welcomeScreen');
        if (welcomeScreen.style.display !== 'none') {
            // Skip to game start
            const letterOverlay = document.getElementById('letterOverlay');
            const storyOverlay = document.getElementById('storyOverlay');
            const video = document.getElementById('introVideo');
            const gameMessage = document.getElementById('gameMessage');

            // Hide all overlays immediately
            letterOverlay.style.display = 'none';
            storyOverlay.style.display = 'none';
            video.style.display = 'none';
            welcomeScreen.style.display = 'none';

            // Show and fade out game message
            gameMessage.style.opacity = '1';
            setTimeout(() => {
                gameMessage.style.opacity = '0';
            }, 5000);
        }
    } else if (event.key === 'C' || event.key === 'c') {
        // Teleport to coordinates without triggering completion
        playerX = 13;
        playerY = 16;
        update();
    }
});

// Add this near the start of your script, where other event listeners are defined
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'Enter':
            if (isInGate) {
                const hintText = document.getElementById('hintText');
                const memoryText = hintText.querySelector('.memory-text');
                
                // Get the current gate's text
                const hint = gateHints[currentGateKey];
                if (hint) {
                    const paragraphs = hint.text.split('\n\n').filter(p => p.trim());
                    
                    // If we've shown all paragraphs, allow exit
                    if (currentParagraphIndex >= paragraphs.length) {
                        // Set all opacities to 0 immediately
                        gateOpacity = 0;
                        const hintImage = document.getElementById('hintImage');
                        const hintText = document.getElementById('hintText');
                        const hintBackground = document.getElementById('hintBackground');
                        const hintReminder = document.getElementById('hintReminder');
                        
                        hintImage.style.opacity = 0;
                        hintText.style.opacity = 0;
                        hintBackground.style.opacity = 0;
                        hintReminder.style.opacity = 0;
                        
                        // Wait for fade out to complete before resetting state
                        setTimeout(() => {
                            isInGate = false;
                            document.getElementById('hintContainer').classList.remove('expanded');
                            update();
                        }, 1000);
                    } else {
                        // Otherwise, check for unselected choices and proceed to next paragraph
                        if (memoryText) {
                            const unselectedBlanks = memoryText.querySelectorAll('span:not(.selected-choice)');
                            if (unselectedBlanks.length > 0) {
                                // Don't proceed if there are unselected choices
                                return;
                            }
                        }
                        
                        currentParagraphIndex++;
                        displayCurrentParagraph(paragraphs, hint, currentGateKey);
                    }
                }
            }
            break;
        case ' ':  // Space key
            if (isInGate) {
                // Get the current gate's text
                const hint = gateHints[currentGateKey];
                if (hint) {
                    const paragraphs = hint.text.split('\n\n').filter(p => p.trim());
                    // Only allow exit if we've shown all paragraphs
                    if (currentParagraphIndex >= paragraphs.length) {
                        // Set all opacities to 0 immediately
                        gateOpacity = 0;
                        const hintImage = document.getElementById('hintImage');
                        const hintText = document.getElementById('hintText');
                        const hintBackground = document.getElementById('hintBackground');
                        const hintReminder = document.getElementById('hintReminder');
                        
                        hintImage.style.opacity = 0;
                        hintText.style.opacity = 0;
                        hintBackground.style.opacity = 0;
                        hintReminder.style.opacity = 0;
                        
                        // Wait for fade out to complete before resetting state
                        setTimeout(() => {
                            isInGate = false;
                            document.getElementById('hintContainer').classList.remove('expanded');
                            update();
                        }, 1000);
                    }
                }
            }
            break;
        case 'ArrowUp':
            movePlayer(0, -1);
            break;
        case 'ArrowDown':
            movePlayer(0, 1);
            break;
        case 'ArrowLeft':
            movePlayer(-1, 0);
            break;
        case 'ArrowRight':
            movePlayer(1, 0);
            break;
        case 'I':
        case 'i':
            const controls = document.getElementById('controls');
            if (controls) {
                controls.style.display = controls.style.display === 'none' ? 'flex' : 'none';
                // Also toggle the gate list visibility
                const gateList = document.getElementById('gateList');
                if (gateList) {
                    gateList.style.display = controls.style.display;
                }
            }
            break;
    }
});

// Add mouse move handler
canvas.addEventListener('mousemove', (e) => {
    if (!showCoordinates) {
        tooltip.style.display = 'none';
        return;
    }

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Convert to maze coordinates
    const mazeX = Math.floor((x - xOffset) / cellSize);
    const mazeY = Math.floor((y - yOffset) / cellSize);
    
    // Check if coordinates are within maze bounds
    if (mazeX >= 0 && mazeX < maze[0].length && mazeY >= 0 && mazeY < maze.length) {
        tooltip.style.display = 'block';
        tooltip.style.left = (e.clientX + 10) + 'px';
        tooltip.style.top = (e.clientY + 10) + 'px';
        tooltip.textContent = `(${mazeX},${mazeY}) - Value: ${maze[mazeY][mazeX]}`;
    } else {
        tooltip.style.display = 'none';
    }
});

// Hide tooltip when mouse leaves canvas
canvas.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
});

// Initialize checkbox states
document.getElementById('gateToggle').checked = showGates;
document.getElementById('coordToggle').checked = showCoordinates;

update();

// Add this preloader code near the start of your script
async function preloadAssets() {
    const assets = {
        images: [],
        videos: ['intro.mp4', 'center.mp4']
    };

    // Add all gate hint images to assets
    for (const key in gateHints) {
        const hint = gateHints[key];
        if (hint.image) {
            assets.images.push(hint.image);
        }
    }

    // Add logo images
    assets.images.push('logo_white.png', 'logo_black.png');

    // Log total assets to be loaded
    console.log('Starting asset preload...');
    console.log('Total images to load:', assets.images.length);
    console.log('Total videos to load:', assets.videos.length);
    console.log('Asset list:', {
        images: assets.images,
        videos: assets.videos
    });

    let loadedAssets = 0;
    const totalAssets = assets.images.length + assets.videos.length;
    const loadingText = document.getElementById('loadingText');

    function updateLoadingProgress() {
        loadedAssets++;
        const progress = Math.round((loadedAssets / totalAssets) * 100);
        loadingText.textContent = `loading assets... ${progress}%`;

        if (loadedAssets === totalAssets) {
            console.log('All assets loaded successfully!');
            loadingText.textContent = '[press Enter to begin]';
            enableWelcomeScreen();
        }
    }

    // Preload images
    const imagePromises = assets.images.map(src => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                console.log('Loaded image:', src);
                updateLoadingProgress();
                resolve(img);
            };
            img.onerror = (error) => {
                console.error('Failed to load image:', src, error);
                reject(error);
            };
            img.src = src;
        });
    });

    // Preload videos
    const videoPromises = assets.videos.map(src => {
        return new Promise((resolve, reject) => {
            const video = document.createElement('video');
            video.preload = 'auto';
            video.oncanplaythrough = () => {
                console.log('Loaded video:', src);
                updateLoadingProgress();
                resolve(video);
            };
            video.onerror = (error) => {
                console.error('Failed to load video:', src, error);
                reject(error);
            };
            video.src = src;
        });
    });

    try {
        await Promise.all([...imagePromises, ...videoPromises]);
    } catch (error) {
        console.error('Error during asset loading:', error);
        loadingText.textContent = 'Error loading assets. Please refresh.';
    }
}

function enableWelcomeScreen() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const welcomeLogo = document.getElementById('welcomeLogo');
    const welcomeText = document.getElementById('welcomeText');
    
    // Start logo fade in
    setTimeout(() => {
        welcomeLogo.style.opacity = '1';
    }, 500);
    
    // Show welcome text after logo fade
    setTimeout(() => {
        welcomeText.style.opacity = '1';
    }, 2500);

    // Enable Enter key handler
    document.addEventListener('keydown', handleWelcomeScreen);
}

function handleWelcomeScreen(event) {
    if (event.key === 'Enter' && document.getElementById('welcomeScreen').style.display !== 'none') {
        const video = document.getElementById('introVideo');
        const storyOverlay = document.getElementById('storyOverlay');
        
        video.style.display = 'block';
        requestAnimationFrame(() => {
            video.style.opacity = '1';
            video.play();
        });

        video.addEventListener("ended", function() {
            storyOverlay.style.display = 'flex';
            setTimeout(() => {
                storyOverlay.style.opacity = '1';
            }, 100);
        });
    }
}

// Start preloading when the page loads
document.addEventListener('DOMContentLoaded', () => {
    preloadAssets();
});

// Modify the click handlers
document.getElementById('readLetterLink').addEventListener('click', (e) => {
    e.preventDefault();
    const storyOverlay = document.getElementById('storyOverlay');
    const letterOverlay = document.getElementById('letterOverlay');

    // First fade out the story overlay
    storyOverlay.style.opacity = '0';

    // After story overlay fades out, show letter
    setTimeout(() => {
        storyOverlay.style.display = 'none';
        letterOverlay.style.display = 'flex';
        
        // Short delay before fading in the letter
        requestAnimationFrame(() => {
            letterOverlay.style.opacity = '1';
        });
    }, 1000); // Match the transition duration from CSS
});

document.getElementById('finishReadingLink').addEventListener('click', (e) => {
    e.preventDefault();
    const letterOverlay = document.getElementById('letterOverlay');
    const storyOverlay = document.getElementById('storyOverlay');

    // Fade out letter overlay
    letterOverlay.style.opacity = '0';

    // Define the readLetterAgainHandler function here so it's in scope
    const readLetterAgainHandler = function(e) {
        e.preventDefault();
        const storyOverlay = document.getElementById('storyOverlay');
        const letterOverlay = document.getElementById('letterOverlay');
        
        // Fade out story overlay
        storyOverlay.style.opacity = '0';
        
        // Show letter again
        setTimeout(() => {
            storyOverlay.style.display = 'none';
            letterOverlay.style.display = 'flex';
            
            requestAnimationFrame(() => {
                letterOverlay.style.opacity = '1';
            });
        }, 1000);
    };
    
    // Define the lookAroundHandler function here so it's in scope
    const lookAroundHandler = function(e) {
        e.preventDefault();
        const storyOverlay = document.getElementById('storyOverlay');
        
        // Fade out story overlay
        storyOverlay.style.opacity = '0';
        
        setTimeout(() => {
            // Update story text with new content about looking around
            const storyText = document.querySelector('.story-text');
            storyText.innerHTML = `
                Etched on the door handle is a faint line that says 'orientation chamber'.
                
                <div style="margin-top: 30px;">
                    <a href="#" id="proceedToChamberLink" style="margin-top: 15px; display: inline-block;">➡ Proceed to orientation chamber</a><br>
                    <a href="#" id="backLink">➡ Go Back</a>
                </div>
            `;

            // Add event listeners for the new links
            document.getElementById('proceedToChamberLink').addEventListener('click', function(e) {
                e.preventDefault();
                // Add your logic here to proceed to the orientation chamber
                const video = document.getElementById('introVideo');
                const storyOverlay = document.getElementById('storyOverlay');
                const letterOverlay = document.getElementById('letterOverlay');
                const welcomeScreen = document.getElementById('welcomeScreen');
                letterOverlay.style.display = 'none';
                storyOverlay.style.display = 'none';
                video.style.display = 'none';
                welcomeScreen.style.display = 'none';
            });
            
            // Show the story overlay with updated content
            storyOverlay.style.display = 'flex';
            setTimeout(() => {
                storyOverlay.style.opacity = '1';
                
                // Add event listeners for the new links
                document.getElementById('backLink').addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Fade out story overlay
                    storyOverlay.style.opacity = '0';
                    
                    setTimeout(() => {
                        // Update story text back to previous content
                        const storyText = document.querySelector('.story-text');
                        storyText.innerHTML = `
                            The letter's language feels cryptic and cold. Applicant? AI research? Neuro-Interface? \n\n
                            Am I here because of an AI research project? \n\n
                            Questions linger in your mind... \n\n
                            You look around this room, which seems to be part of an office or a research lab, it seems your only way out is through that mysterious door.
                            
                            <div style="margin-top: 30px;">
                                <a href="#" id="lookAroundLink">➡ Go to the door</a><br>
                                <a href="#" id="readLetterAgainLink" style="margin-top: 15px; display: inline-block;">➡ Read letter again</a>
                            </div>
                        `;
                        
                        // Show the story overlay with updated content
                        storyOverlay.style.display = 'flex';
                        setTimeout(() => {
                            storyOverlay.style.opacity = '1';
                            
                            // Add event listeners for the new links
                            document.getElementById('lookAroundLink').addEventListener('click', lookAroundHandler);
                            document.getElementById('readLetterAgainLink').addEventListener('click', readLetterAgainHandler);
                        }, 100);
                    }, 1000);
                });
            }, 100);
        }, 1000);
    };

    // Remove overlays and show message
    setTimeout(() => {
        letterOverlay.style.display = 'none';
        
        // Update story text with new content
        const storyText = document.querySelector('.story-text');
        storyText.innerHTML = `
            The letter's language feels cryptic and cold. Applicant? AI research? Neuro-Interface? \n\n
            Am I here because of an AI research project? \n\n
            Questions linger in your mind... \n\n
            You look around this room, which seems to be part of an office or a research lab, it seems your only way out is through that mysterious door.
            
            <div style="margin-top: 30px;">
                <a href="#" id="lookAroundLink">➡ Go to the door</a><br>
                <a href="#" id="readLetterAgainLink" style="margin-top: 15px; display: inline-block;">➡ Read letter again</a>
            </div>
        `;
        
        // Show the story overlay with updated content
        storyOverlay.style.display = 'flex';
        setTimeout(() => {
            storyOverlay.style.opacity = '1';
            
            // Add event listeners for the new links
            document.getElementById('lookAroundLink').addEventListener('click', lookAroundHandler);
            document.getElementById('readLetterAgainLink').addEventListener('click', readLetterAgainHandler);
        }, 100);
    }, 1000);
});