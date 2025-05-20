// card
document.getElementsByClassName('about')[0].innerHTML+=
`
<h1>ABOUT US</h1>
`
let mcard = [
{
card_image:"image/Karachi.jpg",
card_title:"KARACHI",
card_paragraph:"Karachi is the capital city of the Pakistani province of Sindh. It is the largest city in Pakistan and the 12th largest in the world, with a population of over 20 million. It is situated at the southern tip of the country along the Arabian Sea coast and formerly served as the capital of Pakistan.",
},
{
card_image:"image/Lahore.jpg",
card_title:"LAHORE", 
card_paragraph:"Lahore is the capital and largest city of the Pakistani province of Punjab. It is the second largest city in Pakistan, after Karachi, and 26th largest in the world, with a population of over 13 million. Located in north-eastern Punjab along the River Ravi, it is the largest Punjabi-speaking city in the world.",
},
{
card_image:"image/Islamabad.jpg",
card_title:"ISLAMABAD",
card_paragraph:"Islamabad is the capital city of the Islamic Republic of Pakistan. It is the country's ninth-most populous city with a population of over 1.2 million people and is federally administered by the Pakistani government as part of the Islamabad Capital Territory.",
},
{
card_image:"image/Multan.jpg",
card_title:"MULTAN",
card_paragraph:"Multan is a city in Punjab, Pakistan, located on the bank of river Chenab. It is one of the five largest urban centres of Pakistan in 2024 and serves as the administrative centre of Multan Division.",
},
{
card_image:"image/Quetta.jpg",
card_title:"QUETTA",
card_paragraph:"Quetta is the capital and largest city of the Pakistani province of Balochistan. It is the tenth largest city in Pakistan, with a population of over 1.6 million. It is situated in the south-west of the country, lying in a valley surrounded by mountains on all sides.",
},

]
for(var a in mcard){
document.getElementsByClassName('city')[0].innerHTML+=
`
<div class="col_sm_4">
<div class="services_details">
<img src="${mcard[a].card_image}">
<div class="single_services">
<h4>${mcard[a].card_title}</h4>
<p>${mcard[a].card_paragraph}</p>
</div>
</div>
</div>
`
}