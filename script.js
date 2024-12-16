function setInitialAvatar() {
    const avatarImg = document.querySelector('.image-section img');
    // Check if we're in the hacks directory by looking at the current path
    const isInHacksDir = window.location.pathname.includes('/hacks/');
    const imagePath = isInHacksDir ? '../' : '';
    
    // Check if we're on the cursorai page
    const isCursorAIPage = window.location.pathname.includes('cursorai.html');
    
    // Check if we're on the Canva page
    const isCanvaPage = window.location.pathname.includes('canvapro.html');
    
    if (isCanvaPage) {
        avatarImg.src = `${imagePath}images/B66M0poh.png`;
    } else if (isCursorAIPage) {
        // Cursor AI page specific images
        if (window.innerWidth <= 768) {
            avatarImg.src = `${imagePath}images/YPD8ZbZ8.png`;
        } else {
            avatarImg.src = `${imagePath}images/90_4uoKp.jpg`;
        }
    } else {
        // Index page images
        if (window.innerWidth <= 768) {
            avatarImg.src = `${imagePath}images/E5K9Msjv.png`;
        } else {
            avatarImg.src = `${imagePath}images/E5K9Msjv.png`;  // Using same image for both sizes on index
        }
    }
}

function setGeneratedAvatar() {
    const avatarImg = document.querySelector('.image-section img');
    // Check if we're in the hacks directory by looking at the current path
    const isInHacksDir = window.location.pathname.includes('/hacks/');
    const imagePath = isInHacksDir ? '../' : '';
    
    avatarImg.src = `${imagePath}images/90_4uoKp.jpg`;
}

document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    setInitialAvatar();
    
    window.addEventListener('resize', setInitialAvatar);
    
    // Check if we're on the Canva page
    const isCanvaPage = window.location.pathname.includes('canvapro.html');
    
    if (!isCanvaPage) {
        // Only do this for non-Canva pages
        document.querySelector('.key-container').style.display = 'none';
        document.querySelector('.instructions-container').style.display = 'none';
        
        // Pre-generate keys to get final height but keep them hidden
        const uuidKey = generateUUID();
        document.getElementById('uuidKey').value = uuidKey;
        
        // Force the keys section to take up space but remain invisible
        const keysSection = document.getElementById('keysSection');
        keysSection.style.visibility = 'hidden';
        keysSection.style.display = 'block';
        
        // Store the height
        const keysSectionHeight = keysSection.offsetHeight;
        
        // Reset the keys section
        keysSection.style.visibility = 'visible';
        keysSection.style.display = 'none';
        
        // Set minimum height on main container with a smaller buffer
        const mainContainer = document.querySelector('.main-container');
        mainContainer.style.minHeight = `${mainContainer.offsetHeight + keysSectionHeight - 20}px`;
    }
});

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function generateHexKey() {
    const hex = '0123456789abcdef';
    let key = '';
    for (let i = 0; i < 64; i++) {
        key += hex[Math.floor(Math.random() * 16)];
    }
    return key;
}

function handleGenerate() {
    // Open ad in new tab
    window.open('https://dearesthydrogen.com/ytc4qgjg9?key=b05e412b22b0904a4fd90ce8391d5f37', '_blank');
    
    // Check if we're on the Canva page
    const isCanvaPage = window.location.pathname.includes('canvapro.html');
    
    if (isCanvaPage) {
        // Redirect to Canva signup
        window.open('https://www.canva.com/education/signup/', '_blank');
        
        // Hide generate button and subtitle
        document.getElementById('generateBtn').style.display = 'none';
        document.querySelector('.subtitle').style.display = 'none';
        
        // Show instructions
        document.getElementById('keysSection').style.display = 'block';
        document.querySelector('.instructions-container').style.display = 'block';
        
        // Update title
        document.getElementById('mainTitle').textContent = 'Follow These Steps';
        
        // Hide the image section
        document.querySelector('.image-section').style.display = 'none';
        document.querySelector('.text-section').classList.add('code-generated');
    } else {
        // Existing Cursor AI key generation code
        const mercyHacksKey = generateUUID();
        document.getElementById('uuidKey').value = mercyHacksKey;
        document.querySelector('.text-section').classList.add('code-generated');
        // Rest of your existing code
        const codeBlock = document.querySelector('.code-block');
        const codeTemplate = `{
            "telemetry.machineId": "${mercyHacksKey}",
            "telemetry.macMachineId": "${mercyHacksKey}",
            "telemetry.devDeviceId": "${mercyHacksKey}",
            "telemetry.sqmId": "${mercyHacksKey}",
            "lastModified": "2024-01-01T00:00:00.000Z",
            "version": "1.0.1"
        }`;
        codeBlock.textContent = codeTemplate;
        
        // Update title
        document.getElementById('mainTitle').textContent = 'Cursor Hacks';
        
        // Hide generate button and subtitle
        document.getElementById('generateBtn').style.display = 'none';
        document.querySelector('.subtitle').style.display = 'none';
        
        // Hide the image section
        document.querySelector('.image-section').style.display = 'none';
        
        // Show both key container and instructions
        document.querySelector('.key-container').style.display = 'block';
        document.querySelector('.instructions-container').style.display = 'block';
        
        // Make sure the keys section is visible
        document.getElementById('keysSection').style.display = 'block';
    }
}

function copyToClipboard(elementId) {
    // Open ad in new tab
    window.open('https://dearesthydrogen.com/ytc4qgjg9?key=b05e412b22b0904a4fd90ce8391d5f37', '_blank');
    
    // Continue with copy functionality
    const element = document.getElementById(elementId);
    element.select();
    document.execCommand('copy');
    
    const button = element.nextElementSibling;
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(() => {
        button.textContent = originalText;
    }, 1000);
}

async function loadHeader() {
    try {
        const isInSubDir = window.location.pathname.includes('/hacks/') || window.location.pathname.includes('/blogs/');
        const headerPath = isInSubDir ? '../components/header.html' : './components/header.html';
        
        const response = await fetch(headerPath);
        const html = await response.text();
        
        // Insert the header at the start of main-container instead of before main
        const mainContainer = document.querySelector('.main-container');
        mainContainer.insertAdjacentHTML('afterbegin', html);
        
        // Remove the existing logo if it exists
        const existingLogo = document.querySelector('.content-wrapper .logo');
        if (existingLogo) {
            existingLogo.remove();
        }
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

function revealCode(button) {
    // Open ad in new tab
    window.open('https://dearesthydrogen.com/ytc4qgjg9?key=b05e412b22b0904a4fd90ce8391d5f37', '_blank');
    
    // Show the code and hide the button
    const codeSpan = button.nextElementSibling;
    codeSpan.style.display = 'inline';
    button.style.display = 'none';
}

function handleJoinClass() {
    // Open ad in new tab
    window.open('https://dearesthydrogen.com/ytc4qgjg9?key=b05e412b22b0904a4fd90ce8391d5f37', '_blank');
    
    // Open Canva class join link
    window.open('https://www.canva.com/brand/join?token=QP1Q_1SuDMekVCF1q-kjkg&brandingVariant=edu&referrer=team-invite', '_blank');
    
    // Show manual link message
    const button = document.querySelector('[onclick="handleJoinClass()"]');
    const message = document.createElement('span');
    message.className = 'manual-link-message';
    message.innerHTML = 'If the link didn\'t open automatically, copy this: <span class="manual-link">https://www.canva.com/brand/join?token=QP1Q_1SuDMekVCF1q-kjkg&brandingVariant=edu&referrer=team-invite</span>';
    button.parentNode.appendChild(message);
} 