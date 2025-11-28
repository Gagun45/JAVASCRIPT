{
    // #XjJuucOMR0
    function User(id, name, surname, email, phone) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
    }
    const users = []
    for (let i=1;i<11;i++) {
        const user = new User(i, `name${i}`, `surname${i}`, `email${i}`, `phone${i}`)
        users.push(user)
    }
    // console.log(users)


//     #2ikXsE2WiKZ
    const evenIdUsers = users.filter(user=>user.id%2===0)
    // console.log(evenIdUsers);

//     #pOeHKct
    const sortedByIdAsc = users.sort((a,b)=>a.id-b.id)
    // console.log(sortedByIdAsc);
}

{
    //#nkMXISv
    function Client(id,name,surname,email,phone,products){
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = products
    }
    function Product(title, price) {
        this.title = title
        this.price = price
    }
    const clients = []
    for (let i =1; i<11;i++){
        const products = []
        for (let j=1;j<=i;j++) {
            const newProduct = new Product(`${i} client, ${j} product`,i*j)
            products.push(newProduct)
        }
        const newClient = new Client(i, `name${i}`, `surname${i}`, `email${i}`, `phone${i}`, products)
        clients.push(newClient)
    }
    // console.log(clients);

//     #8abtVjRv
    const sortedClientsByProdAmountAsc = clients.sort((a,b)=>a.order.length-b.order.length)
    // console.log(sortedClientsByProdAmountAsc);
}

{
//     #vV9a6584I5
    function Car(model, manufactor, year, maxSpeed, engineV){
        this.model=model
        this.manufactor=manufactor
        this.year=year
        this.maxSpeed=maxSpeed
        this.engineV=engineV
        this.drive = function () {console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)}
        this.info = function () {
            for (const key in this) {
                console.log(`${key} - ${this[key]}`)
            }
            console.log('---------------------')
        }
        this.increaseMaxSpeed = function (newSpeed) {
            if (newSpeed>0) this.maxSpeed=this.maxSpeed+newSpeed
        }
        this.changeYear = function (newValue){
            if (newValue>1815) this.year=newValue}
        this.addDriver = function (driver) {
            if (driver) this.driver = driver
        }
    }
    const car = new Car('a','b',123,100,24)
    const car2 = new Car('aqweqwe','b',123,100,24)
    // car.drive()
    // car.info()
    car.increaseMaxSpeed(33)
    car.changeYear(2020)
    car.addDriver({name: 'petya', age: 24})
    // console.log(car);
}
{
    //#5kla3yMpgp
    // console.log('-------------CLASS-----------------')
    class Car{
        constructor(model, manufactor, year, maxSpeed, engineV) {
            this.model=model
            this.manufactor=manufactor
            this.year=year
            this.maxSpeed=maxSpeed
            this.engineV=engineV
        }

        drive = function () {console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)}
        info = function () {
            for (const key in this) {
                console.log(`${key} - ${this[key]}`)
            }
            console.log('---------------------')
        }
        increaseMaxSpeed = function (newSpeed) {
            if (newSpeed>0) this.maxSpeed=this.maxSpeed+newSpeed
        }
        changeYear = function (newValue){
            if (newValue>1815) this.year=newValue}
        addDriver = function (driver) {
            if (driver) this.driver = driver
        }
    }
    const newCar1 = new Car('mod', 'manuf', 1992, 50, 8)
    // newCar1.info()
    // newCar1.drive()
    // newCar1.increaseMaxSpeed(50)
    // newCar1.changeYear(2000)
    // newCar1.addDriver({name: 'vasya', age: 50})
    // newCar1.info()
}
{
//     #zg6Fifnqig
    class Prince {
        constructor(name, age, size) {
            this.name=name
            this.age=age
            this.size=size
        }
        setWife = function (cinderella) {
            this.wife = cinderella
        }
    }
    class Cinderella {
        constructor(name, age, size) {
            this.name=name
            this.age=age
            this.size=size
        }
    }
    const prince = new Prince('prince', 24, 37)
    console.log(prince);
    const cinderellas = []
    for (let i=0;i<10;i++) {
        const newCinderella = new Cinderella(`name${i+1}`, 20+i, 35+0.5*i)
        cinderellas.push(newCinderella)
    }
    // for (const cind of cinderellas) {
    //     if (cind.size===prince.size) prince.setWife(cind)
    // }
    const princesCinderella = cinderellas.find(cind=>cind.size===prince.size)
    prince.setWife(princesCinderella)
    console.log(prince);
}
