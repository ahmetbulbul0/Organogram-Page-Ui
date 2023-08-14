const tree = document.querySelector(".tree ul li");

const peoples = [
    { key: 1, photo: "1.jpg", position: "dean", fullName: "peter murphy", theme: "blue" },

    { key: 2, photo: "2.jpg", position: "auxiliary staff", fullName: "ronald cox", theme: "lightblue" },

    { key: 3, photo: "3.jpg", position: "deans's office", fullName: "mike fox", theme: "green" },
    { key: 4, photo: "4.jpg", position: "community", fullName: "lou silva", theme: "green" },
    { key: 5, photo: "5.jpg", position: "graduate studies", fullName: "marvin lee", theme: "green" },
    { key: 6, photo: "6.jpg", position: "programs", fullName: "phillip bert", theme: "green" },

    { key: 7, photo: "7.jpg", position: "academic affairs", fullName: "kate williams", theme: "darkblue" },
    { key: 8, photo: "8.jpg", position: "facilities", fullName: "silwia lewis", theme: "purple" },
    { key: 9, photo: "9.jpg", position: "finance", fullName: "lydia chance", theme: "red" },
    { key: 10, photo: "10.jpg", position: "exhibitions", fullName: "jason patrick", theme: "orange" },

    { key: 11, photo: "11.jpg", position: "president", fullName: "melissa mcgroom", theme: "gray" },
    { key: 12, photo: "12.jpg", position: "president", fullName: "ilya misha", theme: "gray" },
    { key: 13, photo: "13.jpg", position: "president", fullName: "star matson", theme: "gray" },

    { key: 14, photo: "14.jpg", position: "grounds", fullName: "kate bush-white", theme: "gray" },
    { key: 15, photo: "15.jpg", position: "building services", fullName: "cassie bonne", theme: "gray" },

    { key: 16, photo: "16.jpg", position: "controller", fullName: "henry hill", theme: "gray" },
    { key: 17, photo: "17.jpg", position: "finance office", fullName: "fiona anderson", theme: "gray" },

    { key: 18, photo: "18.jpg", position: "president", fullName: "sydney small", theme: "gray" },
    { key: 19, photo: "19.jpg", position: "president", fullName: "dylan forth", theme: "gray" },
];

const peopleContacts = [
    { from: 2, to: 1, level: 1 },

    { from: 3, to: 2, level: 2 },
    { from: 4, to: 2, level: 2 },
    { from: 5, to: 2, level: 2 },
    { from: 6, to: 2, level: 2 },

    { from: 7, to: 3, level: 3 },
    { from: 8, to: 4, level: 3 },
    { from: 9, to: 5, level: 3 },
    { from: 10, to: 6, level: 3 },

    { from: 11, to: 7, level: 4 },
    { from: 12, to: 7, level: 4 },
    { from: 13, to: 7, level: 4 },

    { from: 14, to: 8, level: 4 },
    { from: 15, to: 8, level: 4 },

    { from: 16, to: 9, level: 4 },
    { from: 17, to: 9, level: 4 },

    { from: 18, to: 10, level: 4 },
    { from: 19, to: 10, level: 4 },
];

peopleContacts.forEach((element) => {
    let peopleFrom = peoples[element.from - 1];
    let peopleTo = peoples[element.to - 1];

    let peopleFromBox = `
        <div class="box">
            <img src="./images/${peopleFrom.photo}" />
            <div>
                <span class="${peopleFrom.theme}">${peopleFrom.position}</span>
                <span>${peopleFrom.fullName}</span>
            </div>
        </div>
    `;

    let peopleToBox = `
        <div class="box">
            <img src="./images/${peopleTo.photo}" />
            <div>
                <span class="${peopleFrom.theme}">${peopleTo.position}</span>
                <span>${peopleTo.fullName}</span>
            </div>
        </div>
    `; 

    switch (element.level) {
        case 1:
            if (!tree.querySelector(`[id='${element.to}']`)) {
                tree.innerHTML += `<a href="#" id='${element.to}'>${peopleToBox}</a>`;
            }
            if (tree.querySelector("ul.level1")) {
                let ulLevel1 = tree.querySelector("ul.level1");
                ulLevel1.innerHTML += `<li><a href="#" id='${element.from}'>${peopleFromBox}</a></li>`;
            } else {
                tree.innerHTML += `<ul class='level1'><li><a href="#" id='${element.from}'>${peopleFromBox}</a></li></ul>`;
            }
            break;
        case 2:
            let ulLevel1;
            if (tree.querySelector("ul.level1")) {
                ulLevel1 = tree.querySelector("ul.level1");
            } else {
                tree.innerHTML += `<ul class='level1'></ul>`;
                ulLevel1 = tree.querySelector("ul.level1");
            }

            let targetLi = ulLevel1.querySelector(`li > a[id='${element.to}']`);
            if (targetLi) {
                let parentLi = targetLi.parentNode;

                if (parentLi.querySelector("ul.level2")) {
                    let ulLevel2 = parentLi.querySelector("ul.level2");
                    ulLevel2.innerHTML += `<li><a href="#" id='${element.from}'>${peopleFromBox}</a></li>`;
                } else {
                    parentLi.innerHTML += `<ul class='level2'><li><a href="#" id='${element.from}'>${peopleFromBox}</a></li></ul>`;
                }
            }
            break;
        case 3:
            let ulLevel2;
            if (tree.querySelector(`ul.level2 > li > a[id='${element.to}']`)) {
                let liForLevel2 = tree.querySelector(`ul.level2 > li > a[id='${element.to}']`).parentNode;

                if (liForLevel2.querySelector("ul.level3")) {
                    let ulLevel3 = liForLevel2.querySelector("ul.level3");
                    ulLevel3.innerHTML += `<li><a href="#" id='${element.from}'>${peopleFromBox}</a></li>`;
                } else {
                    liForLevel2.innerHTML += `<ul class='level3'><li><a href="#" id='${element.from}'>${peopleFromBox}</a></li></ul>`;
                }
            }
            break;
        case 4:
            let liForLevel3;
            if (tree.querySelector(`ul.level3 > li > a[id='${element.to}']`)) {
                liForLevel3 = tree.querySelector(`ul.level3 > li > a[id='${element.to}']`).parentNode;

                if (liForLevel3.querySelector("ul.level4")) {
                    let ulLevel4 = liForLevel3.querySelector("ul.level4");
                    ulLevel4.innerHTML += `<li><a href="#" id='${element.from}'>${peopleFromBox}</a></li>`;
                } else {
                    liForLevel3.innerHTML += `<ul class='level4 vertical'><li><a href="#" id='${element.from}'>${peopleFromBox}</a></li></ul>`;
                }
            }
            break;
        case 5:
            let liForLevel4;
            if (tree.querySelector(`ul.level4 > li > a[id='${element.to}']`)) {
                liForLevel4 = tree.querySelector(`ul.level4 > li > a[id='${element.to}']`).parentNode;

                if (liForLevel4.querySelector("ul.level5")) {
                    let ulLevel5 = liForLevel4.querySelector("ul.level5");
                    ulLevel5.innerHTML += `<li><a href="#" id='${element.from}'>${peopleFromBox}</a></li>`;
                } else {
                    liForLevel4.innerHTML += `<ul class='level5'><li><a href="#" id='${element.from}'>${peopleFromBox}</a></li></ul>`;
                }
            }
            break;
        default:
            break;
    }
});
