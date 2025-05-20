
// card
document.getElementsByClassName("col_md_12")[0].innerHTML=
`
<div class="section_headline">
<h2>Business</h2>
</div>
`
let mcard = [ 
{
card_icon_1:"bx bxs-briefcase",
card_title:"Expert Coder",
card_paragraph:"will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.",
},
{
card_icon_1:"bx bx-receipt",
card_title:"Creative Designer",
card_paragraph:"will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.",
},
{
card_icon_1:"bx bx-bar-chart",
card_title:"Wordpress Developer",
card_paragraph:"will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.",
},
{
card_icon_1:"bx bxs-binoculars",
card_title:"Social Marketer",
card_paragraph:"will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.",
},
{
card_icon_1:"bx bx-brightness",
card_title:"Seo Expart",
card_paragraph:"will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.",
},
{
card_icon_1:"bx bxs-calendar-week",
card_title:"24/7 Support",
card_paragraph:"will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.",
},
]
for(var a in mcard){
document.getElementsByClassName('row_1')[0].innerHTML+=
`
<div class="col_sm_4">
<div class="services_details-1">
<div class="single_services-1">
<a class="services_icon-1" href="#"><i class="${mcard[a].card_icon_1}"></i></a>
<h4>${mcard[a].card_title}</h4>
<p>${mcard[a].card_paragraph}</p>
</div>
</div>
</div>
`
}