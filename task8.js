

        const seeTotal = document.getElementById("total")

        const varukorg = document.getElementById("varukorg")

        const div = document.getElementById("div")

        const url = "https://mock-data-api.firebaseio.com/webb21/products.json"

        const gateringData = []


        fetch(url)
            .then(res => res.json())
            .then(data => {
                Object.entries(data).forEach(element => {

                    gateringData.push(element)
                    


                    images(element)
                });
            })

        let total = 0
        seeTotal.innerHTML = `total= ${total}`

        function images(element) {

            const wrapper = document.createElement("div")

            wrapper.append(

                title(element),
                image(element),
                description(element),
                generals(element),
                button(element)
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
            image.width="300"

            return image
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

        function button(element) {

            const button = document.createElement("button")
            button.onclick = function () { uträkning(element) }
            button.innerText = "Köp"

            return button
        }

        function uträkning(element) {

            const price = `${element[1].price}`
            total += Number(price)
            seeTotal.innerHTML = `total= ${total}`

            varan(element)


        }

        function varan(element) {

            const varan = `${element[1].name} - ${element[1].price} <br>`
            varukorg.innerHTML += varan
        }

        function dataFilter() {

            const money = document.getElementById("input").value

            if (!money == null || money >= 1 && money < 6) {

                div.innerHTML = ""
                
                fetchRating(money)

            } else {
                alert("ange ett giltig rating nummer mellen 1 till 5")
            }
        }

        function fetchRating(money) {

            gateringData.forEach(items => {

                const rating = `${items[1].rating||0}`

                if (rating >= money) {
                    images(items)
                }
            })


        }












    