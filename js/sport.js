

// card
let mcard = [
{
card_image:"../image/bg-04.jpg",
card_title:"Blues can silence <br>critics - Carney ",
card_paragraph:"Birmingham City's Karen Carney says they have proved critics wrong by reaching the Women's Champions League semi-finals.",
card_icon_1:"bx bx-calendar",
card_icon_2:"31 Mar 2025",
card_icon_3:"bx bx-tag",
card_icon_4:"31 Mar 2025", 
},
{
card_image:"../image/bg-03.jpg",
card_title:"Blues can silence <br>critics - Carney ",
card_paragraph:"Birmingham City's Karen Carney says they have proved critics wrong by reaching the Women's Champions League semi-finals.",
card_icon_1:"bx bx-calendar",
card_icon_2:"31 Mar 2025",
card_icon_3:"bx bx-tag",
card_icon_4:"31 Mar 2025",
},
{
card_image:"../image/bg-06.jpg",
card_title:"Blues can silence <br>critics - Carney ",
card_paragraph:"Birmingham City's Karen Carney says they have proved critics wrong by reaching the Women's Champions League semi-finals.",
card_icon_1:"bx bx-calendar",
card_icon_2:"31 Mar 2025",
card_icon_3:"bx bx-tag",
card_icon_4:"31 Mar 2025",
},
{
card_image:"../image/bg-07.jpg",
card_title:"Blues can silence <br>critics - Carney ",
card_paragraph:"Birmingham City's Karen Carney says they have proved critics wrong by reaching the Women's Champions League semi-finals.",
card_icon_1:"bx bx-calendar",
card_icon_2:"31 Mar 2025",
card_icon_3:"bx bx-tag",
card_icon_4:"31 Mar 2025",
},

]
for(var a in mcard){
document.getElementsByClassName('article')[0].innerHTML+=
`
<div class="col_sm_4">
<div class="services_details">
<img src="${mcard[a].card_image}">
<div class="card_1">
<a href="#"><h1>${mcard[a].card_title}</h1></a>
<p>${mcard[a].card_paragraph}</p>
<div class="info">
<ul>
<li class="date"><a href="#"><i class="${mcard[a].card_icon_1}"></i>${mcard[a].card_icon_2}</a></li>
<li class="tag"><a href="#"><i class="${mcard[a].card_icon_3}"></i>${mcard[a].card_icon_4}</a></li>
</ul>
</div>
</div>
</div>
</div>
`
}