window.addEventListener('load', function () {
    // // 获取数据做二级联动
    // let allList = this.document.querySelector('#allList')

    // 获取pass按钮
    let pass = this.document.querySelector('#pass')

    // 获取玩家确认
    let playOne = this.document.querySelector('#Player1')
    let playTow = this.document.querySelector('#Player2')

    // 获取输入框
    let p1 = this.document.querySelector('#p1')
    let p2 = this.document.querySelector('#p2')
    // 获取选择框
    let list1 = this.document.querySelector('#list1')
    let list2 = this.document.querySelector('#list2')

    // 获取DOM
    let one = this.document.querySelector('#one')
    let tow = this.document.querySelector('#tow')
    let three = this.document.querySelector('#three')
    let four = this.document.querySelector('#four')
    let five = this.document.querySelector('#five')
    let six = this.document.querySelector('#six')
    let seven = this.document.querySelector('#seven')
    let eight = this.document.querySelector('#eight')
    let nine = this.document.querySelector('#nine')
    let ten = this.document.querySelector('#ten')
    let eleven = this.document.querySelector('#eleven')
    let twelve = this.document.querySelector('#twelve')
    let thirteen = this.document.querySelector('#thirteen')
    let fourteen = this.document.querySelector('#fourteen')
    let fifteen = this.document.querySelector('#fifteen')

    // 二维数组分行
    let allBxo = [[one, tow, three], [four, five, six, seven, eight], [nine, ten, eleven, twelve, thirteen, fourteen, fifteen]]


    playTow.addEventListener('click', function () {
        for (let i = 0; i < allBxo.length; i++) {

            if (i === list2.value - 1) {
                let data = p2.value - 1
                allBxo[i][data].className = 'hidden'
                // list2.value = null
                p2.value = null
            }
            else if (i != list2.value - 1) {
                for (v of allBxo[i]) {
                    console.log(v);
                    v.style.backgroundColor = '#999'

                }
            }
        }
    })

    playOne.addEventListener('click', function () {
        for (let i = 0; i < allBxo.length; i++) {

            if (i === list1.value - 1) {
                let data = p1.value - 1
                allBxo[i][data].className = 'hidden'
                // list2.value = null
                p1.value = null
            }
            else if (i != list1.value - 1) {
                for (v of allBxo[i]) {
                    console.log(v);
                    v.style.backgroundColor = '#999'

                }
            }
        }
    })

    // 逻辑部分
    pass.addEventListener('click', function () {
        alert('该你了，请吧！');
        p2.value = null
        p1.value = null
        list1.value = null
        list2.value = null
        for (v of allBxo) {
            for (m of v) {
                m.style.backgroundColor = 'pink'
            }
        }
    })

})