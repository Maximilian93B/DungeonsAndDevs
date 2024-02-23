// CHALLENGE 1 verification 

function containsGitHub(url) {
    return url.includes("github.com");
}

function verifyGitHub(){
    const url = document.getElementById('urlInput').value;
    const result = containsGitHub(url)
    document.getElementById('result').textContent = result ? "Valid GitHub URL" : "Invalid Github URl";
}