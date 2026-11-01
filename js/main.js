const data=JSON.parse(localStorage.getItem('portfolioData'));
if(data){
document.getElementById('name').innerText=data.name;
document.getElementById('tagline').innerText=data.tagline;
document.getElementById('about').innerText=data.about;
}