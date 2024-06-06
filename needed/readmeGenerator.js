
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, userName, repoName) {
    if (license) return `https://github.com/${userName}/${repoName}/blob/main/LICENSE`
else return false;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, userName, repoName) {
    const licenseLink= renderLicenseLink(license, userName, repoName)
    if(licenseLink) return `Please go to the license [here](${licenseLink})`
    else return `There is no license`
}


function generateMarkdown({title, intro, description, userName, repoName, usage, credits, license}){
    const licenseContent = renderLicenseSection(license, userName, repoName)
    const content =`# ${title} 
    
    ${intro} 
    
    ## Description
    ${description} 
    
    ## Links
    - URL of the GitHub repository that contains the code: https://github.com/${userName}/${repoName}
    - URL of the deployed application: ${userName}.github.io/${repoName}
    
    ## Usage
    ${usage}
    
    ## Credits
    ${credits}
    
    ## License
    ${licenseContent}
    
    
    Markdown generated with **[README Generator](https://github.com/Gabrielasiu/readmeGenerator)**
    `;

};    

module.exports = generateMarkdown;
