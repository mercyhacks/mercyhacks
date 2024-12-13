const avatars = [
    'G_Jrj8zV.jpg',
    '90_4uoKp.jpg',
];

function setInitialAvatar() {
    const avatarImg = document.querySelector('.image-section img');
    avatarImg.src = 'images/G_Jrj8zV.jpg';
}

function setGeneratedAvatar() {
    const avatarImg = document.querySelector('.image-section img');
    avatarImg.src = 'images/90_4uoKp.jpg';
}

document.addEventListener('DOMContentLoaded', function() {
    setInitialAvatar();
    
    // Hide both key container and instructions initially
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
    const mercyHacksKey = generateUUID();
    document.getElementById('uuidKey').value = mercyHacksKey;
    
    // Update the code block with the new key
    const codeBlock = document.querySelector('.code-block');
    const codeTemplate = `{
    "telemetry.machineId": "${mercyHacksKey}",
    "telemetry.macMachineId": "${mercyHacksKey}",
    "telemetry.devDeviceId": "${mercyHacksKey}",
    "telemetry.sqmId": "${mercyHacksKey}"
}`;
    codeBlock.textContent = codeTemplate;
    
    // Update title
    document.getElementById('mainTitle').textContent = 'Fusor Hacks';
    
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

function copyToClipboard(elementId) {
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