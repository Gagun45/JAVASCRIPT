{
    // #iz6emEsP2BA
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    const mapped = coursesAndDurationArray.map((course, index) => ({...course, id: index + 1}))
    console.log(mapped);
}

{
    // #AiN5CoUQ
    const cloneObj = (object) => {
        if (!object) throw new Error()
        const clone = JSON.parse(JSON.stringify(object))
        for (const key in object) {
            if (typeof object[key]==='function') {
                clone[key] = object[key].bind(clone)
            }
        }
        return clone
    }
    const user1 = {
        name: 'asd',
        age: 24,
        foo() {
            console.log(`Hello, my name is ${this.name} foo`)
        },
        bar() {
            console.log(`Hello, my name is ${this.name} bar`)
        }
    }
    const user2 = cloneObj(user1)
    console.log(user1===user2)
    console.log(user1.foo===user2.foo)
    console.log(user1.bar===user2.bar)
    user1.foo()
    user2.foo()
    user1.name='user1'
    user2.name='user2'
    user1.foo()
    user2.foo()
}