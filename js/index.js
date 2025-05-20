//card
document.getElementsByClassName("section-headline")[0].innerHTML=
`
<h2>About Us</h2>
`;
let mcard = [
{
card_icon:"bx bxs-business",
card_title:"BUSINESS",
},
{
card_icon:"bx bx-news",
card_title:"NEWS",
},
{
card_icon:"bx bx-cable-car",
card_title:"SPORTS",
},

]
for(var a in mcard){
document.getElementById('card-0').innerHTML+=
`
<div class="row">
<div class="services-details services-details-1">
<div class="single-services">
<a class="services-icon" href="#">
<i class='${mcard[a].card_icon}' ></i>
</a>
<h4>${mcard[a].card_title}</h4>
</div>
</div>
</div>
`
}