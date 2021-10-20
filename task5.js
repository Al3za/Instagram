

        const totale = document.getElementById("total")

        const div = document.getElementById("div")

        const url = "https://mock-data-api.firebaseio.com/webb21/products.json"

        fetch(url)
            .then(res => res.json())
            .then(data => {
                Object.entries(data).forEach(element => {

                    images(element)

                });
            })

        let total = 0
        totale.innerHTML = `total= ${total}`

        function images(element) {
            const wrapper = document.createElement("div")

            wrapper.append(
                
                title(element),
                click(element),
                description(element),
                generals(element)

            )

            div.appendChild(wrapper)
        }

        function title(element) {

            const title = document.createElement("h1")
            title.innerHTML = `${element[1].name}`

            return title
        }

        function image(element) {

            const image = document.createElement("img")
            image.src = `${element[1].images[0].src.small}`
            image.alt = `${element[1].images[0].alt}`

            return image
        }

        function click(element) {
            const clickOnImage = image(element)

            clickOnImage.addEventListener("click", function () {
                const tot = `${element[1].price}`
                total += Number(tot)
                totale.innerHTML = `total= ${total}`
            })

            return clickOnImage
        }

        function description(element) {

            const description = document.createElement("p")
            description.innerHTML = `${element[1].description}`

            return description
        }

        function generals(element) {

            const generals = document.createElement("p")
            generals.innerHTML = `Price : ${element[1].price}<br>Rating : ${element[1].rating}<br>Stock : ${+element[1].stock}`

            return generals

        }


  