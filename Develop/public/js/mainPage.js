// side bar toggle 
// Event listener to toggle sidebar on click
document.addEventListener('DOMContentLoaded', function() {
    const map = document.getElementById('map');
    map.addEventListener('click', function() {
        console.log("SVG map clicked!"); // Check if this message appears in the browser console
        toggleSidebar();
    });
});
