let users = [
  {
    name:"Jane Cooper",
    company:"Microsoft",
    number:"(225) 555-0118",
    email:"jane@microsoft.com",
    country:"United States",
    status: true
 },
 {
  name:"Floyd Miles",
  company:"Yahoo",
  number:"(205) 555-0100",
  email:"floyd@yahoo.com",
  country:"Kiribati",
  status: false
},
{
  name:"Ronald Richards",
  company:"Adobe",
  number:"(302) 555-0107",
  email:"ronald@adobe.com",
  country:"Israel",
  status: false
},
{
  name:"Marvin McKinney",
  company:"Tesla",
  number:"(252) 555-0126",
  email:"marvin@tesla.com",
  country:"Iran",
  status: true
},
{
  name:"Jerome Bell",
  company:"Google",
  number:"(629) 555-0129",
  email:"jerome@google.com",
  country:"Réunion",
  status: true
},
{
  name:"Kathryn Murphy",
  company:"Microsoft",
  number:"(406) 555-0120",
  email:"kathryn@microsoft.com",
  country:"Curaçao",
  status: true
},
{
  name:"Jacob Jones",
  company:"Yahoo",
  number:"(208) 555-0112",
  email:"jacob@yahoo.com",
  country:"Brazil",
  status: true
},
{
  name:"Kristin Watson",
  company:"Facebook",
  number:"(704) 555-0127",
  email:"kristin@facebook.com",
  country:"Åland Islands",
  status: false
},
{
  name:"Kathryn Murphy",
  company:"Microsoft",
  number:"(406) 555-0120",
  email:"kathryn@microsoft.com",
  country:"Curaçao",
  status: true
},
{
  name:"Jacob Jones",
  company:"Yahoo",
  number:"(208) 555-0112",
  email:"jacob@yahoo.com",
  country:"Brazil",
  status: true
},
{
  name:"Jane Cooper",
  company:"Microsoft",
  number:"(225) 555-0118",
  email:"jane@microsoft.com",
  country:"United States",
  status: true
},
{
  name:"Floyd Miles",
  company:"Yahoo",
  number:"(205) 555-0100",
  email:"floyd@yahoo.com",
  country:"Kiribati",
  status: false
},
{
  name:"Kristin Watson",
  company:"Facebook",
  number:"(704) 555-0127",
  email:"kristin@facebook.com",
  country:"Åland Islands",
  status: false
},
{
  name:"Kathryn Murphy",
  company:"Microsoft",
  number:"(406) 555-0120",
  email:"kathryn@microsoft.com",
  country:"Curaçao",
  status: true
},
{
  name:"Jacob Jones",
  company:"Yahoo",
  number:"(208) 555-0112",
  email:"jacob@yahoo.com",
  country:"Brazil",
  status: true
},
{
  name:"Jane Cooper",
  company:"Microsoft",
  number:"(225) 555-0118",
  email:"jane@microsoft.com",
  country:"United States",
  status: true
},

];

let table = document.querySelector('#table');
let pagination = document.querySelector('#pagination');
let notesOnPage = 8;
let countOfItems = Math.ceil(users.length / notesOnPage);
let dashInfoStart = document.querySelector('.dash__info-start'),
    dashInfoEnd = document.querySelector('.dash__info-end'),
    dashInfoAll = document.querySelector('.dash__info-all');

let showPage = (function() {
	let active;
	
	return function(item) {
		if (active) {
			active.classList.remove('dash-pag_active');
		}
		active = item;
		
		item.classList.add('dash-pag_active');
		let pageNum = +item.innerHTML;
		
		let start = (pageNum - 1) * notesOnPage;
		let end = start + notesOnPage;
		
		let notes = users.slice(start, end);
		
		table.innerHTML = '';

    let btnAct = `<span class="dash-btn dash-btn_active">Active</span>`;
    let btnDis = `<span class="dash-btn">Inactive</span>`
		for (let note of notes) {
			let tr = document.createElement('tr');
			table.appendChild(tr);
			
			createCell(note.name, tr);
			createCell(note.company, tr);
      createCell(note.number, tr);
      createCell(note.email, tr);
			createCell(note.country, tr);
      createCell(note.status ? btnAct : btnDis, tr);
		}

    dashInfoStart.innerHTML = `${start + 1}`;
    dashInfoEnd.innerHTML = `${end}`;
    dashInfoAll.innerHTML = `${users.length}`;
	};
}());

let items = [];
for (let i = 1; i <= countOfItems; i++) {
	let li = document.createElement('li');
  li.classList.add('dash-pag__item')
	li.innerHTML = i;
	pagination.appendChild(li);
	items.push(li);
}


showPage(items[0]);

for (let item of items) {
	item.addEventListener('click', function() {
		showPage(this);
	});
}

function createCell(text, tr) {
	let td = document.createElement('td');
  td.classList.add('dash-table__item');
	td.innerHTML = text;
	tr.appendChild(td);
}
// Search
function tableSearch() {
  let table = document.querySelector('.dash-table');
  let phrase = document.querySelector('.dash-search');
  let regPhrase = new RegExp(phrase.value, 'i');
  let flag = false;
  for (var i = 1; i < table.rows.length; i++) {
      flag = false;
      for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
          flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
          if (flag) break;
      }
      if (flag) {
          table.rows[i].style.display = "";
      } else {
          table.rows[i].style.display = "none";
      }

  }
}

let trigger = document.querySelector('.burger'),
    mobMenu = document.querySelector('.sidebar');

trigger.addEventListener('click', () => {
  mobMenu.classList.toggle('sidebar--active');
})